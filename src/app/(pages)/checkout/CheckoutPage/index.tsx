'use client'

import React, { Fragment, useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios' // Certifique-se de ter o axios instalado
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { CancelShipmentComponent } from '../../../_components/FreightCancel'
import { FreightCalculator } from '../../../_components/FreightSend'
import { LoadingShimmer } from '../../../_components/LoadingShimmer'
import { PaymentGateway } from '../../../_components/PaymentGateway'
import { useAuth } from '../../../_providers/Auth'
import { useCart } from '../../../_providers/Cart'
import { useTheme } from '../../../_providers/Theme'
import cssVariables from '../../../cssVariables'
import { CheckoutForm } from '../CheckoutForm'
import { CheckoutItem } from '../CheckoutItem'
import { ShippingDataForm } from '../ShippingDataForm'
import { PersonalDataForm } from '../UserDataForm'

import classes from './index.module.scss'

export const CheckoutPage = () => {
  const { user } = useAuth()
  const router = useRouter()
  const [error, setError] = useState(null)
  const [clientSecret, setClientSecret] = useState(null)
  const [freightPrice, setFreightPrice] = useState(0)
  const [showPersonalData, setShowPersonalData] = useState(false)
  const [showShippingData, setShowShippingData] = useState(false)
  const [showPaymentGateway, setShowPaymentGateway] = useState(false)
  const { cart, cartIsEmpty, cartTotal } = useCart()
  const { theme } = useTheme()

  const [shippingData, setShippingData] = useState({}) // Estado para armazenar os dados de envio

  const handleShippingDataChange = data => {
    setShippingData(data)
  }
  const [onServiceId, setServiceId] = useState(null)

  useEffect(() => {
    if (user === null || cartIsEmpty) {
      router.push(cartIsEmpty ? '/cart' : '/login')
    }
  }, [user, cartIsEmpty, router])

  // Corrigindo a lógica de cálculo do total
  const totalWithFreight = cartTotal.raw + freightPrice

  const handleFreightCalculation = () => {
    setShowPersonalData(true)
  }

  const handleShowShippingData = () => {
    setShowShippingData(true)
  }

  const handleShowPaymentGateway = () => {
    setShowPaymentGateway(true)
  }

  if (!user) return null

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
              <CheckoutItem
                key={index}
                product={item.product}
                title={item.product.title}
                quantity={item.quantity}
                index={index}
              />
            ))}
            <FreightCalculator
              onFreightPriceSet={setFreightPrice}
              zipCode={user?.zipCode}
              onFreightCalculation={handleFreightCalculation}
              onServiceId={setServiceId}
            />
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

      {showPersonalData && (
        <div className={`${classes.personalData} ${classes.fadeIn}`}>
          <h3>1) Dados Pessoais</h3>
          <PersonalDataForm onNext={handleShowShippingData} />
        </div>
      )}

      {showShippingData && (
        <div className={`${classes.personalData} ${classes.fadeIn}`}>
          <h3>2) Entrega</h3>
          <ShippingDataForm
            onNext={handleShowPaymentGateway}
            onShippingDataChange={handleShippingDataChange}
          />
        </div>
      )}

      {showPaymentGateway && (
        <div className={`${classes.personalData} ${classes.fadeIn}`}>
          <h3>3) Detalhes do pagamento</h3>
          {error && <p>{`Error: ${error}`}</p>}
          <PaymentGateway
            amount={totalWithFreight}
            serviceId={onServiceId}
            shippingData={shippingData}
          />{' '}
          {/* Passa os dados de envio para o PaymentGateway */}
        </div>
      )}
    </Fragment>
  )
}

export default CheckoutPage
