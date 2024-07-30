import { useRef } from "react";
import "./navbar.css";

export default function Navbar({
  setSelectedNavItem,
  setIndustryListDistance,
}) {
  const navItems = [
    "Product",
    "Pricing",
    "Industry",
    "Customer Stories",
    "About",
    "Blog",
  ];

  const listItemDistance = useRef(null);
  return (
    <nav className="nav-container">
      <ul className="nav" ref={listItemDistance}>
        {navItems.map(function (citem, i) {
          return (
            <li
              className="nav-items"
              onMouseEnter={function (e) {
                setSelectedNavItem(citem);
                setIndustryListDistance(
                  listItemDistance.current.getBoundingClientRect().left
                );
              }}
              key={i}
            >
              {citem}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
