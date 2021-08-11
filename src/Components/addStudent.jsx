import React from 'react';

const AddStudent = () => {

    const handleAdd = () => {
        console.log("Clicked Add Student");

    }

    return (
        <div>
            <button onClick={handleAdd}>Add Student</button>
        </div>
    );
}

export default AddStudent;