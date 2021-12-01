import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { collection, db, onSnapshot } from '../../firebase/firebase.util';

const StudentDB = () => {
  const [studentDB, setStudentDB] = useState([]);

  useEffect(() => {
    //collection ref
    const studentCollectionRef = collection(db, "students")

    //real time collection data
    const unsubscribe = onSnapshot(studentCollectionRef, (snapshot) => {
      let students = [];
      snapshot.docs.forEach((doc) => {
        students.push({ ...doc.data(), id: doc.id })
      })
      setStudentDB([...students])
    })
    return () => {
      unsubscribe();
    };
  }, []);

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

export default StudentDB;
