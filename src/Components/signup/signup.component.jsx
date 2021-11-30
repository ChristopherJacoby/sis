import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { useSignup } from '../../CustomHooks/useSignup';

//styles
import './signup.styles.css';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = credentials;
  const { signup, isPending, error } = useSignup();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (confirmPassword !== password) {
      alert("Passwords do not match.")
    } else {
      signup(email, password, displayName)
    }
    setCredentials({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    })
  };


  return (
    <div className="container">
      <h2>Sign Up</h2>
      <p>Create an account with your email</p>
      <div className="container moveLeft">
        <form onSubmit={handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            label="Display Name"
            onChange={handleChange}
            required
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            label="Email"
            onChange={handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            label="Password"
            onChange={handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            label="Confirm Password"
            onChange={handleChange}
            required
          />
          {isPending ? <button disabled>Loading...</button>
            : <input type="submit" value="Sign Up" />
          }
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
