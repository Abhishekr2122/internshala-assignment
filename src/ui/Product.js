import "./product.css";

import { IoHome } from "react-icons/io5";
import { GoWorkflow } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { FaBoxOpen } from "react-icons/fa";
import { PiNetwork } from "react-icons/pi";
import { GrSettingsOption } from "react-icons/gr";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiThought } from "react-icons/tfi";

export default function Product() {
  return (
    <div className="product">
      <div className="product-content-container">
        <div className="product-header-content">
          <IoHome className="product-header-logo" />
          <h5 className="product-header">Product Home</h5>
        </div>
        <div className="product-main-content">
          <div className="product-main-card">
            <GoWorkflow className="product-main-card-logo" />
            <div className="product-main-card-content-container">
              <h5 className="product-main-card-heading">
                HELIX: Work Flow Automation
              </h5>

              <p className="product-main-card-para">
                Build and automate custom S&OP Workflow
              </p>
            </div>
          </div>
          <div className="product-main-card">
            <IoIosSearch className="product-main-card-logo" />
            <div className="product-main-card-content-container">
              <h5 className="product-main-card-heading">
                Accurate demand forecasting
              </h5>
              <p className="product-main-card-para">
                Dynamically predict future demand unmatched accuracy
              </p>
            </div>
          </div>
          <div className="product-main-card">
            <FaBoxOpen className="product-main-card-logo" />
            <div className="product-main-card-content-container">
              <h5 className="product-main-card-heading">
                Automated purchase planning
              </h5>
              <p className="product-main-card-para">
                Automate your purchase order generation
              </p>
            </div>
          </div>
          <div className="product-main-card">
            <PiNetwork className="product-main-card-logo" />
            <div className="product-main-card-content-container">
              <h5 className="product-main-card-heading">
                Automated Distribution planning
              </h5>
              <p className="product-main-card-para">
                Automate distribution planning and allocation to maintain high
                fill rates
              </p>
            </div>
          </div>
          <div className="product-main-card">
            <GrSettingsOption className="product-main-card-logo" />
            <div className="product-main-card-content-container">
              <h5 className="product-main-card-heading">Integrations</h5>
              <p className="product-main-card-para">
                Yes, Crest works with your tech and ops stack!
              </p>
            </div>
          </div>
          <div className="product-main-card">
            <LuLayoutDashboard className="product-main-card-logo" />
            <div className="product-main-card-content-container">
              <h5 className="product-main-card-heading">Custom dashboards</h5>
              <p className="product-main-card-para">
                Build and visualise data your way
              </p>
            </div>
          </div>
          <div className="product-main-card">
            <TfiThought className="product-main-card-logo" />
            <div className="product-main-card-content-container">
              <h5 className="product-main-card-heading">Consensus planning</h5>
              <p className="product-main-card-para">
                Collaborate and take better decisions faster
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
