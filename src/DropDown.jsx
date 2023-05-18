import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import './App.css'
export const DropDown = () => {
  return (
    <div className="drop-down">
        <div className="list-li">
          Why Otter.ai <FaAngleDown className="AngleDown"/>
        </div>
        <div className="list-li">Pricing</div>
        <div className="list-li">
          Download <FaAngleDown className="AngleDown"/>
        </div>
        <div className="list-li">
          Resources <FaAngleDown className="AngleDown"/>
        </div>
        <div className="btn">
           <a type="button" href="#" className="link-buttons log-in">Log In</a>
           <a type="button" href="#" className="link-buttons Free">Start for Free</a>
        </div>
      </div>
  )
}
