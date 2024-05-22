import React, { useState } from "react";
import "../styles/register.css";
import Axios from 'axios';

const Register = () => {

//     const [username, setUsername] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         Axios.post('/auth/register', {
//             username, 
//             email, 
//             password,
//         }).then(response => {
//             if(response.data.status) {
//                 navigator('/login')
//             }
//         }).catch(err => {
//             console.log(err)
//         })
//     }


    return (
        <div>register</div>
//         <div className="register">
//             <form className="register__form" onSubmit={handleSubmit}>
//                 <h2>Register</h2>
//                 <label htmlFor="username">Username:</label>
//                 <input type="text" placeholder='Username'
//                     onChange={(e) => setUsername(e.target.value)} />

//                 <label htmlFor="email">Email:</label>
//                 <input type="email" autoComplete='off' placeholder='Email'
//                     onChange={(e) => setEmail(e.target.value)} />

//                 <label htmlFor="password">Password:</label>
//                 <input type="password" placeholder='******'
//                     onChange={(e) => setPassword(e.target.value)} />

//                 <button type='submit'>Register</button>
//                 <p>Have an Account? <a href="/login">Login</a></p> 
//             </form>
//         </div>
    )
};

export default Register;