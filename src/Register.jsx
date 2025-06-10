import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic password match check
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        setMessage("Registration successful.");
        setFormData({
          fullName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        const errorData = await response.json();
        setMessage(errorData.message || "Registration failed.");
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div>
      <h2>Register for ShieldUnion</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

        <button type="submit">Register</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
