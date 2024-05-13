'use client'
import React, { useState } from 'react';
import axios from 'axios';
import classes from './index.module.scss';

export const FreightCalculator = ({ onFreightPriceSet }) => {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [freightInfo, setFreightInfo] = useState(null);
  const [freightData, setFreightData] = useState(null);
  const [orderIds, setOrderIds] = useState([]);  // Initialize orderIds state
  const [error, setError] = useState('');

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
        serviceId: firstOption.id // Supondo que a resposta inclua um service_id
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

  const completeFreightPurchase = async () => {
    setLoading(true);
    setError('');
  
    try {
      // Step 2: insere frete no carrinho
      const addToCartResponse = await axios.post('/api/add-to-cart', {
        service: freightInfo.serviceId,
        agency: "", // Replace with your agency ID (if applicable)
        from: {
          postal_code: "96020360",
          name: "BORA FILHO DO BILL",
          address: "123 Main Street",
          city: "Anytown",
          document: "18548537086"
        },
        to: {
          postal_code: cep,
          name: "BORA BILLL",
          address: "456 Elm Street",
          city: "Big City",
          document: "44810439895"
        },
        products: [{
          name: "T-Shirt"
        }],
        volumes: [{
          height: 10,
          width: 10,
          length: 10,
          weight: 1
        }],
        options: {}
      });
  
  
      // Como a resposta é um objeto único, você deve pegar o ID diretamente
      if (addToCartResponse.data && addToCartResponse.data.id) {
        const orderIds = addToCartResponse.data.id; // Pegando o ID do objeto
        setOrderIds([orderIds]); // Atualizando o estado para ser um array com esse único ID
      } else {
        console.error('No valid ID returned from the API');
        setError('Failed to retrieve order ID from the response.');
      }
  
      // Step 3: Gera a etiqueta
      const generateLabelResponse = await axios.post('/generate-labels', { orderIds });
  
      // Step 4: Imprime a etiqueta
      const printResponse = await axios.post('/print-labels', {
        orders: orderIds,
        mode: "" // Setting mode to an empty string as required
      });
  
      // Step 5: checkout
      const checkoutResponse = await axios.post('/api/purchase-labels', { orderIds });
  
    } catch (err) {
      console.error('Erro durante o processo de compra de frete:', err);
      setError(`Falha durante o processo de compra de frete: ${err.message || err}`);
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
          <p>Preço: {orderIds}</p>
          {/* <p>Preço3: {addToCartResponse.data.id}</p> */}
          <p>Prazo de entrega: {freightInfo.deliveryTime}</p>
          <button onClick={completeFreightPurchase} className={classes.okButton} disabled={loading}>
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