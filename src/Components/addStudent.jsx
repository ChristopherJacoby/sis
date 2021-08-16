import React from 'react';

const AddStudent = () => {

    const handleAdd = () => {
        console.log("Clicked Add Student");

    }

    return (
        <div>
            <form method="post">
                <label htmlFor="FName">First Name</label>
                <input required type="text" id="FName" placeholder="First Name" />
                <label htmlFor="LName">Last Name</label>
                <input required type="text" id="LName" placeholder="Last Name" />
                <label htmlFor="DOB">Date of Birth</label>
                <input required type="date" id="DOB" placeholder="Date of Birth" />
                <label htmlFor="Email">Email</label>
                <input required type="email" id="Email" placeholder="Email Address" />
                <label htmlFor="Phone">Phone Number</label>
                <input required type="tel" id="Phone" placeholder="Phone Number" />
                <label htmlFor="Address">Address</label>
                <input required type="text" id="Address" placeholder="Address" />
                <label htmlFor="Major">Major</label>
                <input required type="text" id="Major" placeholder="Major" />
                <button onClick={handleAdd}>Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;