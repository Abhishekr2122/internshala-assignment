import { createPortal } from "react-dom";
import Product from "./Product";
import Industry from "./Industry";

export default function Modal({ selectedNavItem }) {
  if (selectedNavItem === "Product") {
    return <Product />;
  }

  if (selectedNavItem === "Industry") {
    return <Industry />;
  }
}
