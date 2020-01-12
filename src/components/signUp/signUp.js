import React from "react";

import FormInput from "../formInput/formInput";
import Button from "../button/button";

import {auth,creatUserProfileDocument} from "../../firebase/firebase.utils";

import './signUp.scss';

class SignUp extends React.Component{
    state={
        displayName:'',
        email: '',
        password:'',
        confirmPassword:''
    }
    handelSubmit = async event =>{
        event.preventDefault();
        debugger;
        const {displayName, email,password,confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("Passwords don't match");
            return;
        }
        try{
            const{user} =await auth.createUserWithEmailAndPassword(email,password);

            await creatUserProfileDocument(user,{displayName});

            this.setState({
                    displayName:'',
                    email: '',
                    password:'',
                    confirmPassword:''
                }
            )
        }catch (error) {
            console.error(error);
        }
    }

    handelChange= event =>{
        const {value,name} = event.target;
        this.setState({[name]:value})
    }

    render() {
        const {displayName, email,password,confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
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
            </div>
        )
    }

}

export default SignUp;