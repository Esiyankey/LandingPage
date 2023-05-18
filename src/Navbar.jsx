import {useState} from "react";
import { FaEquals, FaTimes} from "react-icons/all";
import image from "./assets/image.png";
import './App.css'



export const Navbar = () => {
  const [activeNavbar,SetActiveNavbar]=useState(false)

  
  const ChangeBackground =()=>{
    if(window.scrollY > 50){
      SetActiveNavbar(true)
    }
    else{
      SetActiveNavbar(false)
    }
  }
  window.addEventListener('scroll',ChangeBackground);



  return (
    <>
      <div className={activeNavbar ? "Navbar active":'Navbar'}>
        <div className="logo">
          <img src={image} alt="Logo here" className="image1"/>
        </div>
        <div className="menu">
          <div className="menu-icons">
            <div className="menu-wrap">
              <div className="menu"> Menu</div>
              <div className="close"> Close</div>
            </div>
            <div className="icon-stack">
              <FaEquals className="icon" />
              <FaTimes className="icon times-icon" />
            </div>
          </div>
        </div>
      {/* <DropDown/> */}
      </div>
    </>
  );
};
