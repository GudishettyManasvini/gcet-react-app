import { useLocation, useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || { username: "Guest" };

  return (
    <div className="form-container">
      <h1><strong>Welcome, {username}!</strong></h1>
      <p>Enjoy shopping 🛍️</p>
      <button onClick={() => navigate("/")}>Go to Product Page</button>
    </div>
  );
}

export default Welcome;
