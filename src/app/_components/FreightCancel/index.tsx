'use client'
import React, { useState } from 'react';
import axios from 'axios';
import classes from './index.module.scss';

export const CancelShipmentComponent: React.FC = () => {
  const [orderId, setOrderId] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const cancelShipment = async () => {
    setLoading(true);
    setMessage('');
    try {
      console.log('Enviando requisição POST para /api/cancel-labels');
      const response = await axios.post('/api/cancel-labels', {
        order: {
          order_id: orderId,
          reason_id: "2", // Valor fixo para 'reason_id'
          description: description
        }
      });
      console.log('Resposta recebida:', response.data);
      setMessage(`Cancelamento realizado com sucesso: ${JSON.stringify(response.data)}`);
    } catch (error) {
      const errorMsg = error.response ? JSON.stringify(error.response.data) : error.message;
      console.error('Erro ao cancelar o envio:', errorMsg);
      setMessage(`Erro ao cancelar o envio: ${errorMsg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.cancelContainer}>
      <label htmlFor="order-id-input" className={classes.label}>Cancelar Envio</label>
      <div className={classes.inputGroup}>
        <input
          type="text"
          id="order-id-input"
          placeholder="Digite o ID do Pedido"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className={classes.inputField}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição do Cancelamento"
          className={classes.inputField}
        />
        <button onClick={cancelShipment} className={classes.actionButton} disabled={loading}>
          {loading ? 'Cancelando...' : 'Cancelar Envio'}
        </button>
      </div>
      {message && (
        <div className={classes.messageBox}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default CancelShipmentComponent;
