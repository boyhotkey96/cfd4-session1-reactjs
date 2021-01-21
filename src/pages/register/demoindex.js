import React, { useState, useEffect, useReducer } from "react";
import { CircularProgress } from "@material-ui/core";

const style = {
  inputError: { color: "red", fontSize: 14 },
};

function Reducer(state, action) {
  console.log("reducer:", state);
  switch (action.type) {
    case "FORM_INPUT_CHANGE":
      return {
        ...state,
        form: action.form,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.loading,
      };
    case "ERROR":
      return {
        ...state,
        error: action.error,
      };
  }
  return state;
}

export default function Register() {
  //   let [loading, setLoading] = useState(false);

  //   let [form, setForm] = useState({
  //     username: "",
  //     phone: "",
  //     email: "",
  //     facebook: "",
  //     payment: "chuyển khoản",
  //     note: "",
  //   });

  let [state, dispatch] = useReducer(Reducer, {
    loading: false,
    form: {
      username: "",
      phone: "",
      email: "",
      facebook: "",
      payment: "chuyển khoản",
      note: "",
    },
    error: {},
  });

  //   useEffect(() => {
  //     function windowClick() {
  //     //   console.log("window click form", state.form);
  //     }
  //     window.addEventListener("click", windowClick);
  //     return () => {
  //       console.log("window click destroy");
  //       window.removeEventListener("click", windowClick);
  //     };
  //   }, [state.form]);

  //   let [error, setError] = useState({});

  function inputChange(e) {
    // let val = e.target.value;
    // let name = e.target.getAttribute('name');

    // state.form[e.target.getAttribute("name")] = e.target.value;
    // state.setForm({ ...state.form });

    dispatch({
      type: "FORM_INPUT_CHANGE",
      form: {
        ...state.form,
        [e.target.getAttribute("name")]: e.target.value,
      },
    });

    //   let {username, phone, ...rest} = form;
    //   console.log(rest);
  }

  function submitBtnClick() {
    if (state.loading) {
      alert("Bạn không thể gửi liên tục");
      return;
    }
    let errors = {};
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexUrlFacebook = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
    let regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    if (!state.form.username) {
      errors["username"] = "Username không được để trống";
    }
    if (!state.form.phone) {
      errors["phone"] = "Số điện thoại không được để trống";
    } else if (!regexPhone.test(state.form.phone)) {
      errors["phone"] = "Số điện thoại không chính xác";
    }
    if (!state.form.email) {
      errors["email"] = "Email không được để trống";
    } else if (!regexEmail.test(state.form.email)) {
      errors["email"] = "Email không đúng định dạng";
    }
    if (!state.form.facebook) {
      errors["facebook"] = "Facebook không được để trống";
    } else if (!regexUrlFacebook.test(state.form.facebook)) {
      errors["facebook"] = "Facebook không đúng định dạng";
    }

    // state.setError(state.error);
    dispatch({ type: "ERROR", error: errors });

    if (Object.keys(errors).length === 0) {
      //   state.setLoading(true);
      dispatch({ type: "LOADING", loading: true });
      setTimeout(() => {
        // state.setLoading(false);
        dispatch({ type: "LOADING", loading: false });
        alert("Đăng ký thành công");
      }, 1000);
    }
  }

  return (
    <>
      <main className="register-course" id="main">
        <section>
          <div className="container">
            <div className="wrap container">
              <div className="main-sub-title">ĐĂNG KÝ</div>
              <h1 className="main-title">Thực chiến front-end căn bản </h1>
              <div className="main-info">
                <div className="date">
                  <strong>Khai giảng:</strong> 15/11/2020
                </div>
                <div className="time">
                  <strong>Thời lượng:</strong> 18 buổi
                </div>
                <div className="time">
                  <strong>Học phí:</strong> 6.000.000 VND
                </div>
              </div>
              <div className="form">
                <label>
                  <p>
                    Họ và tên<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Họ và tên bạn"
                    onChange={inputChange}
                    name="username"
                    value={state.form.username}
                  />
                </label>
                {state.error.username && (
                  <p className="error" style={style.inputError}>
                    {state.error.username}
                  </p>
                )}
                <label>
                  <p>
                    Số điện thoại<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Số điện thoại"
                    onChange={inputChange}
                    name="phone"
                    value={state.form.phone}
                  />
                </label>
                {state.error.phone && (
                  <p className="error" style={style.inputError}>
                    {state.error.phone}
                  </p>
                )}
                <label>
                  <p>
                    Email<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Email của bạn"
                    onChange={inputChange}
                    name="email"
                    value={state.form.email}
                  />
                </label>
                {state.error.email && (
                  <p className="error" style={style.inputError}>
                    {state.error.email}
                  </p>
                )}
                <label>
                  <p>
                    URL Facebook<span>*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="https://facebook.com"
                    name="facebook"
                    onChange={inputChange}
                    value={state.form.facebook}
                  />
                </label>
                {state.error.facebook && (
                  <p className="error" style={style.inputError}>
                    {state.error.facebook}
                  </p>
                )}
                <label className="disable">
                  <p>Sử dụng COIN</p>
                  <div className="checkcontainer">
                    Hiện có <strong>300 COIN</strong>
                    {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                    {/* Cần ít nhất 200 COIN để giảm giá */}
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </div>
                </label>
                <label>
                  <p>Hình thức thanh toán</p>
                  <div className="select">
                    <div className="head">Chuyển khoản</div>
                    <div className="sub">
                      <a href="#">Chuyển khoản</a>
                      <a href="#">Thanh toán tiền mặt</a>
                    </div>
                  </div>
                </label>
                <label>
                  <p>Ý kiến cá nhân</p>
                  <input
                    type="text"
                    placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                    onChange={inputChange}
                    name="note"
                    value={state.form.note}
                  />
                </label>
                <div className="btn main rect" onClick={submitBtnClick}>
                  đăng ký
                  {state.loading && (
                    <CircularProgress size={20} style={{ marginLeft: 20 }} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <div class="register-success">
            <div class="contain">
                <div class="main-title">đăng ký thành công</div>
                <p>
                    <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
                    Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
                    hoặc số điện thoại của bạn.
                </p>
            </div>
            <a href="/" class="btn main rect">về trang chủ</a>
        </div> */}
      </main>
    </>
  );
}
