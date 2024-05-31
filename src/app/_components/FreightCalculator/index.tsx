'use client'
import React, { useState } from 'react'
import axios from 'axios'

import classes from './index.module.scss' // Verifique o caminho para o seu arquivo CSS

export const FreightCalculator = ({ onFreightPriceSet }) => {
  const [cep, setCep] = useState('')
  const [loading, setLoading] = useState(false)
  const [freightInfo, setFreightInfo] = useState(null)
  const [error, setError] = useState('')

  const handleCepChange = event => {
    setCep(event.target.value)
  }

  const sendFreightDetailsEmail = async () => {
    try {
      await axios.post('/api/send-email', {
        type: 'Compra realizada com sucesso',
        details: 'Obrigado por nos escolher',
      })
      console.log('Detalhes do frete enviados por e-mail com sucesso.')
    } catch (error) {
      console.error('Erro ao enviar e-mail com detalhes do frete:', error)
    }
  }

  const calculateFreight = async () => {
    if (cep.length !== 8) {
      setError('O CEP deve conter 8 dígitos.')
      return
    }

    setLoading(true)
    setError('')
    setFreightInfo(null)

    try {
      const response = await axios.post('/api/calculate-freight', { cep })
      const firstOption = response.data[0]

      const formattedFreightInfo = {
        price: parseFloat(firstOption.custom_price || firstOption.price) + 3,
        deliveryTime: `${firstOption.delivery_time} dias`,
        carrier: firstOption.name,
      }

      setFreightInfo(formattedFreightInfo)
      onFreightPriceSet(formattedFreightInfo.price) // Chama o callback com o preço do frete
    } catch (err) {
      console.error('Erro ao calcular o frete:', err)
      setError('Falha ao calcular o frete. Tente novamente.')
      onFreightPriceSet(0) // Reseta o preço do frete em caso de erro
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.freightCalculator}>
      <label htmlFor="cep-input" className={classes.label}>
        CALCULAR FRETE
      </label>
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
  )
}
