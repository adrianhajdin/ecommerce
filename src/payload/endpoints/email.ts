import { Router } from 'express';
import axios from 'axios';

const router = Router();

router.post('/send-email', async (req, res) => {
  const { recipientEmail, recipientName, serviceId, templateId, userId } = req.body;

  const data = {
    service_id: process.env.EMAIL_SERVICE_ID, // Utilize diretamente as variáveis de ambiente
    template_id: process.env.EMAIL_TEMPLATE_ID, // Corrigido para process.env
    user_id: process.env.EMAIL_PUBLIC_KEY, // Corrigido para process.env
    template_params: {
      reply_to: recipientEmail,
      recipient_name: recipientName, // Incluído recipientName nos parâmetros do template
    }
  };

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error sending email:', error);
    // Melhore o tratamento de erros fornecendo mais detalhes sobre o erro ao cliente
    res.status(500).send(`Failed to send email: ${error.response?.data?.message || error.message || 'Unknown error'}. Please try again.`);
  }
});

export default router;

