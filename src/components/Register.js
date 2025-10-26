import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";


function Register() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered Successfully!");
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error registering");
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
