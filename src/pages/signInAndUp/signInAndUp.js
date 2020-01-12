import React from "react";
import SignIn from "../../components/signIn/signIn";
import './signInAndUp.scss';
import SignUp from "../../components/signUp/signUp";


const SignInAndUp = () =>{
    return(
        <div className='sign-in-and-sign-up'>
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default SignInAndUp;