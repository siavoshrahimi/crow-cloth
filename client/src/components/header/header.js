import React from "react";
import { connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import {selectCurrentUser} from '../../redux/user/userSelector';
import { selectCartHidden} from "../../redux/cart/cartSelector";

import {signOutStart} from "../../redux/user/userAction";


import CartIcon from "../cart-icon/cartIcon";
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import CartDropdown from "../cart-dropdown/cartDropdown";

import {OptionContainer,OptionLink,LogoContainer,HeaderContainer} from "./header.styles";

const Header = ({currentUser,hidden,signOutStart}) =>{
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    currentUser?
                        <OptionLink as='div' onClick={signOutStart}>
                            Sign out
                        </OptionLink>
                        :
                        <OptionLink to={'/signin'}>
                            Sign In
                        </OptionLink>
                }
                <CartIcon/>
            </OptionContainer>
            {hidden? null: <CartDropdown/>}

        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);