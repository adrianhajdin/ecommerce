import axios from 'axios'
import { Router } from 'express'

const router = Router()

// Step 5: checkout
router.post('/purchase-labels', async (req, res) => {
  const { orderIds } = req.body

  try {
    const response = await axios.post(
      'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/checkout',
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
    console.error('Error purchasing labels:', error)
    res.status(500).send('Failed to purchase labels. Please try again.')
  }
})

// // Pré-visualização de etiquetas
// router.post('/preview-labels', async (req, res) => {
//   const { orderIds } = req.body;

//   try {
//     const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/preview', {
//       orders: orderIds
//     }, {
//       headers: {
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
//         'Content-Type': 'application/json',
//         'User-Agent': 'Aplicação nicosathler@hotmail.com'
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error previewing labels:', error);
//     res.status(500).send('Failed to preview labels. Please try again.');
//   }
// });

// // Cancelamento de etiquetas
// router.post('/cancel-labels', async (req, res) => {
//   const { orderId, reasonId, description } = req.body;

//   try {
//     const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/cancel', {
//       order: {
//         id: orderId,
//         reason_id: reasonId,  // Sempre 2 conforme especificado
//         description: description
//       }
//     }, {
//       headers: {
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
//         'Content-Type': 'application/json',
//         'User-Agent': 'Aplicação nicosathler@hotmail.com'
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error canceling label:', error);
//     res.status(500).send('Failed to cancel label. Please try again.');
//   }
// });

// // Rastreio de envios
// router.post('/track-shipment', async (req, res) => {
//   const { orderIds } = req.body;

//   try {
//     const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/tracking', {
//       orders: orderIds
//     }, {
//       headers: {
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
//         'Content-Type': 'application/json',
//         'User-Agent': 'Aplicação nicosathler@hotmail.com'
//       }
//     });
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error tracking shipment:', error);
//     res.status(500).send('Failed to track shipment. Please try again.');
//   }
// });

export default router
