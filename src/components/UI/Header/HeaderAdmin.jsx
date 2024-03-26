import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeaderAdmin() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <div
        id="header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
        }}
      >
        <div className="logo">
          <Link style={{ position: "fixed", marginTop: "-25px" }} to="/admin/home">
            <img src="/img/logoEDA.png" alt="#" style={{ width: "50%" }} />
          </Link>
        </div>
        <div>
          <div>
            {/* Menu icon for the dropdown menu */}
            <div className="dropdown">
              <button
                className="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() => setOpen((prev) => !prev)}
              >
                <i className="fa-solid fa-bars" />
              </button>
              <div
                className={`dropdown-menu dropdown-menu-right ${open ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/">
                  Trang chủ web
                </Link>
                <Link className="dropdown-item" to="/gioi-thieu">
                  Giới thiệu
                </Link>
                <Link className="dropdown-item" to="/faq">
                  Q&amp;A
                </Link>
                <Link className="dropdown-item" to="/lien-he">
                  Liên hệ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderAdmin;
