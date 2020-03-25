import React,{useEffect,lazy,Suspense} from 'react';
import {Route, Switch,Redirect} from "react-router-dom";
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/userSelector';

import {checkUserSession} from "./redux/user/userAction";


import Header from "./components/header/header";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";

import {GlobalStyle} from "./GlobalStyle.style";

const HomePage = lazy(() =>import('./pages/HomePage/HomePage'));
const ShopPage = lazy(() =>import('./pages/shop/shop'));
const Checkout = lazy(() =>import('./pages/chekout/checkout'));
const SignInAndUp = lazy(() =>import("./pages/signInAndUp/signInAndUp"));



const App = ({checkUserSession,currentUser}) =>{

    useEffect(() => {
        checkUserSession();
    },[checkUserSession])

    return (
        <div >
            <GlobalStyle/>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/checkout' component={Checkout}/>
                        <Route  path='/shop' component={ShopPage}/>
                        <Route exact path='/signin' render={() =>currentUser ? <Redirect to='/'/> : <SignInAndUp/>}/>
                    </Suspense>
                </ErrorBoundary>
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
