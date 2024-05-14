import React, { useState } from 'react';
import axios from 'axios';

export const useEmailSender = () => {
  const [loading, setLoading] = useState(false); // Adiciona estado de carregamento
  const [error, setError] = useState('');        // Adiciona estado de erro
  const [success, setSuccess] = useState('');    // Adiciona estado de sucesso

  const sendEmail = async () => {
    setLoading(true);    // Inicia o estado de carregamento
    setError('');        // Limpa o estado de erro anterior
    setSuccess('');      // Limpa o estado de sucesso anterior

    try {
      const response = await axios.post('/api/send-email', {
        from_name: "",
        to_email: "tamires.carv@hotmail.com",
        to_name: "Pessoa"
      });
      setSuccess('Email enviado com sucesso!'); // Define o estado de sucesso
    } catch (err) {
      console.error('Erro ao enviar email:', err);
      setError('Falha ao enviar email. Tente novamente.'); // Define o estado de erro
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  return { sendEmail, loading, error, success };
};
