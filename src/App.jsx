import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLayout from "./components/Layouts/AdminLayout";
import MainLayout from "./components/Layouts/MainLayout";
import PrivateRoute from "./components/PrivateRoute";
import Loading from "./components/UI/Loading";
import { useAuth } from "./features/auth/authSlice";
import { fetchGetCurrentUser } from "./features/auth/authThunk";
import AddEditContent from "./pages/Admin/ContentAdmin/AddEditContent";
import ContentAdmin from "./pages/Admin/ContentAdmin/ContentAdmin";
import HomeAdmin from "./pages/Admin/HomeAdmin";
import AddEditNews from "./pages/Admin/NewsAdmin/AddEditNews";
import NewsAdmin from "./pages/Admin/NewsAdmin/NewsAdmin";
import AddEditSlider from "./pages/Admin/SliderAdmin/AddEditSlider";
import SliderAdmin from "./pages/Admin/SliderAdmin/SliderAdmin";
import EditUser from "./pages/Admin/UserAdmin/EditUser";
import UserAdmin from "./pages/Admin/UserAdmin/UserAdmin";
import CategoryDetailsPage from "./pages/CategoryDetailsPage";
import CoCauToChucPage from "./pages/CoCauToChucPage/CoCauToChucPage";
import FaqPage from "./pages/FaqPage";
import GioiThieuPage from "./pages/GioiThieuPage";
import HomePage from "./pages/HomePage";
import LienHePage from "./pages/LienHePage";
import LogInPage from "./pages/LogInPage";
import RegisterPage from "./pages/RegisterPage";
import ContentPartPage from "./pages/ContentPartPage/ContentPartPage";

function App() {
  const { userId } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return;
    dispatch(fetchGetCurrentUser());
  }, [userId]);

  return (
    <BrowserRouter>
      <Loading />

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="faq" element={<FaqPage />} />

          <Route path="/:slug" element={<CategoryDetailsPage />} />

          <Route path="/co-cau-to-chuc" element={<CoCauToChucPage />} />

          <Route path="gioi-thieu" element={<GioiThieuPage />} />
          <Route path="lien-he" element={<LienHePage />} />
          <Route path="/contentId/:contentId/part/:partNumber" element={<ContentPartPage />} />
        </Route>

        <Route
          path="admin"
          element={
            <PrivateRoute>
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route path="home" element={<HomeAdmin />} />

          <Route path="contents" element={<ContentAdmin />} />
          <Route path="contents/add" element={<AddEditContent />} />
          <Route path="contents/update/:id" element={<AddEditContent />} />

          <Route path="sliders" element={<SliderAdmin />} />
          <Route path="sliders/add" element={<AddEditSlider />} />
          <Route path="sliders/update/:id" element={<AddEditSlider />} />

          <Route path="users" element={<UserAdmin />} />
          <Route path="users/update/:id" element={<EditUser />} />

          <Route path="news" element={<NewsAdmin />} />
          <Route path="news/add" element={<AddEditNews />} />
          <Route path="news/update/:id" element={<AddEditNews />} />
        </Route>

        <Route path="dang-nhap" element={<LogInPage />} />
        <Route path="dang-ky" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
