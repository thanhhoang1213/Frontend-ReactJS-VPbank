import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useContent } from "../../features/content/contentSlice";
import { fetchContents } from "../../features/content/contentThunk";
import { useNews } from "../../features/news/newsSlice";
import { fetchNews } from "../../features/news/newsThunk";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const { data } = useContent();
  const { data: news } = useNews();

  useEffect(() => {
    dispatch(fetchContents());
    dispatch(fetchNews());
  }, []);

  return (
    <main>
      {/* End Header Area */}
      <section className="schedule">
        <div className="container">
          <div className="schedule-inner">
            <div style={{ marginTop: 300 }} className="row">
              {data.length
                ? data.map((t) => (
                    <div key={t.id} className="mt-4 col-lg-3 col-md-6 col-12">
                      {/* single-schedule */}
                      <div className="single-schedule first">
                        <div className="inner">
                          <div className="icon">
                            <i className="icofont-prescription" />
                          </div>
                          <div className="single-content" id="moreDetails">
                            <span />
                            <Link to={`/${t.slug}`}>
                              <h4>{t.categoryName}</h4>
                            </Link>
                            <p>{t.summarizeContent}</p>
                            <Link to={`/${t.slug}`}>
                              LEARN MORE
                              <i className="fa fa-long-arrow-right" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </section>
      <ul class="pro-features">


</ul>
      {/*/End Start schedule Area */}
  


      {/* Start Why choose */}
      <section className="why-choose section" style={{ marginTop: "-50px" }}></section>
      {/*/ End Why choose */}
      {/* Start tool section */}
      <section style={{}} className="blog section" id="tool">
        <div className="section-title">
          <h2>Công cụ và liên kết hỗ trợ dữ liệu</h2>
        </div>
        <div className="container">
          <div style={{ marginTop: "-30px" }} className="row" id="ToolList"></div>
        </div>
      </section>
      {/* End tool section */}

      {/* Start Blog section */}
      <section style={{ marginTop: "-10px" }} className="blog section" id="blog">
        {/*  <div className="section-title" >*/}
        {/*    <h2>Các hoạt động nổi bật</h2>*/}
        {/*  </div>*/}

        <div className="container">
          <div className="row" id="blogList">
            <div className="col-lg-3 col-md-6 col-12"></div>
            <Swiper
              spaceBetween={10}
              slidesPerView={4}
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              // loop={true}
              // autoplay={{
              //   delay: 1000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              navigation
              modules={[Autoplay, Pagination, Navigation]}
            >
              {news.length
                ? news.map((t) => (
                    <SwiperSlide key={t.id}>
                      <div className="single-news">
                        <Link to={t.link} className="news-head">
                          <img src={t.image} alt="#" />
                        </Link>
                        <div className="news-body">
                          <div className="news-content">
                            {/* <div className="date">
                            <a href="#">{t.title}</a>
                          </div> */}

                            <h2>
                              <Link to={t.link}>{t.title}</Link>
                            </h2>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
          </div>
        </div>
      </section>
      {/* End Blog section */}
    </main>
  );
}
<ul class="pro-features">

<a class="get-pro" href="#">Đi đến</a>

<div class="button">

               <a href="#" target="_blank" class="btn">Danh mục dịch vụ</a>

               <a href="#" target="_blank" class="btn">Truy vấn Báo cáo</a>

               <a href="#" target="_blank" class="btn">Từ điển dữ liệu</a>

</div>

</ul>

export default HomePage;
