'use client'

import React, { Fragment, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import { Button } from '../../_components/Button'
import { Input } from '../../_components/Input'
import { Message } from '../../_components/Message'
import { useAuth } from '../../_providers/Auth'

import classes from './index.module.scss'

type FormData = {
  zipCode: string
}

export const FreightCalculator = ({
  onFreightPriceSet,
  zipCode,
  onFreightCalculation,
  onServiceId,
}) => {
  const [freightInfo, setFreightInfo] = useState(null)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { user, setUser } = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
    watch,
  } = useForm<FormData>()

  useEffect(() => {
    if (zipCode !== undefined) {
      const formattedZipCode = zipCode.toString().padStart(8, '0')
      reset({ zipCode: formattedZipCode })
      calculateFreight({ zipCode: formattedZipCode })
    } else if (user.zipCode) {
      const formattedZipCode = user.zipCode.toString().padStart(8, '0')
      reset({ zipCode: formattedZipCode })
      calculateFreight({ zipCode: formattedZipCode })
    }
  }, [zipCode, user.zipCode, reset])

  const calculateFreight = useCallback(
    async data => {
      const { zipCode } = data

      if (zipCode.length !== 8) {
        setError('O CEP deve conter 8 dígitos.')
        return
      }

      setError('')
      setFreightInfo(null)

      try {
        const response = await axios.post('/api/calculate-freight', { cep: zipCode })
        const firstOption = response.data[0]

        const formattedFreightInfo = {
          price: parseFloat(firstOption.custom_price || firstOption.price) + 3,
          deliveryTime: `${firstOption.delivery_time} dias`,
          carrier: firstOption.name,
          serviceId: firstOption.id,
        }

        setFreightInfo(formattedFreightInfo)
        onFreightPriceSet(formattedFreightInfo.price)
        onServiceId(formattedFreightInfo.serviceId)
        onFreightCalculation()
        if (!user.zipCode) {
          await updateUserCep(zipCode)
        }
      } catch (err) {
        console.error('Erro ao calcular o frete:', err)
        setError('Falha ao calcular o frete. Tente novamente.')
        onFreightPriceSet(0)
      }
    },
    [onFreightPriceSet, user.zipCode, onFreightCalculation],
  )

  const updateUserCep = useCallback(
    async zipCode => {
      console.log(JSON.stringify({ zipCode }))
      if (!user.zipCode && user.zipCode !== zipCode) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user.id}`, {
          credentials: 'include',
          method: 'PATCH',
          body: JSON.stringify({ zipCode }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const json = await response.json()
          setUser(json.doc)
          setError('')
        } else {
          setError('There was a problem updating your account.')
        }
      }
    },
    [user, setUser],
  )

  return (
    <form onSubmit={handleSubmit(calculateFreight)} className={classes.form}>
      <Message error={error} success={success} className={classes.message} />
      {!user.zipCode && (
        <Fragment>
          <Input name="zipCode" label="CEP" register={register} type="text" />
          <Button
            type="submit"
            label={isLoading ? 'Calculando...' : 'Calcular Frete'}
            disabled={isLoading}
            appearance="primary"
            className={classes.submit}
          />
          <a
            href="http://www.buscacep.correios.com.br/sistemas/buscacep/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.forgotCep}
          >
            Não sei meu CEP
          </a>
        </Fragment>
      )}
      {freightInfo && user.zipCode && (
        <div className={classes.result}>
          <b>
            <p>Frete: R$ {freightInfo.price}</p>
          </b>
          <p>Prazo de entrega: {freightInfo.deliveryTime}</p>
        </div>
      )}
    </form>
  )
}

export default FreightCalculator
