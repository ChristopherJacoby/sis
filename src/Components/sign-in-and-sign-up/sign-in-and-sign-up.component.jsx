import React from 'react';
import SignUp from '../signup/signup.component';
import SignIn from '../signin/signIn.component';

//styles
import './sign-in-and-sign-up.styles.css'

const SignInAndSignUp = () => {
    return (
        <div className="container cards w-100">
            <div className="card"><SignIn /></div>
            <div className="card"><SignUp /></div>
        </div>
    );
}

export default SignInAndSignUp;
