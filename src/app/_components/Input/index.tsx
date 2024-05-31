import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import InputMask from 'react-input-mask'

import classes from './index.module.scss'

type Props = {
  name: string
  label: string
  register: UseFormRegister<FieldValues & any>
  required?: boolean
  error: any
  type?: 'text' | 'number' | 'password' | 'email' | 'socialId' | 'phone' | 'naive_date' | 'select'
  validate?: (value: string) => boolean | string
  disabled?: boolean
  className?: string // Adicionando a prop className para receber classes adicionais
  options?: string[] // Adicionando a prop options como uma lista de strings
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
  className,
  options,
}) => {
  return (
    <div className={classes.inputWrap}>
      <label htmlFor={name} className={classes.label}>
        {label}
        {required ? <span className={classes.asterisk}>&nbsp;*</span> : ''}
      </label>
      {type === 'socialId' ? (
        <InputMask
          mask="999.999.999-99"
          className={[classes.input, error && classes.error, className].filter(Boolean).join(' ')}
          disabled={disabled}
          {...register(name, {
            required,
            validate,
            setValueAs: value => value.replace(/\D/g, ''),
          })}
        >
          {inputProps => <input {...inputProps} />}
        </InputMask>
      ) : type === 'phone' ? (
        <InputMask
          mask="(99) 99999-9999"
          maskChar={null}
          className={[classes.input, error && classes.error, className].filter(Boolean).join(' ')}
          disabled={disabled}
          {...register(name, {
            required,
            validate,
          })}
          formatChars={{
            '9': '[0-9]',
            a: '[0-9]',
            '*': '[0-9]',
          }}
          maskPlaceholder={null}
        >
          {inputProps => <input {...inputProps} />}
        </InputMask>
      ) : type === 'naive_date' ? (
        <InputMask
          mask="99/99/9999"
          maskChar={null}
          className={[classes.input, error && classes.error, className].filter(Boolean).join(' ')}
          disabled={disabled}
          {...register(name, {
            required,
            validate,
          })}
          formatChars={{
            '9': '[0-9]',
            a: '[0-9]',
            '*': '[0-9]',
          }}
          maskPlaceholder={null}
        >
          {inputProps => <input {...inputProps} />}
        </InputMask>
      ) : type === 'select' ? (
        <select
          className={[classes.input, error && classes.error, className].filter(Boolean).join(' ')}
          disabled={disabled}
          {...register(name, {
            required,
            validate,
          })}
        >
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
      ) : (
        <input
          className={[classes.input, error && classes.error, className].filter(Boolean).join(' ')}
          {...{ type }}
          {...register(name, {
            required,
            validate,
            ...(type === 'email'
              ? {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email',
                  },
                }
              : {}),
          })}
          disabled={disabled}
        />
      )}
      {error && (
        <div className={classes.errorMessage}>
          {!error?.message && error?.type === 'required' ? 'Campo obrigatório' : error?.message}
        </div>
      )}
    </div>
  )
}
