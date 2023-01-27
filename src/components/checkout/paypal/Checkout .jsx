import React from 'react'
import PaypalCheckoutButton from './PaypalCheckoutButton'

const Checkout  = ({total}) => {
    const product = {
        description: 'payment with PayPal',
        price: total
    }
    return (
        <div className='paypal-button-container'>
            <PaypalCheckoutButton product={product} />
        </div>
    )
}

export default Checkout 