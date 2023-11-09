import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const storageuser = JSON.parse(localStorage.getItem("user") || `{}`);
    setUser(storageuser);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-flex">
        <div>
          <Link to="/" className="logo">
            Al-Zam-Zam-Collection
          </Link>
        </div>
        <div>
          <Link to="/signup" className="navbar-link">
            Signup
          </Link>
          <Link to="/login" className="navbar-link">
            Login
          </Link>
          <Link to="/orders" className="navbar-link">
            Myorder
          </Link>
        </div>
        <div>
          <span className="user">Hello,{ user.name || "user ! "}</span>
          {user?.name ? (
            <span
              className="navbar-logout"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login" ;
              }}
            >
              <span className="logout">  Logout</span>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
