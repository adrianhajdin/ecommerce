import axios from 'axios'
import { Router } from 'express'

const router = Router()

router.post('/calculate-freight', async (req, res) => {
  const { cep } = req.body

  try {
    const response = await axios.post(
      'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate',
      {
        from: { postal_code: '96020360' },
        to: { postal_code: cep },
        products: [
          {
            id: 'x',
            width: 11,
            height: 17,
            length: 11,
            weight: 0.3,
            insurance_value: 10.1,
            quantity: 1,
          },
        ],
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.SHIPPING_KEY}`,
          'Content-Type': 'application/json',
          'User-Agent': 'Aplicação nicosathler@hotmail.com',
        },
      },
    )
    res.json(response.data)
  } catch (error) {
    console.error('Error calculating freight:', error)
    res.status(500).send('Failed to calculate freight. Please try again.')
  }
})

export default router
