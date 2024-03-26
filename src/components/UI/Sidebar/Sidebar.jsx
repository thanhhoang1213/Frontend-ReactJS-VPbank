import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../../features/auth/authSlice";
import { toast } from "sonner";

function Sidebar() {
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

  return (
    <>
      {/* Sidebar */}
      <nav id="sidebar">
        <div className="nav flex-column">
          <NavLink to={"/admin/home"} className="nav-item option">
            <i className="fas fa-home" />
            <span>Trang Chủ</span>
          </NavLink>
          <NavLink to={"/admin/users"} className="nav-item option">
            <i className="fas fa-user" />
            <span>Cấu hình User</span>
          </NavLink>
          <NavLink to={"/admin/news"} className="nav-item option">
            <i className="fas fa-file-alt" />
            <span>Quản trị tin tức</span>
          </NavLink>
          <NavLink to={"/admin/sliders"} className="nav-item option">
            <i className="fas fa-desktop" />
            <span>Quản trị giao diện</span>
          </NavLink>
          <NavLink to={"/admin/contents"} className="nav-item option">
            <i className="fa-solid fa-gear" />
            <span>Quản trị nội dung</span>
          </NavLink>

          <button onClick={handleLogout} className="nav-item option">
            <i className="fa-solid fa-arrow-right-from-bracket" />
            <span>Đăng xuất</span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
