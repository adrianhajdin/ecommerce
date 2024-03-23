import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import classes from './index.module.scss'

type Props = {
  name: string
  label: string
  register: UseFormRegister<FieldValues>
  required?: boolean
  error: any
  type?: 'text' | 'number' | 'password' | 'email'
  validate?: (value: string) => boolean | string
  disabled?: boolean
  // Adicione uma nova propriedade para personalizar a mensagem de erro para emails inválidos
  emailErrorMessage?: string
}

export const Input: React.FC<Props> = ({
  name,
  label,
  required,
  register,
  error,
  type = 'text',
  validate,
  disabled,
  emailErrorMessage = 'Por favor, insira um email válido', // Mensagem padrão para erro de email em português
}) => {
  return (
    <div className={classes.inputWrap}>
      <label htmlFor={name} className={classes.label}> {/* Corrigido htmlFor para usar a variável name */}
        {label}
        {required && <span className={classes.asterisk}>&nbsp;*</span>}
      </label>
      <input
        className={[classes.input, error ? classes.error : ''].filter(Boolean).join(' ')}
        type={type}
        {...register(name, {
          required: required ? 'Este campo é obrigatório' : false, // Mensagem de campo obrigatório em português
          validate,
          ...(type === 'email'
            ? {
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: emailErrorMessage, // Utilizando a nova propriedade
                },
              }
            : {}),
        })}
        disabled={disabled}
      />
      {error && (
        <div className={classes.errorMessage}>
          {error.message || error.type === 'required' && 'Este campo é obrigatório'}
        </div>
      )}
    </div>
  )
}
