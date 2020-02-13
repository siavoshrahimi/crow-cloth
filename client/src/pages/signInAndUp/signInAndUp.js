import React from "react";

import {SignInAndUpContainer} from "./signInAndUp.styles";

import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";


const SignInAndUp = () =>{
    return(
        <SignInAndUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndUpContainer>
    )
}

export default SignInAndUp;