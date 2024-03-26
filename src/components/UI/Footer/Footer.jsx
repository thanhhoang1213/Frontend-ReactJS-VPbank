import React from "react";

function Footer() {
  return (
    <>
      {/* Footer Area */}
      <footer id="footer" className="footer">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container" style={{ marginTop: 30, marginBottom: "-20px" }}>
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer">
                  <a href="login.html">
                    <h2 className="underline-on-hover-2" style={{ marginBottom: 20 }}>
                      Đổi mật khẩu
                    </h2>
                  </a>
                  <a href="login.html">
                    <h2 className="underline-on-hover-2" style={{ marginBottom: 20 }}>
                      EDA Hackathon
                    </h2>
                  </a>
                  {/*            <a href="login.html">*/}
                  {/*              <p>Thay đổi mật khẩu đăng nhập</p>*/}
                  {/*            </a>*/}
                  {/* Social */}
                  <a href="login.html">
                    <h2 className="underline-on-hover-2">EDA Confluence</h2>
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-footer f-link">
                  <a href="login.html">
                    <h2 className="underline-on-hover-2" style={{ marginBottom: 20 }}>
                      Portal IT
                    </h2>
                  </a>
                  <a href="login.html">
                    <h2 className="underline-on-hover-2">Portal SME</h2>
                  </a>
                  {/*            <ul>*/}
                  {/*              <li>*/}
                  {/*                <a href="login.html"*/}
                  {/*                ><i class="fa fa-caret-right" aria-hidden="true"></i>EDA Confluence</a*/}
                  {/*                >*/}
                  {/*              </li>*/}
                  {/*              <li>*/}
                  {/*                <a href="login.html"*/}
                  {/*                ><i class="fa fa-caret-right" aria-hidden="true"></i>Dành cho cán bộ nhân viên mới</a*/}
                  {/*                >*/}
                  {/*              </li>*/}
                  {/*            </ul>*/}
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer" style={{ marginLeft: "-60px" }}>
                  <a href="login.html">
                    <h2 className="underline-on-hover-2" style={{ marginBottom: 20 }}>
                      Portal Fin
                    </h2>
                  </a>
                  <a href="login.html">
                    <h2 className="underline-on-hover-2">Dành cho cán bộ nhân viên mới</h2>
                  </a>
                  {/*            <a href="login.html">*/}
                  {/*              <p>My Performance</p>*/}
                  {/*            </a>*/}
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer">
                  <a href="login.html">
                    <h2 className="underline-on-hover-2" style={{ marginBottom: 20 }}>
                      E-Office
                    </h2>
                  </a>
                  <a href="login.html">
                    <h2 className="underline-on-hover-2">E-Learning</h2>
                  </a>
                  {/*            <a href="login.html">*/}
                  {/*              <p>E-Office</p>*/}
                  {/*            </a>*/}
                  {/*            <a href="login.html">*/}
                  {/*              <p>E-Learning</p>*/}
                  {/*            </a>*/}
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                <div className="single-footer">
                  <a href="login.html">
                    <h2 className="underline-on-hover-2" style={{ marginBottom: 20 }}>
                      MyPerformance
                    </h2>
                  </a>
                  <a href="login.html">
                    <h2 className="underline-on-hover-2" style={{ marginBottom: 20 }}>
                      Các form tra soát chương trình thanh toán
                    </h2>
                  </a>
                  {/*            <a href="login.html">*/}
                  {/*              <p>Các form tra soát chương trình thanh toán</p>*/}
                  {/*            </a>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Footer Top */}
        {/* Copyright */}
        <div className="copyright">
          <div className="container" style={{ marginBottom: "-5px" }}>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-12">
                <div className="copyright-content">
                  <p>
                    © Copyright 2024 | Khối quản trị và phân tích dữ liệu
                    <a href="https://bicc.vpbank.com.vn" target="_blank" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Copyright */}
      </footer>
      {/*/ End Footer Area */}

      <a
        id="scrollUp"
        className="d-none"
        href="#top"
        style={{ position: "fixed", zIndex: 2147483647 }}
      >
        <span>
          <i class="fa fa-angle-up"></i>
        </span>
      </a>
    </>
  );
}

export default Footer;
