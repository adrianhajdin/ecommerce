import axios from 'axios'
import { Router } from 'express'

const router = Router()

// Step 4: Imprime a etiqueta
router.post('/print-labels', async (req, res) => {
  const { orders, mode } = req.body

  try {
    const response = await axios.post(
      'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/print',
      {
        mode, // Printing mode to be provided, e.g., "pdf", "zpl"
        orders, // Array of order IDs
      },
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.SHIPPING_KEY}`, // Use actual token
          'Content-Type': 'application/json', // Corrected the content-type
          'User-Agent': 'Aplicação (your_email@example.com)', // Replace with your actual contact email
        },
      },
    )
    res.json(response.data)
  } catch (error) {
    console.error('Error printing labels:', error)
    res.status(500).send('Failed to print labels. Please try again.')
  }
})

export default router
