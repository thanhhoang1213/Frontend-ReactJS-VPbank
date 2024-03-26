import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { authActions, useAuth } from "../../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import UserRoles from "../../../constants/role.constant";

const routes = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Giới thiệu",
    path: "/gioi-thieu",
  },
  {
    name: "Q&A",
    path: "/faq",
  },
  {
    name: "Liên hệ",
    path: "/lien-he",
  },
];

function Header() {
  let { pathname } = useLocation();
  const { user } = useAuth();

  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất")) {
      navigation("/dang-nhap", { replace: true });
      localStorage.removeItem("x-client-id");
      dispatch(authActions.reset());
      toast.success("Đăng xuất thành công");
    }
  };

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("#header-section");
    const scrollUp = document.querySelector("#scrollUp");
    const scrollTop = window.scrollY;

    if (scrollTop >= 100) {
      header.classList.add("sticky");
      scrollUp.classList.add("d-block");
    } else {
      header.classList.remove("sticky");
      scrollUp.classList.remove("d-block");
    }
  };

  return (
    <>
      {/* Header Area */}
      <header className="header" id="header-section">
        {/* Header Inner */}
        <div className="header-inner">
          <div className="container">
            <div className="inner ">
              <div className="row  align-items-center">
                <div className="col-lg-3 col-md-3 col-12">
                  {/* Start Logo */}
                  <div className="logo">
                    <NavLink to="/">
                      <img src="/img/logoEDA.png" alt="#" style={{ width: "70%" }} />
                    </NavLink>
                  </div>
                  {/* End Logo */}
                  {/* Mobile Nav */}
                  <div className="mobile-nav" />
                  {/* End Mobile Nav */}
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  {/* Main Menu */}
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        {routes.map((route) => (
                          <li key={route.path} className={route.path === pathname ? "active" : ""}>
                            <NavLink to={route.path} className="nav-item">
                              {route.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  {/*/ End Main Menu */}
                </div>

                {user ? (
                  <div className="col-lg-2 col-12">
                    <div className="get-quote d-flex align-items-center gap-3">
                      <span>Xin chào, {user.displayName}</span>
                      <i
                        className="fa-solid fa-right-from-bracket"
                        style={{ cursor: "pointer" }}
                        title="Đăng xuất"
                        onClick={handleLogout}
                      ></i>
                      {user.role === UserRoles.admin ? (
                        <Link to={"/admin/home"}>
                          <i
                            style={{ cursor: "pointer" }}
                            title="Quản trị"
                            className="fa-solid fa-screwdriver-wrench"
                          ></i>
                        </Link>
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div className="col-lg-2 col-12">
                    <div className="get-quote d-flex flex-column gap-3">
                      <Link to="/dang-nhap" className="btn btn-sm">
                        Đăng nhập
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/*/ End Header Inner */}
      </header>
      {/* End Header Area */}
    </>
  );
}

export default Header;
