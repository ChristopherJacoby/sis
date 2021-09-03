import React from "react";
import { Link } from "react-router-dom";
import RemoveStudent from "./removeStudent";

const Landing = () => {
  return (
    <div>
      <h3>Students</h3>
      <div>
        <h6>StudentID</h6>
        <h6>First Name</h6>
        <h6>Last Name</h6>
        <h6>Major</h6>
        <h6>Date of Birth</h6>
        <h6>Email</h6>
        <h6>Phone</h6>
        <h6>Address</h6>
      </div>
      <Link to="/addstudent">
        <button>Add Student</button>
      </Link>
      <RemoveStudent />
    </div>
  );
};

export default Landing;
