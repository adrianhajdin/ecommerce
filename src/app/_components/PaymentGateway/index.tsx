import React, { useState } from 'react'
import { initMercadoPago, Payment, StatusScreen } from '@mercadopago/sdk-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import { useEmailSender } from '../../_components/email'
import { useAuth } from '../../_providers/Auth'
import { useCart } from '../../_providers/Cart'

initMercadoPago('TEST-e4e31358-531f-4c4d-bd5c-3e77edc4ee3f', { locale: 'pt-BR' })

export const PaymentGateway = ({ amount, serviceId, shippingData, userData, zipCode }) => {
  const router = useRouter()
  const [orderIds, setOrderIds] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [paymentId, setPaymentId] = useState(null)
  const [validationErrors, setValidationErrors] = useState([])

  const { sendEmail } = useEmailSender()
  const { user } = useAuth()
  const { cart, cartTotal } = useCart()

  const transactionDescription = 'Minimo1'

  const validateCartItems = items => {
    const errors = []
    items.forEach((item, index) => {
      if (!item.selectedSize) {
        errors.push({ field: `items.${index}.selectedSize`, message: 'This field is required.' })
      }
      if (!item.selectedColor) {
        errors.push({ field: `items.${index}.selectedColor`, message: 'This field is required.' })
      }
    })
    return errors
  }

  const completeFreightPurchase = async () => {
    setLoading(true)
    setError('')

    try {
      const addToCartResponse = await axios.post('/api/add-to-cart', {
        service: serviceId,
        agency: '',
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

      if (addToCartResponse.data && addToCartResponse.data.id) {
        const localOrderIds = [addToCartResponse.data.id]
        setOrderIds(localOrderIds)

        const checkoutResponse = await axios.post('/api/purchase-labels', {
          orderIds: localOrderIds,
        })
        const generateLabelResponse = await axios.post('/api/generate-labels', {
          orderIds: localOrderIds,
        })
        const printableResponse = await axios.post('/api/print-labels', {
          mode: 'public',
          orders: localOrderIds,
        })

        if (printableResponse.data && printableResponse.data.url) {
          return printableResponse.data.url
        } else {
          throw new Error('No URL returned from the API')
        }
      } else {
        throw new Error('Failed to retrieve order ID from the response.')
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
  }

  const customization = {
    paymentMethods: {
      bankTransfer: 'all',
      creditCard: 'all',
    },
  }

  const onSubmit = async ({ formData }) => {
    const paymentData = {
      ...formData,
      description: transactionDescription, // Inclui a descrição do produto, além do formulário
      transaction_amount: parseFloat(amount.toFixed(2)),
    }
    // Callback chamado ao clicar no botão de submissão dos dados
    const response = await axios.post('/api/process-payment', { paymentData })
    if (response.data && response.data.id) {
      setPaymentId(response.data.id)
      console.log('Payment processed', response)
    }

    const errors = validateCartItems(cart?.items || [])
    if (errors.length > 0) {
      setValidationErrors(errors)
      return
    }

    try {
      const shippingTicketUrl = await completeFreightPurchase()

      const orderReq = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          total: cartTotal.raw,
          items: (cart?.items || [])?.map(({ product, quantity, selectedColor, selectedSize }) => ({
            product: typeof product === 'string' ? product : product.id,
            quantity,
            selectedSize,
            selectedColor,
            price: typeof product === 'object' ? product.price : undefined,
          })),
          shippingTicket: shippingTicketUrl,
          shippingZipCode: zipCode,
          shippingHouseNumber: shippingData.houseNumber,
          shippingComplement: shippingData.complement,
          userName: userData.name,
          userMail: userData.email,
          userSocialId: userData.socialId,
          userPhoneNumber: userData.phoneNumber,
        }),
      })

      if (!orderReq.ok) throw new Error(orderReq.statusText || 'Something went wrong.')

      const order = await orderReq.json()
      //sendEmail(userData.email, userData.name)

      router.push(`/order-confirmation?order_id=${order.id}`)
    } catch (err) {
      console.error(err.message)
      router.push(`/order-confirmation?error=${encodeURIComponent(err.message)}`)
    }
  }

  const onError = error => {
    console.error('Error processing payment', error)
  }

  const onReady = () => {
    console.log('Payment form ready')
  }

  return (
    <div>
      {!paymentId ? (
        <div>
          <Payment
            initialization={initialization}
            customization={customization}
            onSubmit={onSubmit}
            onError={onError}
            onReady={onReady}
          />
          {validationErrors.length > 0 && (
            <div className="validation-errors">
              {validationErrors.map((error, index) => (
                <div key={index}>{error.message}</div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <StatusScreen
          initialization={{ paymentId: paymentId }}
          onError={error => console.error(error)}
        />
      )}
    </div>
  )
}
