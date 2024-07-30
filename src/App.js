import { useState } from "react";
import "./app.css";
import Header from "./components/Header";

import NavbarModal from "./ui/NavbarModal";

// import Login from "./pages/Login";

import Industry from "./ui/Industry";
import Modal from "./ui/Modal";
import Login from "../src/pages/Login";
import ResponsiveModal from "./ui/ResponsiveModal";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const [industryListDistance, setIndustryListDistance] = useState(null);
  const [isOpenBtnClicked, setIsOpenBtnClicked] = useState(false);
  return (
    <div className="App">
      {/* <Login /> */}
      <section id="header-section">
        <Header
          setSelectedNavItem={setSelectedNavItem}
          setIndustryListDistance={setIndustryListDistance}
          setIsOpenBtnClicked={setIsOpenBtnClicked}
          isOpenBtnClicked={isOpenBtnClicked}
        />
      </section>

      <section id="main-section"></section>

      <Modal
        selectedNavItem={selectedNavItem}
        industryListDistance={industryListDistance}
      />

      <ResponsiveModal isOpenBtnClicked={isOpenBtnClicked} />
      <div></div>
    </div>
  );
}

export default App;
