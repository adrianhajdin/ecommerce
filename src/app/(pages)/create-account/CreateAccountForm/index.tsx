'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { useEmailSender } from '../../../_components/email'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

type FormData = {
  name: string
  email: string
  password: string
  passwordConfirm: string
  token: string
}

const CreateAccountForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const { login } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showTokenInput, setShowTokenInput] = useState(false)
  const [generatedToken, setGeneratedToken] = useState('')
  const { sendEmailCadastro } = useEmailSender()

  const {
    register,
    handleSubmit,
    reset, // Método para resetar os campos do formulário
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const password = useRef({})
  password.current = watch('password', '')

  useEffect(() => {
    // Limpa todos os estados ao sair do componente
    return () => {
      setLoading(false)
      setError(null)
      setShowTokenInput(false)
      setGeneratedToken('')
      reset() // Reset the form fields
    }
  }, [reset])

  const resendEmail = async (email: string, name: string) => {
    const newToken = Math.floor(1000 + Math.random() * 9000).toString()
    setGeneratedToken(newToken)
    try {
      await sendEmailCadastro(email, name, newToken)
      setError(null)
    } catch (err) {
      setError('Houve um erro ao reenviar o e-mail. Por favor, tente novamente.')
    }
  }

  const onSubmit = useCallback(
    async (data: FormData) => {
      if (showTokenInput) {
        if (data.token !== '' && data.token === generatedToken) {
          setLoading(true)
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`, {
              method: 'POST',
              body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            })

            if (!response.ok) {
              setLoading(false)
              if (response.status === 409) {
                setError('Conta já existente. Tente fazer login ou resetar a senha.')
                return
              }
              setError(response.statusText || 'Houve um erro ao criar a conta.')
              return
            }

            await login({ email: data.email, password: data.password })
            const redirect = searchParams.get('redirect')
            if (redirect) router.push(redirect as string)
            else router.push(`/`)
            window.location.href = '/'
          } catch (_) {
            setLoading(false)
            setError('Houve um erro com as credenciais fornecidas. Por favor, tente novamente.')
          }
        } else {
          setError('Token incorreto. Por favor, verifique o código enviado ao seu e-mail.')
        }
      } else {
        resendEmail(watch('email'), watch('name'))
        setShowTokenInput(true)
      }
    },
    [login, router, searchParams, sendEmailCadastro, showTokenInput, generatedToken, watch],
  )

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Message error={error} className={classes.message} />
      <Input
        name="email"
        label="E-mail"
        required
        register={register}
        error={errors.email}
        type="email"
      />
      <Input
        name="name"
        label="Nome Completo"
        required
        register={register}
        error={errors.name}
        type="text"
      />
      <Input
        name="password"
        type="password"
        label="Senha"
        required
        register={register}
        error={errors.password}
      />
      <Input
        name="passwordConfirm"
        type="password"
        label="Confirme sua senha"
        required
        register={register}
        validate={value => value === password.current || 'As senhas não correspondem'}
        error={errors.passwordConfirm}
      />
      {showTokenInput && (
        <div className={classes.tokenContainer}>
          <Input
            name="token"
            type="text"
            label="Código de Verificação (enviado por e-mail)"
            required
            register={register}
            error={errors.token}
          />
          <Button
            type="button"
            label="Reenviar E-mail"
            onClick={() => resendEmail(watch('email'), watch('name'))}
            appearance="secondary"
            className={classes.resendButton}
          />
        </div>
      )}
      <Button
        type="submit"
        label={loading ? 'Processando' : showTokenInput ? 'Verificar Token' : 'Criar conta'}
        disabled={loading}
        appearance="primary"
        className={classes.submit}
      />
      <div>
        {'Já tem uma conta? '}
        <Link href={`/login${allParams}`}>Faça Login</Link>
      </div>
    </form>
  )
}

export default CreateAccountForm
