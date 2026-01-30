import React, { useState } from 'react'
import { registerUser } from '../api/authApi'

const Register = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!form.role) {
      newErrors.role = "Please select a role";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      await registerUser(form);
      setSuccess("Registration Successful!");
      setForm({ name: "", email: "", password: "", role: "" });
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
  <div 
    className="d-flex justify-content-center align-items-center vh-100"
    style={{
      background: "linear-gradient(to right, #4e73df, #1cc88a)"
    }}
  >
    <div 
      className="card shadow-lg p-4 bg-white rounded"
      style={{ width: "100%", maxWidth: "420px" }}
    >

      <h3 className="text-center mb-4 fw-bold text-primary">
        Welcome Back 👋
      </h3>

      {error && (
        <div className="alert alert-danger text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control rounded-pill"
            placeholder="Enter your email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control rounded-pill"
            placeholder="Enter your password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary w-100 rounded-pill mb-3">
          Login
        </button>

        <button 
          type="button"
          className="btn btn-outline-primary w-100 rounded-pill"
          onClick={() => navigate("/register")}
        >
          New User? Register
        </button>

        <p className="text-center mt-3 text-muted">
          © 2026 Your App. All rights reserved.
        </p>

      </form>
    </div>
  </div>
);

}

export default Register





// import React, { useState } from 'react'
// import { registerUser } from '../api/authApi'

// const Register = () => {

//   const [form, setForm] = useState({});
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await registerUser(form);
//     alert("Register Successfuly");
//   }

//   return (
//     <div className='container'>
//         <h1>Register</h1>

//         <form onSubmit={handleSubmit}>

//           <input className='form-control mb-3' placeholder='Enter Name' 
//           onChange={e => setForm({...form, name:e.target.value})}/>

//           <input className='form-control mb-3' placeholder='Enter Email' 
//           onChange={e => setForm({...form, email:e.target.value})}/>

//           <input className='form-control mb-3' type='password' placeholder='Enter password' 
//           onChange={e => setForm({...form, password:e.target.value})}/>

//           <select className='form-select' onChange={e=>setForm({...form, role:e.target.value})} >
//             <option>staff</option>
//             <option>admin</option>
//           </select>

//           <button className='btn btn-success w-100'>Register</button>
//         </form>
//     </div>
//   )
// }

// export default Register
