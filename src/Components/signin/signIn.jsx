import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import { useLogin } from '../../CustomHooks/useLogin';

//style
import './signin.styles.css'

const SignIn = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const { login, isPending, error } = useLogin()
  const { email, password } = credentials;

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
    login(email, password);
    setCredentials({
      email: "",
      password: ""
    })
  };

  return (
    <div className="container">
      <div className="container">
        <h2>Sign In</h2>
        <p>Sign in with your email</p>
      </div>
      <div className="container justLeft">
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
          {isPending ?
            <button disabled>Loading...</button>
            : <input type="submit" value="Sign In" />}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignIn;
