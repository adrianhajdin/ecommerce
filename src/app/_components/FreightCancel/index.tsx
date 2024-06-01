'use client'
import React, { useState } from 'react'
import axios from 'axios'

import classes from './index.module.scss'

export const CancelShipmentComponent = () => {
  const [orderId, setOrderId] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleID = event => {
    setOrderId(event.target.value)
  }

  const handleDescription = event => {
    setDescription(event.target.value)
  }

  const cancelShipment = async () => {
    setLoading(true)
    setSuccess('')
    setError('')

    try {
      const response = await axios.post('/api/cancel-labels', {
        order: {
          order_id: orderId,
          reason_id: '2',
          description: description,
        },
      })
      setSuccess('Envio cancelado com sucesso!')
    } catch (err) {
      console.error('Erro ao cancelar o Envio:', err)
      setError(`Falha durante o processo de cancelamento de frete: ${err.message || err}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={classes.cancelContainer}>
      <label htmlFor="order-id-input" className={classes.label}>
        Cancelar Envio
      </label>
      <div className={classes.inputGroup}>
        <input
          type="text"
          id="order-id-input"
          placeholder="Digite o ID do Pedido"
          value={orderId}
          onChange={handleID}
          className={classes.inputField}
        />
        <input
          type="text"
          value={description}
          onChange={handleDescription}
          placeholder="Descrição do Cancelamento"
          className={classes.inputField}
        />
        <button onClick={cancelShipment} className={classes.okButton} disabled={loading}>
          {loading ? 'Cancelando...' : 'Cancelar Envio'}
        </button>
      </div>
      {error && <p className={classes.errorMessage}>{error}</p>} {/* Exibir mensagem de erro */}
      {success && <p className={classes.successMessage}>{success}</p>}{' '}
      {/* Exibir mensagem de sucesso */}
    </div>
  )
}

export default CancelShipmentComponent
