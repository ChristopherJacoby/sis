import React from 'react';

const SignUp = () => {

    return (
        <div>
            <form action="post">
                <label htmlFor="Name">Name</label>
                <input type="text" placeholder="Name" id="Name" />
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder="Email" />
                <label htmlFor="Username">Username</label>
                <input type="text" placeholder="Username" />
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Password" />
            </form>
        </div >
    );
}

export default SignUp;