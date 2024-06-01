'use client'

import React, { Fragment, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { useEmailSender } from '../../../_components/email'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

type FormData = {
  email: string
  token: string
  password: string
  passwordConfirm: string // Adicionando confirmação de senha ao tipo de dados do formulário
}

export const RecoverPasswordForm: React.FC = () => {
  const [error, setError] = useState('')
  const [stage, setStage] = useState<'initial' | 'emailSent' | 'token' | 'resetPassword'>('initial')
  const [generatedToken, setGeneratedToken] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>()

  const { sendEmailCadastro } = useEmailSender()
  const { login } = useAuth()
  const router = useRouter()

  const resendEmail = async (email: string) => {
    const newToken = Math.floor(1000 + Math.random() * 9000).toString()
    setGeneratedToken(newToken)
    try {
      await sendEmailCadastro(email, 'Usuário', newToken)
      setError(null)
    } catch (err) {
      setError('Houve um erro ao reenviar o e-mail. Por favor, tente novamente.')
    }
  }

  const onSubmitEmail = useCallback(
    async (data: FormData) => {
      const token = Math.floor(1000 + Math.random() * 9000).toString()
      setGeneratedToken(token)
      try {
        await sendEmailCadastro(data.email, 'Usuário', token)
        setStage('emailSent')
        setError('')
      } catch (err) {
        setError(
          'Houve um problema ao tentar enviar o e-mail de redefinição de senha. Por favor, tente novamente.',
        )
      }
    },
    [sendEmailCadastro],
  )

  const onSubmitToken = useCallback(
    async (data: FormData) => {
      if (data.token === generatedToken) {
        setStage('resetPassword')
        setError('')
      } else {
        setError('Token inválido. Por favor, verifique o código enviado ao seu e-mail.')
      }
    },
    [generatedToken],
  )

  const onSubmitPassword = useCallback(
    async (data: FormData) => {
      if (data.password !== data.passwordConfirm) {
        setError('As senhas não correspondem. Por favor, verifique novamente.')
        return
      }
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/reset-password`,
        {
          method: 'POST',
          body: JSON.stringify({ token: data.token, password: data.password }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      if (response.ok) {
        const json = await response.json()
        await login({ email: data.email, password: data.password })
        reset()
        setStage('initial')
        router.push('/account?success=Password reset successfully.')
      } else {
        setError('Houve um problema ao redefinir sua senha. Por favor, tente novamente mais tarde.')
      }
      reset()
      setStage('initial')
    },
    [login, reset, router],
  )

  return (
    <Fragment>
      <form
        onSubmit={handleSubmit(
          stage === 'initial'
            ? onSubmitEmail
            : stage === 'emailSent'
            ? onSubmitToken
            : onSubmitPassword,
        )}
        className={classes.form}
      >
        <p>
          Digite o seu endereço de e-mail registrado. Enviaremos um token para redefinir sua senha.
        </p>
        <Input
          name="email"
          label="Endereço de E-mail"
          required
          register={register}
          error={errors.email}
          type="email"
        />
        {stage !== 'initial' && (
          <Fragment>
            <p>
              Verifique seu e-mail e insira o token abaixo para continuar com a redefinição de sua
              senha.
            </p>
            <Input
              name="token"
              label="Insira o Token"
              required
              register={register}
              error={errors.token}
              type="text"
            />
            <Button
              type="button"
              label="Reenviar E-mail"
              onClick={() => resendEmail(watch('email'))}
              appearance="secondary"
              className={classes.resendButton}
            />
          </Fragment>
        )}
        {stage === 'resetPassword' && (
          <Fragment>
            <p>Por favor, insira sua nova senha.</p>
            <Input
              name="password"
              type="password"
              label="Nova Senha"
              required
              register={register}
              error={errors.password}
            />
            <Input
              name="passwordConfirm"
              type="password"
              label="Confirme a Nova Senha"
              required
              register={register}
              validate={value => value === watch('password') || 'As senhas não correspondem'}
              error={errors.passwordConfirm}
            />
            <Input name="token" type="hidden" value={watch('token')} register={register} />
            <Input name="email" type="hidden" value={watch('email')} register={register} />
          </Fragment>
        )}
        <Message error={error} className={classes.message} />
        <Button
          type="submit"
          appearance="primary"
          label={
            stage === 'initial'
              ? 'Recuperar Senha'
              : stage === 'emailSent'
              ? 'Enviar Token'
              : 'Redefinir Senha'
          }
          className={classes.submit}
        />
      </form>
    </Fragment>
  )
}
