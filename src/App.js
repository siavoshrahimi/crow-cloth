import React from 'react';
import {Route, Switch,Redirect} from "react-router-dom";
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/userSelector';

import {auth,creatUserProfileDocument} from "./firebase/firebase.utils";

import {setCurrentUser} from "./redux/user/userAction";

import './App.css';

import HomePage from "./pages/HomePage/HomePage";
import Checkout from "./pages/chekout/checkout";
import ShopPage from './pages/shop/shop';
import Header from "./components/header/header";
import SignInAndUp from "./pages/signInAndUp/signInAndUp";

class App extends React.Component{

    unSubscribeFromAuth = null;
    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const userRef =  await creatUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                            id:snapshot.id,
                            ...snapshot.data()
                    })
                })
            }
                setCurrentUser(userAuth);
        })
    }
    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div >
                <Header/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/checkout' component={Checkout}/>
                    <Route  path='/shop' component={ShopPage}/>
                    <Route exact path='/signin' render={() =>this.props.currentUser ? <Redirect to='/'/> : <SignInAndUp/>}/>
                </Switch>
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector ({
    currentUser: selectCurrentUser,
})
const mapDispatchToProps = dispatch =>({
    setCurrentUser: user =>  dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
