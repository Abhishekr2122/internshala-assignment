import { useState } from "react";
import "./responsivemodal.css";

import { createPortal } from "react-dom";
import Product from "./Product";
import Industry from "./Industry";

export default function ResponsiveModal({ isOpenBtnClicked }) {
  const [crrListValue, setCrrListValue] = useState("");

  console.log(crrListValue);

  if (isOpenBtnClicked) {
    return createPortal(
      <div className="responsivemodal">
        <div className="list-container">
          <div className="list">
            <div className="list-item">
              <div
                onClick={function () {
                  setCrrListValue("product");
                }}
              >
                Product
              </div>
              {crrListValue === "product" ? <Product /> : null}
            </div>
            <div
              className="list-item"
              onClick={function () {
                setCrrListValue("");
              }}
            >
              Pricing
            </div>
            <div className="list-item">
              <div
                onClick={function () {
                  setCrrListValue("industry");
                }}
              >
                Industry
              </div>
              {crrListValue === "industry" ? <Industry /> : null}
            </div>
            <div
              className="list-item"
              onClick={function () {
                setCrrListValue("");
              }}
            >
              Customer Stories
            </div>
            <div
              className="list-item"
              onClick={function () {
                setCrrListValue("");
              }}
            >
              About
            </div>
            <div
              div
              className="list-item"
              onClick={function () {
                setCrrListValue("");
              }}
            >
              Blog
            </div>
            <div className="list-btn-container">
              <button className="list-btn">Logout</button>
              <button className="list-btn">Talk to us</button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }
}
