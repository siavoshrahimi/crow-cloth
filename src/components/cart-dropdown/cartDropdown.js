import React from "react";
import {connect} from 'react-redux';
import {selectCartItem} from "../../redux/cart/cartSelector";
import CartItem from "../cart-item/cartItem";
import './cartDropdown.scss';
import Button from "../button/button";


const CartDropdown = ({cartItems}) => {
    return(
        <div className='cart-dropdown'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = (state) =>({
    cartItems: selectCartItem
})

export default connect(mapStateToProps)(CartDropdown);