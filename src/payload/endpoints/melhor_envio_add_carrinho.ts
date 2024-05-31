import axios from 'axios'
import { Router } from 'express'

const router = Router()

// Step 2: insere frete no carrinho
router.post('/add-to-cart', async (req, res) => {
  const { service, agency, from, to, products, volumes, options } = req.body

  try {
    const response = await axios.post(
      'https://sandbox.melhorenvio.com.br/api/v2/me/cart',
      {
        service, // service ID
        agency, // agency ID
        from, // sender information
        to, // recipient information
        products, // array of products
        volumes, // packaging dimensions
        options, // additional options
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
