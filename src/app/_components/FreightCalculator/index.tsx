'use client'

import React, { useState } from 'react';
import classes from './index.module.scss';

export const FreightCalculator = () => {
  const [cep, setCep] = useState('');

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  const calculateFreight = () => {
    // Aqui você poderia chamar uma API para calcular o frete com base no CEP
    console.log('Calculando frete para o CEP:', cep);
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
        <button onClick={calculateFreight} className={classes.okButton}>
          OK
        </button>
      </div>
      <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/" className={classes.forgotCep}>
        Não sei meu CEP
      </a>
    </div>
  );
};

