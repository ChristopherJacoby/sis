import React, { useState } from 'react';

const SignIn = () => {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleChange = e => {
        [Username] = e.target.value,
            [password] = e.target.value,
            console.log(username, password);

    };

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <form action="post">
                <label htmlFor="Username">Username</label>
                <input type="text" onChange={handleChange} placeholder="Username" id="Username" />
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password" />
                <input type="button" value="Submit" onClick={updateField} />
            </form>
        </div>
    );
}

export default SignIn;