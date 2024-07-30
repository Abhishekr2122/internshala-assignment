import { createPortal } from "react-dom";
import Product from "./Product";
import Industry from "./Industry";
import "./modal.css";

export default function Modal({ selectedNavItem, industryListDistance }) {
  if (selectedNavItem === "Product") {
    return createPortal(
      <div className="productmodal">
        <Product />
      </div>,
      document.body
    );
  }

  if (selectedNavItem === "Industry") {
    return createPortal(
      <div
        style={{
          left: `${industryListDistance}px`,
          position: "absolute",
          top: "70px",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Industry />
      </div>,
      document.body
    );
  } else {
    return null;
  }
}
