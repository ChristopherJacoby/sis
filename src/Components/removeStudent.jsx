import React from 'react';

const RemoveStudent = () => {

    const handleRemove = () => {
        console.log("Remove Clicked");

    }

    return (
        <div>
            <button onClick={handleRemove}>Remove Student</button>
        </div>
    );
}

export default RemoveStudent;