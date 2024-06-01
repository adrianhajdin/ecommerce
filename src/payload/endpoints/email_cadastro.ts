import { Router } from 'express'

const router = Router()
import payload from 'payload'

// Rota para enviar e-mails usando EmailJS
/* eslint-disable @typescript-eslint/no-unused-vars */
router.post('/send-email-cadastro', async (req, res) => {
  // Desestruture os parâmetros do corpo da requisição

  const { from_name, to_email, to_name, token } = req.body
  const emailTemplate = `
  <p>Olá, ${to_name}!</p>
  <p>Para finalizar seu cadastro, insira este token no nosso site: <span style="font-size: 14pt;"><strong>${token}</strong></span></p>
  <p>Estamos felizes por tê-lo conosco! Após validar seu e-mail, você terá acesso aos benefícios da Minimo 1.</p>
  <p>Se precisar de ajuda, nossa equipe está à disposição.</p>
  <p>Obrigado por escolher a Minimo 1!</p>
  <p>Equipe Minimo 1</p>
  `

  payload.sendEmail({
    from: from_name,
    to: to_email,
    subject: 'Bem-vindo à Minimo 1! Seu cadastro foi um sucesso!',
    html: emailTemplate,
  })
})

export default router
/* eslint-enable @typescript-eslint/no-unused-vars */
