import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h1 className="logo">Event Handler</h1>
      <ul className="nav-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/events" ? "active" : ""}>
          <Link to="/events">Events</Link>
        </li>
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
