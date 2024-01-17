import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Overview from "./Pages/Overview";
import Sidebar from "./Components/Sidebar/Sidebar";
import Card from "./Pages/Card";
import Account from "./Pages/Account";
import Transaction from "./Pages/Transaction";
import Diary from "./Pages/Diary";
import Cost from "./Pages/Cost";
import Chart from "./Pages/Chart";
import Calendar from "./Pages/Calendar";
import Scroll from "./Components/Helper/Scroll";


function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="App">
      <BrowserRouter>
      {isSidebarVisible && <Sidebar />}
          <Routes>
            <Route path="/" element={<Overview toggleSidebar={toggleSidebar}/>} />
            <Route path="/card" element={<Card toggleSidebar={toggleSidebar}/>} />
            <Route path="/account" element={<Account toggleSidebar={toggleSidebar}/>} />
            <Route path="/transaction" element={<Transaction toggleSidebar={toggleSidebar}/>} />
            <Route path="/diary" element={<Diary toggleSidebar={toggleSidebar}/>} />
            <Route path="/cost" element={<Cost toggleSidebar={toggleSidebar}/>} />
            <Route path="/chart" element={<Chart toggleSidebar={toggleSidebar}/>} />
            <Route path="/calendar" element={<Calendar toggleSidebar={toggleSidebar}/>} />
          </Routes>
        </BrowserRouter>
        <Scroll />
    </div>
  );
}

export default App;
