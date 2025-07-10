import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import "./Dashboard.css";
import {FaTachometerAlt, FaUsers,FaCog, FaMoneyBill, FaUserCircle,FaUser,  FaSignOutAlt,FaBars,} from "react-icons/fa";

const Dashboard: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const renderContent = () => {
    return <p>Welcome to {selectedMenu}</p>;
  };

  return (
    <div className="app-container">

     <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
  <div className="sidebar-header">
    {!isSidebarCollapsed && <span>Company Portal</span>}
    {isSidebarCollapsed ? (
      <FaAngleRight
        className="toggle-button"
        onClick={() => setIsSidebarCollapsed(false)}
      />
    ) : (
      <FaAngleLeft
        className="toggle-button"
        onClick={() => setIsSidebarCollapsed(true)}
      />
    )}
  </div>

        <div
          className={`menu-item ${selectedMenu === "Dashboard" ? "active" : ""}`}
          onClick={() => setSelectedMenu("Dashboard")}
        >
          <FaTachometerAlt className="icon" />
          {!isSidebarCollapsed && <span>Dashboard</span>}
        </div>

        <div
          className={`menu-item ${selectedMenu === "Employees" ? "active" : ""}`}
          onClick={() => setSelectedMenu("Employees")}
        >
          <FaUsers className="icon" />
          {!isSidebarCollapsed && <span>Employees</span>}
        </div>

        <div
          className={`menu-item ${selectedMenu === "HR Services" ? "active" : ""}`}
          onClick={() => setSelectedMenu("HR Services")}
        >
          <FaCog className="icon" />
          {!isSidebarCollapsed && <span>HR Services</span>}
        </div>

        <div
          className={`menu-item ${selectedMenu === "Payroll" ? "active" : ""}`}
          onClick={() => setSelectedMenu("Payroll")}
        >
          <FaMoneyBill className="icon" />
          {!isSidebarCollapsed && <span>Payroll</span>}
        </div>
      </aside>

    
      <div className="main-area">
       
        <header className="top-header">
          <div className="header-title">{selectedMenu}</div>
          <div
            className="profile-section"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <FaUserCircle className="profile-icon" />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="dropdown-item">
                  <FaUser className="dropdown-icon" /> Profile
                </div>
                <div className="dropdown-item">
                  <FaCog className="dropdown-icon" /> Settings
                </div>
                <div className="dropdown-item">
                  <FaSignOutAlt className="dropdown-icon" /> Logout
                </div>
              </div>
            )}
          </div>
        </header>

       
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
