import React, { useEffect, useState } from 'react';
import { Label, useFormFields, TextInput } from 'payload/components/forms';
import { Props } from 'payload/components/fields/Text';

export const conditionalText: React.FC<Props> = (props) => {
    const { label, name } = props;
    const [value, setValue] = useState<string>(); // you can use the useField hook instead

    // get the values of the fields you want to use
    const price: any = useFormFields(([fields, dispatch]) => fields.price.value);
    const discount: any = useFormFields(([fields, dispatch]) => fields.discountPercentage.value);



    const concatFunction = () => {
        // you can do more stuff here
        let message = price * (1 - (discount / 100));

        message = message.toFixed(2);
        message = message.toString();
  
        setValue(message);
    }

    useEffect(() => {
        concatFunction()
    }, [price, discount ])


    return (
        <div>
            <Label
                label={label}
            />
            <TextInput value={value !== undefined ? value : ''} name='uiField' path='uiField' onChange={concatFunction} />
        </div>
    )
}