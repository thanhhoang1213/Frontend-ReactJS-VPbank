import React from "react";
import "./LienHePage.css";

function LienHePage() {
  return (
    <main>
      <>
        <section style={{ marginTop: 140 }}>
          <div className="container mt-5">
            <div className="card">
              <div className="card-header text-center" style={{ marginBottom: "-50px" }}>
                <h1 style={{ color: "#68bd2f", marginBottom: "50px" }}>Liên hệ </h1>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Khối:</strong> Khối quản trị nguồn nhân lực
                  </li>
                  <li className="list-group-item">
                    <strong>Dịch vụ:</strong> Dịch vụ nhân sự chung
                  </li>
                  <li className="list-group-item">
                    <strong>Trang chủ:</strong>{" "}
                    <a style={{ color: "#2f60bd" }} href="bicc.vpbank.com.vn">
                      bicc.vpbank.com.vn
                    </a>
                  </li>
                  <li className="list-group-item">
                    <strong>Địa chỉ:</strong> Địa chỉ
                  </li>
                  <li className="list-group-item">
                    <strong>Điện thoại:</strong> SĐT
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="contact-us section intro">
          <div className="container">
            <div className="contact-info">
              <div className="row">
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont icofont-ui-call" />
                    <div className="content">
                      <h3 className="underline-on-hover-2">+(000) 1234 56789</h3>
                      <p>bicc.vpabnk.com.vn</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
                {/* single-info */}
                <div className="col-lg-4 col-12">
                  <div className="single-info">
                    <a href="https://www.google.com/maps/place/VPBANK+H%E1%BB%98I+S%E1%BB%9E/@21.0161643,105.815055,17z/data=!3m1!4b1!4m6!3m5!1s0x3135ab623c8c1d2f:0xb1bdd08ddacbcd46!8m2!3d21.0161643!4d105.815055!16s%2Fg%2F1pzs2s621?entry=ttu">
                      <i className="icofont-google-map" />
                      <div className="content">
                        <h3 className="underline-on-hover-2">Hội sở VPBank</h3>
                        <p>89 P.Láng Hạ, Láng Hạ, Đống Đa, Hà Nội</p>
                      </div>
                    </a>
                  </div>
                </div>
                {/*/End single-info */}
                {/* single-info */}
                <div className="col-lg-4 col-12 ">
                  <div className="single-info">
                    <i className="icofont icofont-wall-clock" />
                    <div className="content">
                      <h3 className="underline-on-hover-2">Mon - Sat: 8am - 6pm</h3>
                      <p>Sunday Closed</p>
                    </div>
                  </div>
                </div>
                {/*/End single-info */}
              </div>
            </div>
          </div>
        </section>
      </>
    </main>
  );
}

export default LienHePage;
