'use client'

import React, { useState } from 'react';
import classes from './index.module.scss';

import { Payment, initMercadoPago, CardPayment } from "@mercadopago/sdk-react";

initMercadoPago("TEST-cecee62f-1fc2-4e5c-92f2-afb14674c0e5");

export const PaymentGateway = () => {
  const initialization = {
    amount: 100,
    preferenceId: "<PREFERENCE_ID>",
   };
   const customization = {
    paymentMethods: {
      ticket: "all",
      bankTransfer: "all",
      creditCard: "all",
      debitCard: "all",
      mercadoPago: "all",
    },
   };
   const onSubmit = async (
    { selectedPaymentMethod, formData }
   ) => {
    // callback chamado ao clicar no botão de submissão dos dados
    return new Promise((resolve, reject) => {
      fetch("/process_payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((response) => {
          // receber o resultado do pagamento
          resolve();
        })
        .catch((error) => {
          // lidar com a resposta de erro ao tentar criar o pagamento
          reject();
        });
    });
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
      onSubmit={async (param) => {
      console.log(param);
      }}
    />
  );
};

export default PaymentGateway;
