import React from "react";

import StripeCheckout from "react-stripe-checkout";


const StripeButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_JnDEzgh0ALDq9pPD4PGMSpHc00F7rAw4vA';

    const onToken = token =>{
        console.log(token);
        alert('payment was successful')
    }

    return(
        <StripeCheckout
            token={onToken}
            stripeKey={publishablekey}
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
        />
    )
}

export default StripeButton;