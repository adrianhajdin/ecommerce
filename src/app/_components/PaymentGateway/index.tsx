import React, { useState } from 'react';
import axios from 'axios';
import { Payment, initMercadoPago, StatusScreen  } from "@mercadopago/sdk-react";


initMercadoPago("TEST-e4e31358-531f-4c4d-bd5c-3e77edc4ee3f", {locale: 'pt-BR'});

export const PaymentGateway = ({ amount }) => {
  const [paymentId, setPaymentId] = useState(null);
  const transactionDescription = 'Minimo1';

  const initialization = {
    amount: amount,
    preferenceId: "<PREFERENCE_ID>",
  };

  const customization = {
    paymentMethods: {
      bankTransfer: "all",
      creditCard: "all",
    },
  };

  const onSubmit = async ({ selectedPaymentMethod, formData }) => {

    const paymentData = {
      ...formData,
      description: transactionDescription, // Inclui a descrição do produto, além do formulário
      transaction_amount: amount
  };
    // Callback chamado ao clicar no botão de submissão dos dados
    const response = await axios.post('/api/process-payment', { paymentData });
    if (response.data && response.data.id) {
      setPaymentId(response.data.id);
      console.log('Payment processed', response);
    }
  };

  const onError = (error) => {
    console.error("Error processing payment", error);
  };

  const onReady = () => {
    console.log("Payment form ready");
  };

  // Renderiza o componente StatusScreen se paymentId estiver definido, caso contrário renderiza Payment
  return (
    <div>
      {!paymentId ? (
        <Payment
          initialization={initialization}
          customization={customization}
          onSubmit={onSubmit}
          onError={onError}
          onReady={onReady}
        />
      ) : (
        <StatusScreen initialization={{paymentId: paymentId}} onError={(error) => console.error(error)} />
      )}
    </div>
  );
};
