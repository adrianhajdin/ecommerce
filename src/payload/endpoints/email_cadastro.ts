import axios from 'axios'
import { Router } from 'express'

const router = Router()

// Rota para enviar e-mails usando EmailJS
router.post('/send-email-cadastro', async (req, res) => {
  // Desestruture os parâmetros do corpo da requisição
  const { from_name, to_email, to_name, token } = req.body

  // Envia o e-mail usando EmailJS
  try {
    const response = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        service_id: process.env.EMAIL_SERVICE_ID,
        template_id: process.env.EMAIL_TEMPLATE_ID_CADASTRO,
        user_id: process.env.EMAIL_PUBLIC_KEY,
        accessToken: process.env.EMAIL_PRIVATE_ID,
        template_params: {
          from_name: from_name,
          to_email: to_email,
          to_name: to_name,
          token: token, // Adiciona o token aos parâmetros do template
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    res.json(response.data)
  } catch (error: unknown) {
    console.error('Error sending email:', error)
    res.status(500).send('Failed to send email. Please try again.')
  }
})

export default router
