import React, { useState, useRef } from "react";
import FormInput from './form-input/form-input.component';
import { auth } from '../../firebase/firebase.util';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = credentials;

  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);

  const handleUpdate = (e) => {
    const { value, id } = e.target;
    setCredentials((prevValue) => {
      return {
        ...prevValue,
        [id]: value
      };
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }

    setCredentials({
      email: "",
      password: ""
    })
  }

  // const auth = getAuth();
  // const signUp = e => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(
  //     emailRef.current.value,
  //     passwordRef.current.value
  //   ).then((userCredential) => {
  //     const user = userCredential.user;
  //   })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
  // }

  return (
    <div>
      <h2>Siggn In</h2>
      <p>Sign in with your email</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          onChange={handleUpdate}
          name="email"
          label='Email'
          value={credentials.email}
          required
        />

        <FormInput
          type="password"
          onChange={handleUpdate}
          name="password"
          label='Password'
          value={credentials.password}
          required
        />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
