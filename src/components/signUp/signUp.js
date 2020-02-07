import React from "react";
import {connect} from 'react-redux';

import FormInput from "../formInput/formInput";
import Button from "../button/button";


import {signUpStart} from "../../redux/user/userAction";

import {SignUpContainer,SignUpTitle} from "./signUp.styles";

class SignUp extends React.Component{
    state={
        displayName:'',
        email: '',
        password:'',
        confirmPassword:''
    }
    handelSubmit = async event =>{
        event.preventDefault();
        const {displayName, email,password,confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        signUpStart({email,password,displayName});
    }

    handelChange= event =>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        const {displayName, email,password,confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <SignUpTitle>I don't have an account</SignUpTitle>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handelSubmit}>
                    <FormInput
                        name='displayName'
                        value={displayName}
                        label='User Name'
                        onChange={this.handelChange}
                        required
                        type='text'
                    />
                    <FormInput
                        required
                        name='email'
                        value={email}
                        label='email'
                        onChange={this.handelChange}
                        type='email'
                    />
                    <FormInput
                        required
                        name='password'
                        value={password}
                        label='Password'
                        onChange={this.handelChange}
                        type='password'
                    />
                    <FormInput
                        required
                        name='confirmPassword'
                        value={confirmPassword}
                        label='Confirm Password'
                        onChange={this.handelChange}
                        type='password'
                    />
                    <Button type='submit'>SIGN UP</Button>
                </form>
            </SignUpContainer>
        )
    }

}

const mapDispatchToProps = dispatch =>({
    signUpStart: userCredential => dispatch(signUpStart(userCredential))
})

export default connect(null,mapDispatchToProps)(SignUp);