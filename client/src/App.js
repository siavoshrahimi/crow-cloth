import React,{useEffect} from 'react';
import {Route, Switch,Redirect} from "react-router-dom";
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/userSelector';

import {checkUserSession} from "./redux/user/userAction";

import './App.css';

import HomePage from "./pages/HomePage/HomePage";
import Checkout from "./pages/chekout/checkout";
import ShopPage from './pages/shop/shop';
import Header from "./components/header/header";
import SignInAndUp from "./pages/signInAndUp/signInAndUp";

const App = ({checkUserSession,currentUser}) =>{

    useEffect(() => {
        checkUserSession();
    },[checkUserSession])

    return (
        <div >
            hello
            <Header/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/checkout' component={Checkout}/>
                <Route  path='/shop' component={ShopPage}/>
                <Route exact path='/signin' render={() =>currentUser ? <Redirect to='/'/> : <SignInAndUp/>}/>
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
