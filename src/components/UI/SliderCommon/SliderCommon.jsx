import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSlider } from "../../../features/slider/sliderSlice";
import { fetchSliders } from "../../../features/slider/sliderThunk";

function SliderCommon() {
  const dispatch = useDispatch();
  const { data } = useSlider();

  useEffect(() => {
    dispatch(fetchSliders());
  }, []);

  return (
    <>
      <section className="slider">
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
            {data.length
              ? data.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    className="single-slider"
                    id="slider1"
                    style={{ backgroundImage: `url("${item.image}")` }}
                  >
                    {/* Start Single Slider */}
                    {/* <div> */}
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-7">
                          <div className="text">
                            <h1>
                              We Provide <span>Data Services</span> That You Can <span>Trust!</span>
                            </h1>
                            <p>
                              {item.text1 ||
                                `Drive enterprise data architecture, build strong foundation and
                              structured data systems for leveraging trusted data in driving
                              business outcomes`}
                            </p>
                            <p>
                              {item.text2 ||
                                `Thúc đẩy kiến trúc dữ liệu doanh nghiệp, xây dựng nền tảng vững chắc
                              và hệ thống dữ liệu có cấu trúc để tận dụng dữ liệu đáng tin cậy nhằm
                              thúc đẩy kết quả kinh doanh`}
                            </p>
                            <div className="button">
                              <Link to="/" className="btn">
                                Khám phá ngay
                              </Link>
                              <Link to="/lien-he" className="btn">
                                Liên hệ với chúng tôi
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}

                    {/* End Single Slider */}
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default SliderCommon;
