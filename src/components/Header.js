import Navbar from "../ui/Navbar";
import "./header.css";
import { IoLockClosed } from "react-icons/io5";

export default function Header({ setSelectedNavItem }) {
  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="./website-logo.png" alt="not-found" />
      </div>
      <Navbar setSelectedNavItem={setSelectedNavItem} />
      <div className="header-btn-container">
        <button className="header-login-btn">Logout</button>
        <button className="header-login-btn">Talk to us</button>
      </div>
      <div className="open-close-btn-container">
        <IoLockClosed
          style={{
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </header>
  );
}
