import axios from 'axios'
import { Router } from 'express'

const router = Router()

// Step 3: Gera a etiqueta
router.post('/generate-labels', async (req, res) => {
  const { orderIds } = req.body

  try {
    const response = await axios.post(
      'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/generate',
      {
        orders: orderIds,
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
    console.error('Error generating labels:', error)
    res.status(500).send('Failed to generate labels. Please try again.')
  }
})

export default router
