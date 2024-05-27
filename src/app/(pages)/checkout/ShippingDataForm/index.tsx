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
  house_number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
};

export const ShippingDataForm = ({ onNext }) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user, setUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<FormData>();

  const updateShippingData = useCallback(
    async (data) => {
      if (user) {
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
          onNext();
        } else {
          setError('There was a problem updating your account.');
        }
      }
    },
    [user, setUser, onNext]
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
            />
            {errors.address && <Message error={errors.address.message} />}
          </div>
          <div className={classes.flex1}>
            <Input
              name="house_number"
              label="Número"
              register={register}
              type="text"
            />
            {errors.house_number && <Message error={errors.house_number.message} />}
          </div>
        </div>
        <div className={classes.inlineFields}>
          <div className={classes.flex1}>
            <Input
              name="complement"
              label="Complemento"
              register={register}
              type="text"
            />
            {errors.complement && <Message error={errors.complement.message} />}
          </div>
          <div className={classes.flex1}>
            <Input
              name="neighborhood"
              label="Bairro"
              register={register}
              type="text"
            />
            {errors.neighborhood && <Message error={errors.neighborhood.message} />}
          </div>
          <div className={classes.flex1}>
            <Input
              name="city"
              label="Cidade"
              register={register}
              type="text"
            />
            {errors.city && <Message error={errors.city.message} />}
          </div>
          <div className={classes.flex0_5}>
            <Input
              name="state"
              label="Estado"
              register={register}
              type="text"
            />
            {errors.state && <Message error={errors.state.message} />}
          </div>
        </div>
        <Button
          type="submit"
          label={isLoading ? 'Processando...' : 'Ir para pagamento'}
          disabled={isLoading}
          appearance="primary"
          className={classes.submit}
        />
      </Fragment>
    </form>
  );
};

export default ShippingDataForm;
