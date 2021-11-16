import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { displayName, email, password, confirmPassword } = credentials;

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

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
      setCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <p>Create an account with your email</p>
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
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default SignUp;
