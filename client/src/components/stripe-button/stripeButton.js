import React from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from 'axios'


const StripeButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishablekey = 'pk_test_JnDEzgh0ALDq9pPD4PGMSpHc00F7rAw4vA';

    const onToken = token =>{
       axios({
           url:'payment',
           method:'post',
           data:{
               amount:priceForStripe,
               token
           }
       }).then(res => {
           alert('payment successful')
       }).catch(err =>{
           alert('there was an issue with your payment. please make sure you use the provided credit cart')
       })
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