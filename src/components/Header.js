import Navbar from "../ui/Navbar";
import "./header.css";

export default function Header({ setSelectedNavItem }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="./website-logo.png" alt="not-found" />
      </div>
      <Navbar setSelectedNavItem={setSelectedNavItem} />
      <div className="header-btn-container">
        <button className="header-login-btn">Login</button>
        <button className="header-login-btn">Talk to us</button>
      </div>
    </header>
  );
}
