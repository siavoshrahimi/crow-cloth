import React from "react";
import {toggleCartHidden} from '../../redux/cart/cartAction';
import {createStructuredSelector} from 'reselect';

import {selectCartItemCount} from "../../redux/cart/cartSelector";
import { connect} from 'react-redux';


import {CartContainer,SoppingIcon,ItemCountContainer} from "./cartIcon.styles";

const CartIcon = ({toggleCartHidden,itemCount}) =>{
    return(
        <CartContainer onClick={toggleCartHidden}>
            <SoppingIcon />
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);