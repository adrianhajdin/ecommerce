import axios from 'axios'
import { Router } from 'express'
// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Payment } from 'mercadopago'
import { v4 as uuidv4 } from 'uuid' // Importa o gerador de UUID

const router = Router()

router.post('/process-payment', async (req, res) => {
  const key = process.env.MP_ACCESS_TOKEN

  // Step 2: Initialize the client object
  const client = new MercadoPagoConfig({
    accessToken: key,
    options: { timeout: 5000, idempotencyKey: uuidv4() },
  })

  // Step 3: Initialize the API object
  const payment = new Payment(client)

  const paymentData = { body: req.body.paymentData }

  try {
    const result = await payment.create(paymentData)
    res.json(result)
  } catch (error) {
    console.error('Error processing payment:', error)
    res.status(500).send('Failed to process payment. Please try again.')
  }
})

export default router
