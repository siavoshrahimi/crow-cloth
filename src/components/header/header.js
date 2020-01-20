import React from "react";
import {Link} from 'react-router-dom';
import { connect} from 'react-redux';
import {auth} from "../../firebase/firebase.utils";
import {createStructuredSelector} from 'reselect';


import {selectCurrentUser} from '../../redux/user/userSelector';
import { selectCartHidden} from "../../redux/cart/cartSelector";


import CartIcon from "../cart-icon/cartIcon";
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import './header.scss';
import CartDropdown from "../cart-dropdown/cartDropdown";

const Header = ({currentUser,hidden}) =>{
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser?
                        <div className='option' onClick={() => auth.signOut()}>
                            Sign out
                        </div>
                        :
                        <Link className='option' to={'/signin'}>
                            Sign In
                        </Link>
                }
                <CartIcon/>
            </div>
            {hidden? null: <CartDropdown/>}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
})
export default connect(mapStateToProps)(Header);