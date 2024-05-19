'use client'

import React, { useCallback, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'
import { useEmailSender } from '../../../_components/email';

import classes from './index.module.scss'

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  address: string;
  address2: string;
  zipcode: string;
  cpf: string;
}

const CreateAccountForm: React.FC = () => {
  const searchParams = useSearchParams()
  const allParams = searchParams.toString() ? `?${searchParams.toString()}` : ''
  const { login } = useAuth()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { sendEmailCadastro } = useEmailSender()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormData>()

  const password = useRef({})
  password.current = watch('password', '')

  const onSubmit = useCallback(
    async (data: FormData) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (!response.ok) {
        const message = response.statusText || 'Houve um erro ao criar a conta.'
        setError(message)
        return
      }

      const redirect = searchParams.get('redirect')

      const timer = setTimeout(() => {
        setLoading(true)
      }, 1000)

      try {
        await login({ email: data.email, password: data.password })
        await sendEmailCadastro(data.email, data.name)
        clearTimeout(timer)
        if (redirect) router.push(redirect as string)
        else router.push(`/`)
        window.location.href = '/'
      } catch (_) {
        clearTimeout(timer)
        setError('Houve um erro com as credenciais fornecidas. Por favor, tente novamente.')
      }
    },
    [login, router, searchParams, sendEmailCadastro],
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
        name="cpf"
        label="CPF"
        required
        register={register}
        error={errors.cpf}
        type="text"
      />
      <Input
        name="zipcode"
        label="CEP"
        required
        register={register}
        error={errors.zipcode}
        type="text"
      />
      <Input
        name="address"
        label="Endereço"
        required
        register={register}
        error={errors.address}
        type="text"
      />
      <Input
        name="address2"
        label="Complemento"
        required
        register={register}
        error={errors.address2}
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
      <Button
        type="submit"
        label={loading ? 'Processando' : 'Criar conta'}
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
