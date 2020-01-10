import React from "react";

import './signIn.scss';
import FormInput from "../formInput/formInput";
import Button from "../button/button";
import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    state={
        email:"",
        password:''
    }
    submitHandler = event =>{
        event.preventDefault();

        this.setState({email:'' , password: ''})
    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name] : value})
    }
    render() {
        return(
            <div className='sign-in'>
                <h2>I have already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.submitHandler}>
                    <FormInput type="email"
                           name='email'
                           value={this.state.email}
                           required
                           onChange={this.handleChange}
                           label='email'
                    />

                    <FormInput type="password"
                           name='password'
                           value={this.state.password}
                           required
                           onChange={this.handleChange}
                           label='password'
                    />

                    <div className="buttons">
                        <Button type="submit" >Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>{''}Sign In with Google{''}</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;