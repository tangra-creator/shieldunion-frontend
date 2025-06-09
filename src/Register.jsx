import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder: Handle form submission here
    console.log("Submitted:", formData);
    alert("Registration submitted!");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Register for ShieldUnion</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label><br />
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required /><br /><br />
        
        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />
        
        <label>Password:</label><br />
        <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />
        
        <label>Confirm Password:</label><br />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required /><br /><br />
        
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
