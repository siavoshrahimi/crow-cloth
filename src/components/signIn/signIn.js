import React from "react";

import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

import FormInput from "../formInput/formInput";
import Button from "../button/button";

import {SignInContainer,ButtonContainer,SignInTitle} from "./signIn.styles";

class SignIn extends React.Component{
    state={
        email:"",
        password:''
    }
    submitHandler = async event =>{
        event.preventDefault();
        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'' , password: ''});
        }catch (error) {
            console.log(error);
        }


    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name] : value})
    }
    render() {
        return(
            <SignInContainer>
                <SignInTitle>I have already have an account</SignInTitle>
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

                    <ButtonContainer>
                        <Button type="submit" >Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>{''}Sign In with Google{''}</Button>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

export default SignIn;