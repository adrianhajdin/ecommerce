'use client'

import React, { useCallback, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import Link from 'next/link'
import { Message } from '../../../_components/Message'
import classes from './index.module.scss'
import { useAuth } from '../../../_providers/Auth'
import { useForm } from 'react-hook-form'

type FormData = {
  email: string
  password: string
  code: string
}

const LoginForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const redirect = useRef(searchParams.get('redirect'))
  const { login } = useAuth()
  const router = useRouter()
  const [error, setError] = React.useState<string | null>(null)
  const [emailOnlyForm, setEmailOnlyForm] = useState(false)
  const [codeForm, setCodeForm] = useState(false)

  const { register, handleSubmit, reset, formState: { errors, isLoading } } = useForm<FormData>()

  const onSubmit = useCallback(async (data: FormData) => {
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
    console.log("Código enviado para:", email);
    reset();  // Reset form fields
    setCodeForm(true)
  }, [reset])

  const handleCodeSubmit = useCallback(async (code: string) => {
    console.log("Código recebido para validação:", code);
    router.push('/dashboard')
  }, [router])

  const handleBackToCodeForm = useCallback(() => {
    reset({ code: '' });  // Clear code field specifically
    setCodeForm(false);
  }, [reset])

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
