import React from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cartAction';



import {selectCartItem} from "../../redux/cart/cartSelector";
import CartItem from "../cart-item/cartItem";
import './cartDropdown.scss';
import Button from "../button/button";


const CartDropdown = ({cartItems,history,dispatch}) => {
    return(
        <div className='cart-dropdown'>
            {
                cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                    :
                    (<span className='empty-message'>Your cart is empty</span>)
            }
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden())
            }}>
                GO TO CHECKOUT
            </Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown));