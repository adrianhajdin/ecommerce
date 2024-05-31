import React, { useState } from 'react'
import { initMercadoPago, Payment, StatusScreen } from '@mercadopago/sdk-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import { Order } from '../../../payload/payload-types'
import { useEmailSender } from '../../_components/email'
import { useAuth } from '../../_providers/Auth'
import { useCart } from '../../_providers/Cart'

initMercadoPago('TEST-e4e31358-531f-4c4d-bd5c-3e77edc4ee3f', { locale: 'pt-BR' })

export const PaymentGateway = ({ amount, serviceId }) => {
  const router = useRouter()
  const [orderIds, setOrderIds] = useState([]) // Initialize orderIds state
  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)
  const {
    sendEmail,
    sendEmailCadastro,
    loading: loadingEmail,
    error: emailError,
    success: emailSuccess,
  } = useEmailSender()
  const { user } = useAuth()

  const [paymentId, setPaymentId] = useState(null)
  const transactionDescription = 'Minimo1'
  const { cart, cartTotal } = useCart()

  const completeFreightPurchase = async () => {
    setLoading(true)
    setError('')

    try {
      // Step 2: insere frete no carrinho
      const addToCartResponse = await axios.post('/api/add-to-cart', {
        service: serviceId,
        agency: '', // Replace with your agency ID (if applicable)
        from: {
          postal_code: '96020360',
          name: 'cliente_name2',
          address: 'cliente_address',
          city: 'cliente_city',
          document: '18548537086',
        },
        to: {
          postal_code: '09121929',
          name: 'Ale',
          address: '456 Elm Street',
          city: 'Big City',
          document: '44810439895',
        },
        products: [
          {
            name: 'T-Shirt',
          },
        ],
        volumes: [
          {
            height: 10,
            width: 10,
            length: 10,
            weight: 1,
          },
        ],
        options: {},
      })

      let localOrderIds
      if (addToCartResponse.data && addToCartResponse.data.id) {
        localOrderIds = [addToCartResponse.data.id] // Armazena localmente
        setOrderIds(localOrderIds) // Atualiza o estado
      } else {
        console.error('No valid ID returned from the API')
        setError('Failed to retrieve order ID from the response.')
        return
      }

      // Step 4: checkout
      const checkoutResponse = await axios.post('/api/purchase-labels', { orderIds: localOrderIds })

      // Step 5: Gera a etiqueta
      const generateLabelResponse = await axios.post('/api/generate-labels', {
        orderIds: localOrderIds,
      })

      // Step 6: Gera a etiqueta
      const printabelResponse = await axios.post('/api/print-labels', {
        mode: 'public',
        orders: localOrderIds,
      })

      if (printabelResponse.data && printabelResponse.data.url) {
        return printabelResponse.data.url // Retorna a URL da etiqueta de envio
      } else {
        throw new Error('No URL returned from the API')
      }
    } catch (err) {
      console.error('Erro durante o processo de compra de frete:', err)
      setError(`Falha durante o processo de compra de frete: ${err.message || err}`)
      return null
    } finally {
      setLoading(false)
    }
  }

  const initialization = {
    amount: amount,
    preferenceId: '<PREFERENCE_ID>',
  }

  const customization = {
    paymentMethods: {
      bankTransfer: 'all',
      creditCard: 'all',
    },
  }

  const onSubmit = async ({ formData }) => {
    //   const paymentData = {
    //     ...formData,
    //     description: transactionDescription, // Inclui a descrição do produto, além do formulário
    //     transaction_amount: amount
    // };
    //   // Callback chamado ao clicar no botão de submissão dos dados
    //   const response = await axios.post('/api/process-payment', { paymentData });
    //   if (response.data && response.data.id) {
    //     setPaymentId(response.data.id);
    //     console.log('Payment processed', response);
    //   }

    try {
      const shippingTicketUrl = await completeFreightPurchase()

      const orderReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/orders`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          total: cartTotal.raw,
          items: (cart?.items || [])?.map(({ product, quantity }) => ({
            product: typeof product === 'string' ? product : product.id,
            quantity,
            price: typeof product === 'object' ? product.price : undefined,
          })),
          shippingTicket: shippingTicketUrl,
          shippingZipCode: user.zipCode,
          shippingHouseNumber: user.houseNumber,
          shippingComplement: user.complement,
          userSocialId: user.socialId,
          userPhoneNumber: user.phoneNumber,
        }),
      })

      if (!orderReq.ok) throw new Error(orderReq.statusText || 'Something went wrong.')

      const {
        error: errorFromRes,
        doc,
      }: {
        message?: string
        error?: string
        doc: Order
      } = await orderReq.json()

      if (errorFromRes) throw new Error(errorFromRes)

      router.push(`/order-confirmation?order_id=${doc.id}`)
    } catch (err) {
      // don't throw an error if the order was not created successfully
      // this is because payment _did_ in fact go through, and we don't want the user to pay twice
      console.error(err.message) // eslint-disable-line no-console
      router.push(`/order-confirmation?error=${encodeURIComponent(err.message)}`)
    }
  }

  const onError = error => {
    console.error('Error processing payment', error)
  }

  const onReady = () => {
    console.log('Payment form ready')
  }

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
        <StatusScreen
          initialization={{ paymentId: paymentId }}
          onError={error => console.error(error)}
        />
      )}
    </div>
  )
}
