import { Router } from 'express';
import axios from 'axios';
// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Payment } from 'mercadopago';

const router = Router();
// Step 2: Initialize the client object
const client = new MercadoPagoConfig({ accessToken: { accessToken: process.env.MP_ACCESS_TOKEN }, options: { timeout: 5000, idempotencyKey: 'abc' } });

// Step 3: Initialize the API object
const payment = new Payment(client);

router.post('/process-payment', async (req, res) => {
  const paymentData = { body: {
    transaction_amount: 12.34,
    description: '<DESCRIPTION>',
    payment_method_id: 'pix',
    payer: {
      email: 'nicosathler@hotmail.com'
    }}, requestOptions: { idempotencyKey: 'dfsds>' } 
  };

  try {
    const result = await payment.create(paymentData);
    res.json(result.response);
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).send('Failed to process payment. Please try again.');
  }
});

export default router;
