import React from "react";
import {toggleCartHidden} from '../../redux/cart/cartAction';
import {createStructuredSelector} from 'reselect';

import {selectCartItemCount} from "../../redux/cart/cartSelector";
import { connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from "../../assets/11.3 shopping-bag.svg.svg";

import './cartIcon.scss';

const CartIcon = ({toggleCartHidden,itemCount}) =>{
    return(
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);