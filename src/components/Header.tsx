import { useState } from "react";
import Hamburger from "hamburger-react";
//components
import Menu from "./Menu";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div style={{ width: "100%", height: "0px" }}>
      <nav>
        <div className="nav-mobile">
          <h2>SOLARCAST</h2>
          <div className="nav-option">
            <div className="options">
              <a href="#" className="option-personal">
                Personal
              </a>
              <a href="#business" className="option-business">
                Business
              </a>
            </div>
            <div className="hamburger-menu-mobile">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </nav>
      {isOpen && <Menu toggled={isOpen} toggle={setOpen} />}
    </div>
  );
};

export default Header;
