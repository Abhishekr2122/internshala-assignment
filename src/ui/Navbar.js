import "./navbar.css";

export default function Navbar({ setSelectedNavItem }) {
  const navItems = [
    "Product",
    "Pricing",
    "Industry",
    "Customer Stories",
    "About",
    "Blog",
  ];
  return (
    <nav className="nav-container">
      <ul className="nav">
        {navItems.map(function (citem, i) {
          return (
            <li
              className="nav-items"
              onMouseEnter={function () {
                setSelectedNavItem(citem);
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
