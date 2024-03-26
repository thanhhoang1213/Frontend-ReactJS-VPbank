import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { fetchSignUp } from "../../features/auth/authThunk";
import "../LogInPage/LogInPage.css";
import InputPassword from "../../components/UI/InputPassword/InputPassword";

function RegisterPage() {
  const [state, setState] = useState({
    username: "",
    password: "",
    displayName: "",
  });
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleSubmit = () => {
    if (!state.username || !state.password || !state.displayName) {
      toast.error("Vui lòng điền tất cả trường");
      return;
    }

    dispatch(fetchSignUp(state)).then((t) => {
      if (t?.payload?.metadata) {
        navigation("/dang-nhap");
      }
    });
  };

  const handleChange = (event) => {
    const {
      target: { value, name },
    } = event;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main
      className="login-main"
      style={{
        background: "#b2b2b2",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <div
        className="img js-fullheight"
        style={{ backgroundImage: 'url("img/pasted image 0.jpg")' }}
      >
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">Đăng ký tài khoản</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h3 className="mb-4 text-center">Đăng ký tài khoản của bạn</h3>
                  <form className="signin-form">
                    <div className="form-group">
                      <input
                        id="registerUsername"
                        type="text"
                        className="form-control"
                        placeholder="Tên dăng nhập"
                        required=""
                        name="username"
                        autoComplete="off"
                        value={state.username}
                        onChange={handleChange}
                      />
                    </div>

                    <InputPassword
                      name="password"
                      placeholder="Mật khẩu"
                      value={state.password}
                      onChange={handleChange}
                    />

                    <div className="form-group">
                      <input
                        id="registerPassword-2"
                        type="text"
                        className="form-control"
                        placeholder="Tên hiển thị"
                        required=""
                        name="displayName"
                        autoComplete="off"
                        value={state.displayName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        onClick={handleSubmit}
                        type="button"
                        className="form-control btn btn-primary login-page submit px-3"
                      >
                        Đăng ký
                      </button>
                    </div>
                    <div className="mb-4 text-center">
                      <Link to="/dang-nhap" className="redirect">
                        {" "}
                        Đăng nhập
                      </Link>
                    </div>
                    <div className="mb-4 text-center">
                      <Link to="/" className="redirect">
                        Trang chủ
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RegisterPage;
