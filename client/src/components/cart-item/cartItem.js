import React from "react";

import {CartItemContainer,ItemDetailContainer,ItemName,CartItemImage} from "./cartItem.styles";

const CartItem = ({item:{imageUrl,name,price,quantity}}) =>(
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <ItemDetailContainer>
            <ItemName>{name}</ItemName>
            <span className='price'>{quantity} x ${price}</span>
        </ItemDetailContainer>
    </CartItemContainer>
)

export default CartItem;