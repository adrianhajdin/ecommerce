import { Router } from 'express';
import axios from 'axios';

const router = Router();

// Calcular frete
router.post('/calculate-freight', async (req, res) => {
  const { cep } = req.body;
  
  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate', {
      from: { postal_code: "96020360" },
      to: { postal_code: cep },
      products: [
        {
            id: "x",
            width: 11,
            height: 17,
            length: 11,
            weight: 0.3,
            insurance_value: 10.1,
            quantity: 1
          },
      ]
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error calculating freight:', error);
    res.status(500).send('Failed to calculate freight. Please try again.');
  }
});

// Inserir frete no carrinho
router.post('/add-to-cart', async (req, res) => {
  const { serviceId, agencyId, from, to, volumes, options } = req.body;

  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/cart', {
      service: serviceId,
      agency: agencyId,
      from,
      to,
      volumes,
      options
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).send('Failed to add to cart. Please try again.');
  }
});

// Compra de fretes (Checkout)
router.post('/purchase-labels', async (req, res) => {
  const { orderIds } = req.body;

  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/checkout', {
      orders: orderIds
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error purchasing labels:', error);
    res.status(500).send('Failed to purchase labels. Please try again.');
  }
});

// Gerar etiquetas
router.post('/generate-labels', async (req, res) => {
  const { orderIds } = req.body;

  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/generate', {
      orders: orderIds
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error generating labels:', error);
    res.status(500).send('Failed to generate labels. Please try again.');
  }
});

// Impressão de etiquetas
router.post('/print-labels', async (req, res) => {
  const { orderIds, mode } = req.body;

  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/print', {
      orders: orderIds,
      mode: mode
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error printing labels:', error);
    res.status(500).send('Failed to print labels. Please try again.');
  }
});

// Pré-visualização de etiquetas
router.post('/preview-labels', async (req, res) => {
  const { orderIds } = req.body;

  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/preview', {
      orders: orderIds
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error previewing labels:', error);
    res.status(500).send('Failed to preview labels. Please try again.');
  }
});

// Cancelamento de etiquetas
router.post('/cancel-labels', async (req, res) => {
  const { orderId, reasonId, description } = req.body;

  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/cancel', {
      order: {
        id: orderId,
        reason_id: reasonId,  // Sempre 2 conforme especificado
        description: description
      }
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error canceling label:', error);
    res.status(500).send('Failed to cancel label. Please try again.');
  }
});

// Rastreio de envios
router.post('/track-shipment', async (req, res) => {
  const { orderIds } = req.body;

  try {
    const response = await axios.post('https://sandbox.melhorenvio.com.br/api/v2/me/shipment/tracking', {
      orders: orderIds
    }, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.SHIPPING_KEY}`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação nicosathler@hotmail.com'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error tracking shipment:', error);
    res.status(500).send('Failed to track shipment. Please try again.');
  }
});

export default router;