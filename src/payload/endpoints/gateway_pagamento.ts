import { Router } from 'express';
import axios from 'axios';
// Step 1: Import the parts of the module you want to use
import { MercadoPagoConfig, Payment } from 'mercadopago';

const router = Router();


router.post('/process-payment', async (req, res) => {

  const key =  process.env.MP_ACCESS_TOKEN

  // Step 2: Initialize the client object
  const client = new MercadoPagoConfig({ accessToken: 'TEST-3836549751377085-050421-f53c62f74ea0beba6925ee6988668134-152070979', options: { timeout: 5000, idempotencyKey: 'abc' } });

  // Step 3: Initialize the API object
  const payment = new Payment(client);

  
  console.log('requisicao', req)
  const paymentData = { body: {
    transaction_amount: 32,
    description: 'Pagamento',
    payment_method_id: 'master',
    payer: {
      email: 'nicosathler@hotmail.com'
    }}, requestOptions: { idempotencyKey: '119f0281-238d-4793-a868-1cd3c8d56938' } 
  };

  console.log('requisicao', paymentData)

  try {
    const result = await payment.create(paymentData);
    res.json(result.response);
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).send('Failed to process payment. Please try again.');
  }
});

export default router;
