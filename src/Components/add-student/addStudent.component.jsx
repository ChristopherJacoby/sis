import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { useCreateStudent } from '../../CustomHooks/useCreateStudent';

//styles
import './addStudent.styles.css';

const AddStudent = () => {

    const [student, setStudent] = useState({
        studentID: "",
        fname: "",
        lname: "",
        email: "",
        birthDate: "",
        phone: ""
    });

    const { studentID, fname, lname, email, birthDate, phone } = student
    const { createStudent } = useCreateStudent();

    const handleUpdate = (e) => {
        const { name, value } = e.target;
        setStudent(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Create student into Firestore.
        createStudent(studentID, fname, lname, email, birthDate, phone)
        setStudent({
            studentID: "",
            fname: "",
            lname: "",
            email: "",
            birthDate: "",
            phone: ""
        })
    }

    return (
        <div className="container">
            <h3>Add Student</h3>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="number"
                    onChange={handleUpdate}
                    name="studentID"
                    label="Student ID"
                    value={studentID}
                    required
                />
                <FormInput
                    type="text"
                    onChange={handleUpdate}
                    name="fname"
                    label="First Name"
                    value={fname}
                    required
                />
                <FormInput
                    type="text"
                    onChange={handleUpdate}
                    name="lname"
                    label="Last Name"
                    value={lname}
                    required
                />
                <FormInput
                    type="email"
                    onChange={handleUpdate}
                    name="email"
                    label="Email"
                    value={email}
                    required
                />
                <FormInput
                    type="date"
                    onChange={handleUpdate}
                    name="birthDate"
                    label="Date of Birth"
                    value={birthDate}
                    required
                />
                <FormInput
                    type="phone"
                    onChange={handleUpdate}
                    name="phone"
                    label="Phone Number"
                    value={phone}
                    required
                />
                <input type="submit" value="Enter Student" />
            </form>
        </div>
    );
}

export default AddStudent;