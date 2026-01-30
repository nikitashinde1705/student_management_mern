import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { loginUser } from "../api/authApi";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await loginUser({ email, password });
      login(res.data.token);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(to right, #4e73df, #1cc88a)"
      }}
    >
      <div className="card shadow-lg p-4 col-md-4 bg-white rounded">

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
            className="btn btn-outline-light w-100 border-primary text-primary rounded-pill"
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
};

export default Login;




