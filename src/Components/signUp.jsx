import React, { useState } from "react";

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    Name: "",
    Email: "",
    Username: "",
    Password: ""
  });
  console.log(`Name: ${credentials.Name},
  Email: ${credentials.Email},
  Username: ${credentials.Username},
  Password: ${credentials.Password}`);

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
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          onChange={handleUpdate}
          id="Name"
          value={credentials.Name}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          onChange={handleUpdate}
          id="Email"
          value={credentials.Email}
        />{" "}
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

export default SignUp;
