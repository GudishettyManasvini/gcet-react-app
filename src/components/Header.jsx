
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import '../App.css';

export default function Header() {
  const { user } = useContext(AppContext);
  // const isLoggedIn = user?.email && user?.token;

  return (
    <header>
      <h1>Serenité Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
       <Link to="/orders">Your Orders</Link>
        {user.token ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      </nav>
    </header>
  );
}
