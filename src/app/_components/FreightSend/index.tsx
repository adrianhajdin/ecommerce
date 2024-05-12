'use client'
import React, { useState } from 'react';
import axios from 'axios';
import classes from './index.module.scss';

export const FreightCalculator = ({ onFreightPriceSet }) => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [freightInfo, setFreightInfo] = useState(null);
  const [error, setError] = useState('');
  const [orderIds, setOrderIds] = useState([]);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const calculateFreight = async () => {
    if (cep.length !== 8) {
      setError('O CEP deve conter 8 dígitos.');
      return;
    }

    setLoading(true);
    setError('');
    setFreightInfo(null);

    try {
      const response = await axios.post('/api/calculate-freight', { cep });
      const firstOption = response.data[0];

      const formattedFreightInfo = {
        price: parseFloat(firstOption.custom_price || firstOption.price) + 3,
        deliveryTime: `${firstOption.delivery_time} dias`,
        carrier: firstOption.name,
        serviceId: firstOption.service_id // Supondo que a resposta inclua um service_id
      };

      setFreightInfo(formattedFreightInfo);
      onFreightPriceSet(formattedFreightInfo.price); // Chama o callback com o preço do frete
    } catch (err) {
      console.error('Erro ao calcular o frete:', err);
      setError('Falha ao calcular o frete. Tente novamente.');
      onFreightPriceSet(0); // Reseta o preço do frete em caso de erro
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteFreightPurchase = async () => {
    setLoading(true);
    setError('');
    try {
      // Adiciona ao carrinho
      const addToCartResponse = await axios.post('/api/add-to-cart', {
        serviceId: freightInfo.serviceId,
        agencyId: 1, // Exemplo de ID de agência
        from: { postal_code: "96020360" },
        to: { postal_code: cep },
        volumes: [{
          height: 10,
          width: 10,
          length: 10,
          weight: 1
        }],
        options: {}
      });

      // Realiza o checkout
      const orderIds = addToCartResponse.data.map(item => item.orderId);
      setOrderIds(orderIds);
      const checkoutResponse = await axios.post('/api/purchase-labels', { orderIds });

      // Geração de etiquetas
      const generateResponse = await axios.post('/api/generate-labels', { orderIds });
      const printResponse = await axios.post('/api/print-labels', { orderIds, mode: 'private' });

      window.open(printResponse.data.url, '_blank'); // Abre a URL de impressão em uma nova aba
      alert('Frete comprado e etiqueta pronta para impressão!');
    } catch (err) {
      console.error('Erro durante o processo de compra de frete:', err);
      setError('Falha durante o processo de compra de frete. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.freightCalculator}>
      <label htmlFor="cep-input" className={classes.label}>CALCULAR FRETE</label>
      <div className={classes.inputGroup}>
        <input
          type="text"
          id="cep-input"
          placeholder="Digite seu CEP"
          value={cep}
          onChange={handleCepChange}
          className={classes.cepInput}
        />
        <button onClick={calculateFreight} className={classes.okButton} disabled={loading}>
          {loading ? 'Calculando...' : 'OK'}
        </button>
      </div>
      {freightInfo && (
        <div className={classes.result}>
          <p>Transportadora: {freightInfo.carrier}</p>
          <p>Preço: {freightInfo.price}</p>
          <p>Prazo de entrega: {freightInfo.deliveryTime}</p>
          <button onClick={handleCompleteFreightPurchase} className={classes.okButton} disabled={loading}>
            {loading ? 'Processando...' : 'Comprar e Imprimir Etiqueta'}
          </button>
        </div>
      )}
      {error && <div className={classes.error}>{error}</div>}
      <a 
        href="http://www.buscacep.correios.com.br/sistemas/buscacep/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={classes.forgotCep}
      >
        Não sei meu CEP
      </a>
    </div>
  );
};
