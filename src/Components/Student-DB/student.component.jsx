import React from "react";

const Landing = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Student ID</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">30056</th>
          <td>Mark Jacob</td>
          <td>mjacob@test.com</td>
          <td>555-555-5555</td>
        </tr>
        <tr>
          <th scope="row">30057</th>
          <td>Jacob Thornton</td>
          <td>jthor@test.com</td>
          <td>555-555-5555</td>
        </tr>
        <tr>
          <th scope="row">30058</th>
          <td>Larry Penston</td>
          <td>lpens@test.com</td>
          <td>555-555-5555</td>
        </tr>
      </tbody>
    </table>);
};

export default Landing;
