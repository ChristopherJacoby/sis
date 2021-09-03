import React, { useState } from "react";

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    Username: "",
    Password: ""
  });

  const handleUpdate = (e) => {
    const { value, id } = e.target;
    setCredentials((prevValue) => {
      return {
        ...prevValue,
        [id]: value
      };
    });
  };

  return (
    <div>
      <form action="post">
        <label htmlFor="Username">Username</label>
        <input
          type="text"
          onChange={handleUpdate}
          id="Username"
          value={credentials.Username}
        />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          onChange={handleUpdate}
          id="Password"
          value={credentials.Password}
        />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
};

export default SignIn;
