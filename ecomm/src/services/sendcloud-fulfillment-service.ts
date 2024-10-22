import { AbstractFulfillmentService } from "@medusajs/medusa"
import axios from "axios"

class SendcloudFulfillmentService extends AbstractFulfillmentService {
  static identifier = "sendcloud"

  constructor(container, options) {
    super(container)
    this.options = options
    // Connect to sendcloud with api
  }


  async getFulfillmentOptions(): Promise<any[]> {
    return [
      {
        id: "my-fulfillment",
      },
      {
        id: "my-fulfillment-dynamic",
      },
    ]
  }

  
  async calculatePrice(optionData, data, cart) {
    try {
      const response = await axios.get('https://panel.sendcloud.sc/api/v2/shipping-price', {
        params: {
          to_country: cart.shipping_address.country_code,
          to_postal_code: cart.shipping_address.postal_code,
          from_country: this.options.from_country,
          from_postal_code: this.options.from_postal_code,
          weight: this.calculateTotalWeight(cart.items),
          weight_unit: 'kg',
          shipping_method_id: optionData.id,
        },
        headers: {
          'Authorization': `Basic ${Buffer.from(this.options.token).toString('base64')}`,
        },
      })

      return response.data[0].price * 100 // Convert to cents
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  calculateTotalWeight(items) {
    return items.reduce((total, item) => {
      return total + (item.variant.weight || 0) * item.quantity
    }, 0) / 1000 // Convert grams to kg
  }
}

export default SendcloudFulfillmentService