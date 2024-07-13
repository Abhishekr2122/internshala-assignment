import "./product.css";

import { FaHouse } from "react-icons/fa6";

export default function Product() {
  return (
    <div className="product">
      <div className="product-main-container">
        <div className="product-header-content">
          <div className="header-content">
            <FaHouse style={{ color: "orangered" }} />
            <h4>Product Home</h4>
          </div>
        </div>
        <div className="product-main-content">
          <div className="main-content1">
            <div className="main-card"></div>
            <div className="main-card"></div>
            <div className="main-card"></div>
            <div className="main-card"></div>
          </div>
          <div className="main-content2">
            <div className="main-card"></div>
            <div className="main-card"></div>
            <div className="main-card"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
