import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import getFirebase from "../../firebase/firebase.util";

const SignIn = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = credentials;
  const firebaseInstance = getFirebase();
  //const {userEmail} = props.user.email

  const handleUpdate = (e) => {
    const { value, name } = e.target;
    setCredentials((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (firebaseInstance) {
        const user = await firebaseInstance
          .auth()
          .signInWithEmailAndPassword(email, password);
        console.log("user", user);
        alert(`Welcome back ${user.user._delegate.email}!`);
      }
    } catch (error) {
      console.log("error", error);
    }
    setCredentials({
      email: "",
      password: ""
    });
  };

  return (
    <div>
      <h2>Sign In</h2>
      <p>Sign in with your email</p>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          onChange={handleUpdate}
          name="email"
          label="Email"
          value={email}
          required
        />

        <FormInput
          type="password"
          onChange={handleUpdate}
          name="password"
          label="Password"
          value={password}
          required
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  );
};

export default SignIn;
