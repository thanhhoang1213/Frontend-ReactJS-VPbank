import React from "react";
import "./GioiThieuPage.css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

function GioiThieuPage() {
  return (
    <main>
      <section style={{ marginTop: 140 }} className="pf-details section intro">
        <div className="container">
          <div className="row">
            {/* Text Container */}
            <div className="col-lg-6 col-md-6 col-12">
              <div className="inner-content">
                <div className="body-text-container">
                  <div className="">
                    <h3 style={{ color: "#02B84D" }}>CỔNG THÔNG TIN KHỐI EDA</h3>
                    <p>
                      Cổng thông tin khối EDA VPBank là một hệ thống hiện đại và tích hợp của Ngân
                      hàng TMCP Việt Nam Thịnh Vượng (VPBank), được thiết kế để cung cấp một trải
                      nghiệm tài chính toàn diện và thuận tiện cho khách hàng doanh nghiệp. Khối
                      EDA, viết tắt của "Electronic Data Interchange and Automation" (Truyền thông
                      và Tự động hóa Dữ liệu Điện tử), là một phần quan trọng trong chiến lược số
                      hóa của VPBank, nhằm hỗ trợ doanh nghiệp trong quá trình quản lý tài chính và
                      giao dịch ngân hàng một cách thông minh và linh hoạt.
                    </p>
                    <br />
                    <p>
                      Điểm mạnh của Cổng thông tin khối EDA VPBank nằm ở sự linh hoạt và tính tương
                      tác cao, giúp doanh nghiệp dễ dàng thực hiện các giao dịch ngân hàng, quản lý
                      tài chính, và theo dõi hoạt động tài chính hàng ngày. Hệ thống này cung cấp
                      các dịch vụ đa dạng như chuyển khoản, thanh toán, và quản lý tài khoản một
                      cách thuận tiện và an toàn.
                    </p>
                    <br />
                    <p>
                      Khách hàng sử dụng Cổng thông tin khối EDA VPBank không chỉ trải nghiệm sự
                      thuận tiện về thời gian và chi phí mà còn hưởng lợi từ các tính năng an toàn
                      và bảo mật cao cấp, đảm bảo an ninh cho mọi giao dịch tài chính trực tuyến.
                      Cùng với đó, dịch vụ khách hàng chuyên nghiệp và đội ngũ hỗ trợ kỹ thuật dày
                      dặn kinh nghiệm đều làm nổi bật Cổng thông tin khối EDA VPBank như một đối tác
                      đáng tin cậy cho sự phát triển và quản lý tài chính của doanh nghiệp.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Slider Container */}
            <div className="col-lg-6 col-md-6 col-12" style={{ paddingTop: 120 }}>
              <div className="image-slider-container">
                <section className="slider" style={{}}>
                  <div className="hero-slider">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                      loop={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation
                      modules={[Autoplay, Pagination, Navigation]}
                    >
                      {/* Start Single Slider */}
                      <SwiperSlide
                        className="single-slider"
                        style={{
                          maxHeight: 400,
                          backgroundImage: 'url("img/slider5.jpg")',
                        }}
                      ></SwiperSlide>
                      {/* End Single Slider */}
                      {/* Start Single Slider */}
                      <SwiperSlide
                        className="single-slider"
                        style={{
                          maxHeight: 400,
                          backgroundImage: 'url("img/slider4.jpg")',
                        }}
                      ></SwiperSlide>
                      {/* Start End Slider */}
                      {/* Start Single Slider */}
                      <SwiperSlide
                        className="single-slider"
                        style={{
                          maxHeight: 400,
                          backgroundImage: 'url("img/slider.jpg")',
                        }}
                      ></SwiperSlide>
                    </Swiper>
                  </div>
                </section>
              </div>
            </div>

            <>
              {/* End Portfolio Details Area */}
              <section className="why-choose section">
                <div className="container">
                  <div className="section-title">
                    <Link to="/co-cau-to-chuc">
                      <h1 className="underline-on-hover-2" style={{ color: "#02B84D" }}>
                        Cơ Cấu Tổ Chức Và Nhân Sự
                      </h1>
                    </Link>
                  </div>
                  <img src="./img/sodo.png" alt="#" />
                </div>
              </section>
            </>
          </div>
        </div>
      </section>
    </main>
  );
}

export default GioiThieuPage;
