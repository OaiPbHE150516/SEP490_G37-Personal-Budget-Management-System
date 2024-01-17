import React, {useState} from 'react';
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.png";
import {
  BsFillMenuButtonWideFill,
  BsCreditCard,
  BsBank,
  BsDatabaseCheck,
  BsBoxArrowRight,
} from "react-icons/bs";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="Sidebar">
      <div className="Logo">
        <img src={logo} alt="" />
        <span>PBMS</span>
      </div>
      <div className="listSidebar">
        {/* <div className="content active"> */}
        <div className={selected===0?'content active':'content'}
        onClick={()=>setSelected(0)}>
          <Link to="/">
            <BsFillMenuButtonWideFill />
            <span>Tổng quan</span>
          </Link>
        </div>
        {/* <div className="content active"> */}
        <div className={selected===1?'content active':'content'}
        onClick={()=>setSelected(1)}>
          <Link to="/card">
            <BsCreditCard />
            <span>Thẻ tín dụng</span>
          </Link>
        </div>
        {/* <div className="content active"> */}
        <div className={selected===2?'content active':'content'}
        onClick={()=>setSelected(2)}>
          <Link to="/account">
            <BsBank />
            <span>Các tài khoản</span>
          </Link>
        </div>
        {/* <div className="content active"> */}
        <div className={selected===3?'content active':'content'}
        onClick={()=>setSelected(3)}>
          <Link to="/transaction">
            <BsDatabaseCheck />
            <span>Các giao dịch</span>
          </Link>
        </div>
        {/* <div className="content active"> */}
        <div className={selected===4?'content active':'content'}
        onClick={()=>setSelected(4)}>
          <Link to="/diary">
            <BsBank />
            <span>Nhật ký thu chi</span>
          </Link>
        </div>
        {/* <div className="content active"> */}
        <div className={selected===5?'content active':'content'}
        onClick={()=>setSelected(5)}>
          <Link to="/cost">
            <BsDatabaseCheck />
            <span>Các chi phí</span>
          </Link>
        </div>
        {/* <div className="content active"> */}
        <div className={selected===6?'content active':'content'}
        onClick={()=>setSelected(6)}>
          <Link to="/chart">
            <BsBank />
            <span>Biểu đồ</span>
          </Link>
        </div>
        {/* <div className="content active"> */}
        <div className={selected===7?'content active':'content'}
        onClick={()=>setSelected(7)}>
          <Link to="/calendar">
            <BsDatabaseCheck />
            <span>Lịch</span>
          </Link>
        </div>
        <hr/>
        <div className="content">
          <Link to="/logout">
            <BsBoxArrowRight />
            <span>Đăng xuất</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;