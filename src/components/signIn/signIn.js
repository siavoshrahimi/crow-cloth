import React from "react";
import {connect} from 'react-redux';


import {googleSignInStart,emailSignInStart} from "../../redux/user/userAction";

import FormInput from "../formInput/formInput";
import Button from "../button/button";

import {SignInContainer,ButtonContainer,SignInTitle} from "./signIn.styles";

class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    submitHandler = async event =>{
        event.preventDefault();
        const {email,password} = this.state;
        const {emailSignInStart} = this.props;

        emailSignInStart(email,password);
    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({[name] : value})
    }
    render() {
        const {googleSignInStart} = this.props;
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
                        <Button
                            onClick={googleSignInStart}
                            isGoogleSignIn
                            type="button"
                        >
                            {''}Sign In with Google{''}
                        </Button>
                    </ButtonContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    googleSignInStart: () =>  dispatch(googleSignInStart()),
    emailSignInStart: (email,password) =>dispatch(emailSignInStart({email,password}))
})

export default connect(null,mapDispatchToProps)(SignIn);