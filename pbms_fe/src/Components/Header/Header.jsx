import React from 'react';
import "./Header.css";
import {
  BsFillGrid3X3GapFill,
  BsPersonCircle,
  BsFillGearFill,
} from "react-icons/bs";
const Header = ({ toggleSidebar }) => {
    return (
        <div className="Header">
          <div className="Menu" onClick={toggleSidebar}>
            <BsFillGrid3X3GapFill />
          </div>
          <div className="User_Setting">
            <div className="User">
              <BsPersonCircle />
              <span>Tên người dùng</span>
            </div>
            <div className="Setting">
              <BsFillGearFill />
            </div>
          </div>
        </div>
      );
};

export default Header;