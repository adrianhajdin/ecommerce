import React, { useState } from 'react';
import axios from 'axios';
import classes from './index.module.scss';

const EmailSender = () => {
  // Estado para acompanhar os resultados das operações de envio de e-mail
  const [result, setResult] = useState('');

  // Função genérica para enviar e-mails
  const sendEmail = async (emailType, emailDetails) => {
    try {
      const response = await axios.post('/api/send-email', emailDetails);
      setResult(`Email de ${emailType} enviado com sucesso!`);
    } catch (error) {
      console.error('Error sending email:', error);
      setResult(`Falha ao enviar email de ${emailType}.`);
    }
  };

  return (
    <div className={classes.container}>
      <h1>Gerenciador de E-mails</h1>
      <button
        className={classes.button}
        onClick={() => sendEmail('boas-vindas', {
          recipientEmail: 'brunovpm@hotmail.com',
          recipientName: 'Cliente',
        })}
      >
        Enviar Boas-Vindas
      </button>
      <p>{result}</p>
    </div>
  );
};

export default EmailSender;
