import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Details:", loginData);
    navigate("/"); // Redirect to Home Page
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div><br />
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div><br />
        <div>
          <button type="submit">Submit</button>
        </div><br />
        <div>
          <button type="button" onClick={goToRegister}>
            Register Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
