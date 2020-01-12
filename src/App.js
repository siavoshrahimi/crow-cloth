import React from 'react';
import {Route, Switch} from "react-router-dom";
import {auth,creatUserProfileDocument} from "./firebase/firebase.utils";
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
        this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const userRef =  await creatUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser:{
                            id:snapshot.id,
                            ...snapshot.data()
                        }
                    })
                    console.log(this.state.currentUser)
                })
            }else {
                this.setState({currentUser:userAuth})
            }
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
