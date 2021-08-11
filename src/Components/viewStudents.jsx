import React from 'react';
import AddStudent from './addStudent';
import RemoveStudent from './removeStudent';

const ViewStudents = () => {
    return (
        <div>
            <p>*NOTE* These students are created using a random generator. Any connection to actual students is coincidental.</p>
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
            <AddStudent />
            <RemoveStudent />
        </div>
    );
}

export default ViewStudents;