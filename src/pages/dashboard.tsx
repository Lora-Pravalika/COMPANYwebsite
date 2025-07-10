import React, { useState } from "react";
import {FaAngleLeft, FaAngleRight,  FaUsers, FaCog, FaMoneyBill, FaUserCircle, FaUser,FaSignOutAlt} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const getPageTitle = () => {
    if (location.pathname.endsWith("/employees")) return "Employees";
    if (location.pathname.endsWith("/hr-services")) return "HR Services";
    if (location.pathname.endsWith("/payroll")) return "Payroll";
    return "Dashboard";
  };

  const handleLogout = () => {
    
    navigate("/login");
    setShowProfileMenu(false);
  };

  return (
    <div className="app-container">
      <aside className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        
        <div className="sidebar-toggle-wrapper">
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

        <Link
          to="/dashboard"
          className={`menu-item ${location.pathname === "/dashboard" ? "active" : ""}`}
        >
          <MdDashboard className="icon" />
          {!isSidebarCollapsed && <span>Dashboard</span>}
        </Link>

        <Link
          to="/dashboard/employees"
          className={`menu-item ${location.pathname === "/dashboard/employees" ? "active" : ""}`}
        >
          <FaUsers className="icon" />
          {!isSidebarCollapsed && <span>Employees</span>}
        </Link>

        <Link
          to="/dashboard/hr-services"
          className={`menu-item ${location.pathname === "/dashboard/hr-services" ? "active" : ""}`}
        >
          <FaCog className="icon" />
          {!isSidebarCollapsed && <span>HR Services</span>}
        </Link>

        <Link
          to="/dashboard/payroll"
          className={`menu-item ${location.pathname === "/dashboard/payroll" ? "active" : ""}`}
        >
          <FaMoneyBill className="icon" />
          {!isSidebarCollapsed && <span>Payroll</span>}
        </Link>
      </aside>

      <div className="main-area">
        <header className="top-header">
          <div className="header-title">{getPageTitle()}</div>
          <div className="profile-section" onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <FaUserCircle className="profile-icon" />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <div className="dropdown-item">
                  <FaUser className="dropdown-icon" /> Profile
                </div>
                <div className="dropdown-item">
                  <FaCog className="dropdown-icon" /> Settings
                </div>
                <div className="dropdown-item" onClick={handleLogout}>
                  <FaSignOutAlt className="dropdown-icon" /> Logout
                </div>
              </div>
            )}
          </div>
        </header>

        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
