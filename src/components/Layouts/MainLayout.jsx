import { Outlet } from "react-router-dom";
import Header from "../UI/Header";
import Footer from "../UI/Footer";
import SliderCommon from "../UI/SliderCommon";

function MainLayout() {
  return (
    <>
      <Header />

      <SliderCommon />

      <Outlet />

      <Footer />
    </>
  );
}

export default MainLayout;
