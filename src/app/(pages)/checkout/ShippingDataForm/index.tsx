'use client';

import React, { useEffect, useState, useCallback, Fragment } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useAuth } from '../../../_providers/Auth';
import { Button } from '../../../_components/Button';
import { Input } from '../../../_components/Input';
import { Message } from '../../../_components/Message';

import classes from './index.module.scss';

type FormData = {
  address: string;
  houseNumber: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

export const ShippingDataForm = ({ onNext, onShippingDataChange }) => {
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

  const updateShippingData = useCallback(
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
          onShippingDataChange(data); // Passa os dados do formulário para o componente pai
          setIsEditable(false); // Desabilita os campos após submissão
          onNext();
        } else {
          setError('There was a problem updating your account.');
        }
      }
      else{
        setIsEditable(true);
      }
    },
    [user, setUser, onNext, onShippingDataChange, isEditable]
  );

  return (
    <form onSubmit={handleSubmit(updateShippingData)} className={classes.form}>
      <Message error={error} success={success} className={classes.message} />
      <Fragment>
        <div className={classes.inlineFields}>
          <div className={classes.flex2}>
            <Input
              name="address"
              label="Endereço"
              register={register}
              type="text"
              disabled={!isEditable}
              className={!isEditable ? classes.noBackground : ''}
            />
            {errors.address && <Message error={errors.address.message} />}
          </div>
          <div className={classes.flex1}>
            <Input
              name="houseNumber"
              label="Número"
              register={register}
              type="text"
              disabled={!isEditable}
              className={!isEditable ? classes.noBackground : ''}
            />
            {errors.houseNumber && <Message error={errors.houseNumber.message} />}
          </div>
        </div>
        <div className={classes.inlineFields}>
          <div className={classes.flex1}>
            <Input
              name="complement"
              label="Complemento"
              register={register}
              type="text"
              disabled={!isEditable}
              className={!isEditable ? classes.noBackground : ''}
            />
            {errors.complement && <Message error={errors.complement.message} />}
          </div>
          <div className={classes.flex1}>
            <Input
              name="neighborhood"
              label="Bairro"
              register={register}
              type="text"
              disabled={!isEditable}
              className={!isEditable ? classes.noBackground : ''}
            />
            {errors.neighborhood && <Message error={errors.neighborhood.message} />}
          </div>
          <div className={classes.flex1}>
            <Input
              name="city"
              label="Cidade"
              register={register}
              type="text"
              disabled={!isEditable}
              className={!isEditable ? classes.noBackground : ''}
            />
            {errors.city && <Message error={errors.city.message} />}
          </div>
          <div className={classes.flex0_5}>
            <Input
              name="state"
              label="Estado"
              register={register}
              type="text"
              disabled={!isEditable}
              className={!isEditable ? classes.noBackground : ''}
            />
            {errors.state && <Message error={errors.state.message} />}
          </div>
        </div>
       <Button
            type="submit"
            label={isLoading ? 'Processando...' : isEditable ? 'Ir para entrega' : 'Editar'}
            disabled={isLoading}
            appearance="primary"
            className={classes.submit}
          />
      </Fragment>
    </form>
  );
};

export default ShippingDataForm;
