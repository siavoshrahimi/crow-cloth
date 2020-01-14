import React from "react";
import {toggleCartHidden} from '../../redux/cart/cartAction';
import { connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from "../../assets/11.3 shopping-bag.svg.svg";

import './cartIcon.scss';

const CartIcon = ({toggleCartHidden}) =>{
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>0</span>
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);