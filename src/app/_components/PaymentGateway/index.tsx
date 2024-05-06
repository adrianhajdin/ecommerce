'use client'
import React from 'react';
import classes from './index.module.scss';
import axios from 'axios';

import { Payment, initMercadoPago } from "@mercadopago/sdk-react";

initMercadoPago("TEST-cecee62f-1fc2-4e5c-92f2-afb14674c0e5", {locale: 'pt-BR'});

export const PaymentGateway = ({ amount }) => {

  const initialization = {
    amount: amount,
    preferenceId: "<PREFERENCE_ID>",
  };

  const customization = {
    paymentMethods: {
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {
    // callback chamado ao clicar no botão de submissão dos dados
    const response = await axios.post('/api/process-payment', { formData });
  };

  const onError = async (error) => {
    // callback chamado para todos os casos de erro do Brick
    console.log(error);
  };

  const onReady = async () => {
    /*
      Callback chamado quando o Brick estiver pronto.
      Aqui você pode ocultar loadings do seu site, por exemplo.
    */
  };

  return (
    <Payment
      initialization={initialization}
      customization={customization}
      onSubmit={onSubmit}
      onError={onError}
      onReady={onReady}
    />
  );
};
