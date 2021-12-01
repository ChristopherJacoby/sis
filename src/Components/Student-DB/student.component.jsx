import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { db } from '../../firebase/firebase.util';

const StudentDB = () => {
  const [studentDB, setStudentDB] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((studentDB) => {
    let getStudents = [];
    const subscriber = db.collection("students")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getStudents.push({
            ...doc.data(),
            id: doc.id
          })
        })
        setLoading(false);
        setStudentDB(getStudents)
      });
    console.log(studentDB);

    return () => {
      subscriber()
    };
  }, []);

  if (loading) {
    return (
      <h1>Loading...</h1>
    )
  } else {
    return (
      <div className="container">
        <div>
          <li className="btn shadow-none"><Link className="btn shadow-none" to='/addstudent'>Add Student</Link></li>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              studentDB.map(student => {
                return (
                  <tr key={student.id}>
                    <th scope="row">{student.studentID}</th>
                    <td>{`${student.fname} ${student.lname}`}</td>
                    <td>{student.email}</td>
                    <td>{student.phone}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default StudentDB;