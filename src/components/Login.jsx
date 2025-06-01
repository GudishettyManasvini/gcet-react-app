import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [welcomeMsg, setWelcomeMsg] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
    setError("");
    setWelcomeMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Find user by email
    const user = users.find(u => u.email === loginData.email);

    if (!user) {
      setError("User not found. Please register first.");
      return;
    }

    if (user.password !== loginData.password) {
      setError("Incorrect password.");
      return;
    }

    // Success login
    setWelcomeMsg(`Welcome to my store, ${user.name}! Enjoy shopping.`);
    setError("");
    // Optionally delay navigation to show welcome message
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate("/register")}>
          Register Account
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {welcomeMsg && <p style={{ color: "green" }}>{welcomeMsg}</p>}
    </div>
  );
}

export default Login;
