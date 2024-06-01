'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

type FormData = {
  name: string
  socialId: string
  phoneNumber: string
  birthdate: string
}

const isValidPhoneNumber = phone => {
  const phoneRegex = /^(?:\(\d{2}\)\s)?(?:\d{5}-\d{3,4})$/
  return phoneRegex.test(phone)
}

function isValidSocialId(socialId) {
  if (!socialId) {
    return false
  }
  // Remove all non-numeric characters
  socialId = socialId.toString().replace(/\D/g, '')

  // Check if the length is exactly 11 characters
  if (socialId.length !== 11) return false

  // Check if all digits are the same
  if (/^(\d)\1{10}$/.test(socialId)) return false

  let sum = 0
  let remainder

  // Calculate the first digit verifier
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(socialId.substring(i - 1, i)) * (11 - i)
  }

  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(socialId.substring(9, 10))) return false

  sum = 0

  // Calculate the second digit verifier
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(socialId.substring(i - 1, i)) * (12 - i)
  }

  remainder = (sum * 10) % 11
  if (remainder === 10 || remainder === 11) remainder = 0
  if (remainder !== parseInt(socialId.substring(10, 11))) return false

  return true
}

function parseSocialId(socialId) {
  if (typeof socialId === 'string') {
    return parseInt(socialId.replace(/\D/g, ''), 10)
  }
}

export const PersonalDataForm = ({ onNext }) => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isEditable, setIsEditable] = useState(true)
  const { user, setUser } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<FormData>()

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        socialId: user.socialId.toString(),
        phoneNumber: user.phoneNumber,
        birthdate: user.birthdate,
      })
    }
  }, [user, reset])

  const updateUserData = useCallback(
    async data => {
      if (user && isEditable) {
        data.socialId = parseSocialId(data.socialId)
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user.id}`, {
          credentials: 'include',
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const json = await response.json()
          setUser(json.doc)
          setError('')
          setIsEditable(false) // Desabilita os campos após submissão
          onNext()
        } else {
          setError('Houve um problema ao atualizar sua conta.')
        }
      } else {
        setIsEditable(true)
      }
    },
    [user, setUser, onNext, isEditable],
  )

  return (
    <form onSubmit={handleSubmit(updateUserData)} className={classes.form}>
      <Message error={error} success={success} className={classes.message} />
      <div className={classes.inlineFields}>
        <Input
          name="name"
          label="Nome Completo"
          required={true}
          register={register}
          error={errors.name}
          type="text"
          disabled={!isEditable}
          className={!isEditable ? classes.noBackground : ''}
        />
      </div>
      <div className={classes.inlineFields}>
        <Input
          name="socialId"
          label="CPF"
          required={true}
          register={register}
          error={errors.socialId}
          validate={value => isValidSocialId(value) || 'CPF Inválido'}
          type="socialId"
          disabled={!isEditable}
          className={!isEditable ? classes.noBackground : ''}
        />
        <Input
          name="phoneNumber"
          label="Telefone"
          register={register}
          error={errors.phoneNumber}
          type="phone"
          validate={value => isValidPhoneNumber(value) || 'Telefone Inválido'}
          required={true}
          disabled={!isEditable}
          className={!isEditable ? classes.noBackground : ''}
        />
        <Input
          name="birthdate"
          label="Data de Nascimento"
          register={register}
          error={errors.birthdate}
          required={true}
          type="naive_date"
          disabled={!isEditable}
          className={!isEditable ? classes.noBackground : ''}
        />
      </div>
      <Button
        type="submit"
        label={isLoading ? 'Processando...' : isEditable ? 'Ir para entrega' : 'Editar'}
        disabled={isLoading}
        appearance="primary"
        className={classes.submit}
      />
    </form>
  )
}

export default PersonalDataForm
