import { useState } from "react";
import "./app.css";
import Header from "./components/Header";
import Main from "./components/Main";
import NavbarModal from "./ui/NavbarModal";
import Product from "./ui/Product";
// import Login from "./pages/Login";

import Industry from "./ui/Industry";

function App() {
  const [selectedNavItem, setSelectedNavItem] = useState("");
  console.log(selectedNavItem);

  return (
    <div className="App">
      {/* <Login /> */}
      <section id="section-1">
        <Header setSelectedNavItem={setSelectedNavItem} />
        <Main />
      </section>

      {/* <Product /> */}
      <Industry />
    </div>
  );
}

export default App;
