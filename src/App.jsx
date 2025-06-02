import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";  // ✅ Make sure this path is correct
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <h1>My Store</h1>
          <nav>
            <Link to="/">Home</Link> -
            <Link to="/cart">Cart</Link> -
            <Link to="/login">Login</Link>
          </nav>
          <hr />
        </header>

        <main>
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome" element={<Welcome />} /> {/* ✅ Added this line */}
          </Routes>
        </main>

        <footer>
          <hr />
          &copy; 2005. All rights Reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
