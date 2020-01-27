import React from "react";
import { connect} from 'react-redux';
import {auth} from "../../firebase/firebase.utils";
import {createStructuredSelector} from 'reselect';


import {selectCurrentUser} from '../../redux/user/userSelector';
import { selectCartHidden} from "../../redux/cart/cartSelector";


import CartIcon from "../cart-icon/cartIcon";
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import CartDropdown from "../cart-dropdown/cartDropdown";

import {OptionContainer,OptionLink,LogoContainer,HeaderContainer} from "./header.styles";

const Header = ({currentUser,hidden}) =>{
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
                        <OptionLink as='div' onClick={() => auth.signOut()}>
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
})
export default connect(mapStateToProps)(Header);