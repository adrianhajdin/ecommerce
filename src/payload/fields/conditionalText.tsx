import React, { useEffect, useState } from 'react'
import { Props } from 'payload/components/fields/Text'
import { Label, TextInput, useFormFields } from 'payload/components/forms'

export const ConditionalText: React.FC<Props> = props => {
  const { label, name } = props
  const [value, setValue] = useState<string>() // você pode usar o hook useField no lugar

  // obtém os valores dos campos que você deseja usar
  const price: any = useFormFields(([fields, dispatch]) => fields.price.value)
  const discount: any = useFormFields(([fields, dispatch]) => fields.discountPercentage.value)

  const concatFunction = React.useCallback(() => {
    // você pode fazer mais coisas aqui
    const discountedPrice = price - (price * discount) / 100
    const formattedPrice = discountedPrice.toFixed(2) //

    setValue(formattedPrice)
  }, [price, discount])

  useEffect(() => {
    concatFunction()
  }, [price, discount, concatFunction])

  return (
    <div>
      <Label label={label} />
      <TextInput
        value={value !== undefined ? value : ''}
        name="uiField"
        path="uiField"
        onChange={concatFunction}
      />
    </div>
  )
}
