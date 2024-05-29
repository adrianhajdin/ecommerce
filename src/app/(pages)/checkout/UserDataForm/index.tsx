'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../_providers/Auth';
import { Button } from '../../../_components/Button';
import { Input } from '../../../_components/Input';
import { Message } from '../../../_components/Message';

import classes from './index.module.scss';

type FormData = {
  name: string;
  socialId: string;
  phoneNumber: string;
  birthdate: string;
};

export const PersonalDataForm = ({ onNext }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEditable, setIsEditable] = useState(true);
  const { user, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        socialId: user.socialId,
        phoneNumber: user.phoneNumber,
        birthdate: user.birthdate,
      });
    }
  }, [user, reset]);

  const updateUserData = useCallback(
    async (data) => {
      if (user && isEditable) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user.id}`, {
          credentials: 'include',
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const json = await response.json();
          setUser(json.doc);
          setError('');
          setIsEditable(false); // Desabilita os campos após submissão
          onNext();
        } else {
          setError('Houve um problema ao atualizar sua conta.');
        }
      }
      else {
        setIsEditable(true);
      }
    },
    [user, setUser, onNext, isEditable]
  );


  return (
    <form onSubmit={handleSubmit(updateUserData)} className={classes.form}>
      <Message error={error} success={success} className={classes.message} />
      <div className={classes.inlineFields}>
        <Input
          name="name"
          label="Nome Completo"
          required={true}
          register={register}
          validate={value => value.length > 0 || 'O nome não pode estar vazio'}
          error={errors.name}
          type="text"
          disabled={!isEditable}
          className={!isEditable ? classes.noBackground : ''}
        />

        <Input
          name="socialId"
          label="CPF"
          register={register}
          error={errors.socialId}
          type="text"
          disabled={!isEditable}
          className={!isEditable ? classes.noBackground : ''}
        />
      </div>
      <Input
        name="phoneNumber"
        label="Telefone"
        register={register}
        error={errors.phoneNumber}
        type="text"
        disabled={!isEditable}
        className={!isEditable ? classes.noBackground : ''}
      />
      <Input
        name="birthdate"
        label="Data de Nascimento"
        register={register}
        error={errors.birthdate}
        type="text"
        disabled={!isEditable}
        className={!isEditable ? classes.noBackground : ''}
      />
      <Button
        type="submit"
        label={isLoading ? 'Processando...' : isEditable ? 'Ir para entrega' : 'Editar'}
        disabled={isLoading}
        appearance="primary"
        className={classes.submit}

      />
    </form>
  );
};

export default PersonalDataForm;
