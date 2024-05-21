import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import InputMask from 'react-input-mask'
import classes from './index.module.scss'

type Props = {
  name: string
  label: string
  register: UseFormRegister<FieldValues>
  required?: boolean
  error: any
  type?: 'text' | 'number' | 'password' | 'email' | 'social_id'
  validate?: (value: string) => boolean | string
  disabled?: boolean
  emailErrorMessage?: string
}

function isValidSocialID(social_id: string): boolean {
  social_id = social_id.replace(/[^\d]+/g, '');
  if (social_id.length !== 11 || /^(\d)\1{10}$/.test(social_id)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) sum += parseInt(social_id.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(social_id.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum += parseInt(social_id.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(social_id.substring(10, 11))) return false;

  return true;
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
  emailErrorMessage = 'Por favor, insira um email válido',
}) => {
  return (
    <div className={classes.inputWrap}>
      <label htmlFor={name} className={classes.label}>
        {label}
        {required && <span className={classes.asterisk}>&nbsp;*</span>}
      </label>
      {type === 'social_id' ? (
        <InputMask
          mask="999.999.999-99"
          {...register(name, {
            required: required ? 'Este campo é obrigatório' : false,
            validate,

          })}
          disabled={disabled}
        >
          {(inputProps) => <input {...inputProps} className={[classes.input, error ? classes.error : ''].filter(Boolean).join(' ')} />}
        </InputMask>
      ) : (
        <input
          className={[classes.input, error ? classes.error : ''].filter(Boolean).join(' ')}
          type={type}
          {...register(name, {
            required: required ? 'Este campo é obrigatório' : false,
            validate,
            ...(type === 'email'
              ? {
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: emailErrorMessage,
                  },
                }
              : {}),
          })}
          disabled={disabled}
        />
      )}
      {error && (
        <div className={classes.errorMessage}>
          {error.message || (error.type === 'required' && 'Este campo é obrigatório')}
        </div>
      )}

    </div>
  )
}
