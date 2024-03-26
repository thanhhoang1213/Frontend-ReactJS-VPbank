import React from "react";
import { Outlet } from "react-router-dom";
import HeaderAdmin from "../UI/Header/HeaderAdmin";
import Sidebar from "../UI/Sidebar/Sidebar";
import "./admin.css";

function AdminLayout() {
  return (
    <>
      <HeaderAdmin />

      <Sidebar />

      {/* Main Content */}
      <main role="main" className=" main-admin" id="content">
        <div className="search-bar">
          <input type="text" className="form-control" id="searchInput" placeholder="Tìm kiếm..." />
        </div>
        <div className="main-content">
          {/* main content goes here */}
          <div id="admConfiguration">
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminLayout;
