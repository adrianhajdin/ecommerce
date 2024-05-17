'use client';

import React, { Fragment, useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios'; // Certifique-se de ter o axios instalado

import { Settings } from '../../../../payload/payload-types';
import { Button } from '../../../_components/Button';
import { LoadingShimmer } from '../../../_components/LoadingShimmer';
import { useAuth } from '../../../_providers/Auth';
import { useCart } from '../../../_providers/Cart';
import { useTheme } from '../../../_providers/Theme';
import cssVariables from '../../../cssVariables';
import { CheckoutForm } from '../CheckoutForm';
import { CheckoutItem } from '../CheckoutItem';
import {CancelShipmentComponent } from '../../../_components/FreightCancel';
import { FreightCalculator,completeFreightPurchase} from '../../../_components/FreightSend';
import classes from './index.module.scss';

const apiKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`;
const stripePromise = loadStripe(apiKey);

export const CheckoutPage = ({ settings }) => {
  const { productsPage } = settings;
  const { user } = useAuth();
  const router = useRouter();
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [freightPrice, setFreightPrice] = useState(0);
  const { cart, cartIsEmpty, cartTotal } = useCart();
  const { theme } = useTheme();

  useEffect(() => {
    if (user === null || cartIsEmpty) {
      router.push(cartIsEmpty ? '/cart' : '/login');
    }
  }, [user, cartIsEmpty, router]);

  useEffect(() => {
    const makePaymentIntent = async () => {
      if (!hasMadePaymentIntent.current && user && cart) {
        hasMadePaymentIntent.current = true;
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-payment-intent`, {
            method: 'POST',
            credentials: 'include',
          });
          const data = await response.json();
          if (data.error) {
            setError(data.error);
          } else {
            setClientSecret(data.client_secret);
          }
        } catch (error) {
          console.error('Erro ao criar intenção de pagamento:', error);
          setError('Algo deu errado, tente novamente.');
        }
      }
    };
    makePaymentIntent();
  }, [user, cart]);

  // Corrigindo a lógica de cálculo do total
  const totalWithFreight = parseFloat(cartTotal.raw) / 100 + parseFloat(freightPrice);

  return (
    <Fragment>
      {!cartIsEmpty ? (
        <div className={classes.items}>
          <div className={classes.header}>
            <p>Produtos</p>
            <div className={classes.headerItemDetails}>
              <p className={classes.quantity}>Quantidade</p>
              <p className={classes.subtotal}>Subtotal</p>
            </div>
          </div>
          <ul>
            {cart.items.map((item, index) => (
              <CheckoutItem key={index} product={item.product} title={item.product.title} metaImage={item.product.meta.image} quantity={item.quantity} index={index} />
            ))}
            <FreightCalculator onFreightPriceSet={setFreightPrice} />
            <div className={classes.orderTotal}>
              <p>Total do pedido</p>
              <p>R$ {totalWithFreight.toFixed(2)}</p>
            </div>
          </ul>
        </div>
      ) : (
        <div>
          <p>Seu carrinho está vazio.</p>
          <Link href="/cart">Voltar ao carrinho</Link>
        </div>
      )}
      {!clientSecret && !error && <LoadingShimmer number={2} />}
      {!clientSecret && error && (
        <div className={classes.error}>
          <p>Error: {error}</p>
          <Button label="Volte para o carrinho" href="/cart" appearance="secondary" />
        </div>
      )}
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret, appearance: { theme: theme === 'dark' ? 'dark' : 'light', variables: cssVariables } }}>
         <CancelShipmentComponent />
          <CheckoutForm />
        </Elements>
      )}
    </Fragment>
  );
};

const hasMadePaymentIntent = { current: false }; // Ajuste para evitar múltiplos intents no mesmo carregamento
