'use client'

import React, { useCallback, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import Link from 'next/link'
import { Message } from '../../../_components/Message'
import classes from './index.module.scss'
import { useAuth } from '../../../_providers/Auth'
import { useEmailSender } from '../../../_components/email'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
  code: string
  newPassword: string
  confirmNewPassword: string
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState<string | null>(null)
  const [emailOnlyForm, setEmailOnlyForm] = useState(false)
  const [codeForm, setCodeForm] = useState(false)
  const [resetPasswordForm, setResetPasswordForm] = useState(false)
  const [email, setEmail] = useState<string | null>(null)
  const [generatedCode, setGeneratedCode] = useState<string | null>(null)

  const { sendEmailCadastro } = useEmailSender()
  const { register, handleSubmit, reset, formState: { errors, isLoading } } = useForm<FormData>()

  const onSubmit = useCallback(async (data: FormData) => {
    console.log('Login data:', data)
    try {
      await login(data)
      if (redirect?.current) router.push(redirect.current as string)
      else router.push('/')
      window.location.href = '/'
    } catch (_) {
      setError('There was an error with the credentials provided. Please try again.')
    }
  }, [login, router])

  const handleEmailLogin = useCallback(() => {
    setEmailOnlyForm(true)
  }, [])

  const handleEmailSubmit = useCallback(async (email: string) => {
    const code = Math.floor(1000 + Math.random() * 9000).toString()
    setGeneratedCode(code)
    console.log(code)
    setEmail(email)
    setCodeForm(true)
    // try {
    //   await sendEmailCadastro(email, 'Usuário', code)
    //   setError(null)
    //   setCodeForm(true)
    // } catch (err) {
    //   setError('Houve um problema ao enviar o código para seu e-mail. Por favor, tente novamente.')
    // }
    reset()
  }, [sendEmailCadastro, reset])

  const handleCodeSubmit = useCallback(async (code: string) => {
    console.log("Code submitted:", code)
    if (code === generatedCode) {
      setResetPasswordForm(true)
    } else {
      setError('Senha incorreta. Por favor, figite senhas iguais e tente novamente.')
    }
  }, [generatedCode])

  const handleBackToCodeForm = useCallback(() => {
    reset({ code: '' })
    setCodeForm(false)
  }, [reset])

  const handleResetPasswordSubmit = useCallback(async () => {
    console.log('Forgot password request for email:', email)
    
    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    const responseData = await response.json()
    console.log('Response data:', responseData)

    if (response.ok) {
      setTimeout(() => router.push('/login?resetSuccess=true'), 3000)
    } else {
      setError('There was an error with the password reset request. Please try again.')
    }
  }, [email, router])

  if (resetPasswordForm) {
    return (
      <form onSubmit={handleSubmit(handleResetPasswordSubmit)} className={classes.form}>
        <Message error={error} success={success} className={classes.message} />
        <Input
          name="newPassword"
          label="Nova senha"
          required
          register={register}
          error={errors.newPassword}
          type="password"
        />
        <Input
          name="confirmNewPassword"
          label="Confirme a nova senha"
          required
          register={register}
          error={errors.confirmNewPassword}
          type="password"
        />
        <Button
          type="submit"
          appearance="primary"
          label="Reset Password"
          disabled={isLoading}
          className={classes.submit}
        />
      </form>
    )
  }

  if (codeForm) {
    return (
      <form onSubmit={handleSubmit((data) => handleCodeSubmit(data.code))} className={classes.form}>
        <Message error={error} className={classes.message} />
        <Input
          name="code"
          label="Digite o código enviado para seu email"
          required
          register={register}
          error={errors.code}
          type="text"
        />
        <Button
          type="submit"
          appearance="primary"
          label="Confirmar"
          disabled={isLoading}
          className={classes.submit}
        />
        <Button
          type="button"
          appearance="secondary"
          label="Voltar"
          onClick={handleBackToCodeForm}
          className={classes.submit}
        />
      </form>
    )
  }

  if (emailOnlyForm) {
    return (
      <form onSubmit={handleSubmit((data) => handleEmailSubmit(data.email))} className={classes.form}>
        <Message error={error} className={classes.message} />
        <Input
          name="email"
          label="Receber código de acesso por email"
          required
          register={register}
          error={errors.email}
          type="email"
        />
        <Button
          type="submit"
          appearance="primary"
          label="Enviar"
          disabled={isLoading}
          className={classes.submit}
        />
      </form>
    )
  }

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
        name="password"
        type="password"
        label="Senha"
        required
        register={register}
        error={errors.password}
      />
      <Button
        type="submit"
        appearance="primary"
        label={isLoading ? 'Processando' : 'Login'}
        disabled={isLoading}
        className={classes.submit}
      />
      <div className={classes.separator}></div>
      <Button
        type="button"
        appearance="secondary"
        label="Entrar apenas com e-mail"
        onClick={handleEmailLogin}
        className={classes.submit}
      />
      <div className={classes.links}>
        <Link href={`/create-account${allParams}`}>Criar uma conta</Link>
        <br />
        <Link href={`/recover-password${allParams}`}>Esqueci minha senha</Link>
      </div>
    </form>
  )
}

export default LoginForm
