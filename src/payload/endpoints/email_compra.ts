import { Router } from 'express';
import axios from 'axios';

const router = Router();

import payload from 'payload'

// Rota para enviar e-mails usando EmailJS
router.post('/send-email', async (req, res) => {
  // Desestruture os parâmetros do corpo da requisição
  const { from_name, to_email, to_name} = req.body;

  const emailTemplate = `
  <p>Olá ${to_name},</p>
  <p>Estamos muito felizes em dar as boas-vindas à nossa família da Minimo 1! 🎉</p>
  <p>Agradecemos por sua recente compra e por escolher nossa loja para renovar seu guarda-roupa. Sabemos que você vai adorar as peças que selecionou e mal podemos esperar para vê-lo arrasando com seu novo visual.</p>
  `;

  payload.sendEmail({
    from: from_name,
    to: to_email,
    subject: 'Bem-vindo à Minimo 1! Sua compra foi um sucesso!',
    html: emailTemplate,
  })
});

export default router;