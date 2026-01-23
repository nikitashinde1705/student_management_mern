import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {loginUser} from "../api/authApi";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const rest = await loginUser({email, password});
        login(rest.data.token);
        navigate("/");
    }

  return (
    <div className='container mt-5 col-md-6'>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <input className='form-control mb-2' placeholder='Enter Email' type="text"
        onChange={e=>setEmail(e.target.value)} />

         <input className='form-control mb-2' placeholder='Enter Password' type="text"
       onChange={e=>setPassword(e.target.value)} />

       <button className='btn btn-primary w-100'>Login</button>

      </form>
    </div>
  )
}

export default Login
