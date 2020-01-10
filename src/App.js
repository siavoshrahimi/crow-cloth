import React from 'react';
import {Route, Switch} from "react-router-dom";
import {auth} from "./firebase/firebase.utils";
import './App.css';
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from './pages/shop/shop';
import Header from "./components/header/header";
import SignInAndUp from "./pages/signInAndUp/signInAndUp";
class App extends React.Component{
    state={
        currentUser:null,
    }

    unSubscribeFromAuth = null;
    componentDidMount() {
        this.unSubscribeFromAuth = auth.onAuthStateChanged(user =>{
            this.setState({currentUser:user});
        })
    }
    componentWillUnmount() {
        this.unSubscribeFromAuth();
    }

    render() {
        return (
            <div >
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route  path='/shop' component={ShopPage}/>
                    <Route  path='/signin' component={SignInAndUp}/>
                </Switch>
            </div>
        );
    }
}

export default App;
