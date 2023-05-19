import { useState } from "react";
import { FaEquals, FaAngleDown } from "react-icons/all";
import image from "./assets/image.png";
import "./App.css";

export const Navbar = () => {
  const [activeNavbar, SetActiveNavbar] = useState(false);

  const ChangeBackground = () => {
    if (window.scrollY > 50) {
      SetActiveNavbar(true);
    } else {
      SetActiveNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBackground);

  return (
    <>
      <div className={activeNavbar ? "Navbar active" : "Navbar"}>
        <div className="nav-links">
          <div className="logo">
            <img src={image} alt="Logo here" className="image1" />
          </div>
          <div className="links">
            <ul className="ul">
              <li>
                Why Otter.ai
                <FaAngleDown />
              </li>
              <li>
                Pricing
                <FaAngleDown />
              </li>
              <li>
                Download
                <FaAngleDown />
              </li>
              <li>
                Resources
                <FaAngleDown />
              </li>
            </ul>
          </div>
        </div>
        <div className="side-links">
          <li className="contact">Contact Sales</li>
          <li>Log In</li>
          <button className="Free">Start For Free</button>
        </div>
        <div className="menu">
          <div className="menu-icons">
            <div className="menu-wrap">
              <div className="menu"> Menu</div>
            </div>
            <div className="icon-stack">
              <FaEquals className="icon" />
            </div>
          </div>
        </div>
        {/* <DropDown/> */}
      </div>
    </>
  );
};
