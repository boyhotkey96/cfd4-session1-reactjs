import React, { useState } from "react";

const style = {
  inputError: { color: "red", fontSize: 14 },
};

export default function Register() {
  let [form, setForm] = useState({
    username: "",
    phone: "",
    email: "",
    facebook: "",
    payment: "chuyển khoản",
    note: "",
  });
  
  let [error, setError] = useState({});

  function inputChange(e) {
    // let val = e.target.value;
    // let name = e.target.getAttribute('name');

    form[e.target.getAttribute("name")] = e.target.value;
    setForm({ ...form });

    //   let {username, phone, ...rest} = form;
    //   console.log(rest);
  }

  function submitBtnClick() {
    let error = {};
    let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexUrlFacebook = /(?:(?:http|https):\/\/)?(?:www.)?facebook.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[?\w\-]*\/)?(?:profile.php\?id=(?=\d.*))?([\w\-]*)?/;
    let regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

    if (!form.username) {
      error["username"] = "Username không được để trống";
    }
    if (!form.phone) {
      error["phone"] = "Số điện thoại không được để trống";
    } else if (!regexPhone.test(form.phone)) {
      error["phone"] = "Số điện thoại không chính xác";
    }
    if (!form.email) {
      error["email"] = "Email không được để trống";
    } else if (!regexEmail.test(form.email)) {
      error["email"] = "Email không đúng định dạng";
    }
    if (!form.facebook) {
      error["facebook"] = "Facebook không được để trống";
    } else if (!regexUrlFacebook.test(form.facebook)) {
      error["facebook"] = "Facebook không đúng định dạng";
    }

    setError(error);
    if (Object.keys(error).length === 0) {
      alert("Thành công");
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
                    value={form.username}
                  />
                </label>
                {error.username && (
                  <p className="error" style={style.inputError}>
                    {error.username}
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
                    value={form.phone}
                  />
                </label>
                {error.phone && (
                  <p className="error" style={style.inputError}>
                    {error.phone}
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
                    value={form.email}
                  />
                </label>
                {error.email && (
                  <p className="error" style={style.inputError}>
                    {error.email}
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
                    value={form.facebook}
                  />
                </label>
                {error.facebook && (
                  <p className="error" style={style.inputError}>
                    {error.facebook}
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
                    value={form.note}
                  />
                </label>
                <div className="btn main rect" onClick={submitBtnClick}>
                  đăng ký
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
