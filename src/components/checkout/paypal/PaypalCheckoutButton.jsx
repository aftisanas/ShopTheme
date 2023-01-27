import { PayPalButtons } from '@paypal/react-paypal-js';
import React, { useState } from 'react'
const PaypalCheckoutButton = ({product}) => {
    console.log(product)
    const [error, setError] = useState(null)
    const [paidFor, setPaidFor] = useState(false);
    const handleApprove = (orderID) =>{
        // CALL BACKEND FUNCTION TO FULFILL ORDER

        // IF RESPONSE IS SUCCESS
        setPaidFor(prevPF => prevPF = true);
        // REFRESH USER'S ACCOUNT OR SUBSCRIPTION STATUS

        // IS RESPONSE IS ERROR
        // alert("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.");
        // Now that there is a state for the error, replace the alert to setError in the handleApprove function.
        // setError("Your payment was processed successfully. However, we are unable to fulfill your purchase. Please contact us at support@designcode.io for assistance.")
    };

    if (paidFor) {
        alert('Thank you for your purchase!');
    }

    if (error) {
        alert(error);
    }
    return (
        <div>
            <PayPalButtons 
                // STYLE
                style={{ 
                    color: "silver",
                    layout: "horizontal",
                    height: 48,
                    tagline: false,
                    shape: 'rect'
                }}

                // CREATE ORDER
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units:[
                            {
                                description: product.description,
                                amount: {
                                    value: product.price
                                }
                            }
                        ]
                    });
                }}

                // ON APPROVE
                onApprove={async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log('order', order);
                    handleApprove(data.orderID);
                }}

                // ONERROR
                onError={err => {
                    setError(prevErr => prevErr = err);
                    console.log('PayPal Checkout onError', err)
                }}

                // ONCANCEL
                onCancel={() => {
                    // Display cancel message, modal or redirect user to cancel page or back to cart
                }}

                // ONCLICK
                onClick={(data, actions) =>{
                    const hasAlreadyBoughtProduct = false;
                    if (hasAlreadyBoughtProduct) {
                        setError(
                            'You already bought this course. Go to your account to view your list of courses.'
                        );
                        return actions.reject();
                    } else {
                        return actions.resolve();
                    }
                }}
            />
        </div>
    )
}

export default PaypalCheckoutButton;