import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
    setWelcomeMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const userExists = users.some(u => u.email === formData.email);
    if (userExists) {
      setError("User with this email already exists. Please login.");
      return;
    }

    // Add new user
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    setWelcomeMsg(`Welcome to my store, ${formData.name}! Enjoy shopping.`);
    setError("");

    // Delay navigation to home page to show welcome message
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {welcomeMsg && <p style={{ color: "green" }}>{welcomeMsg}</p>}
    </div>
  );
}

export default Register;
