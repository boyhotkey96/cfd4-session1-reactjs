import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import useFormValidate from "../../../hook/formValidate";

export default function Info() {
  let [loading, setLoading] = useState(false);
  let { form, error, inputChange, submit } = useFormValidate(
    {
      username: "",
      phone: "",
      email: "",
      facebook: "",
      payment: "chuyển khoản",
      note: "",
    },
    {
      rule: {
        username: {
          required: true,
        },
        phone: {
          pattern: "phone", 
          required: true,
        },
        email: {
          pattern: "email",
          required: true,
        },
        facebook: {
          pattern: "url",
          required: true,
        },
        skype: {
          required: true,
        },
      },
      //   message: {
      //     username: {
      //       required: "Họ và tên không được để trống",
      //     },
      //   phone: {
      //     pattern: "Số điện thoại không đúng định dạng",
      //   },
      //   email: {
      //     pattern: "Email không đúng định dạng",
      //   },
      //   facebook: {
      //     pattern: "Facebook url không đúng định dạng",
      //   },
      //   skype: {
      //     required: "Skype không được để trống",
      //   },
      // },
    }
  );

  function btnSubmit() {
    let error = submit();
    console.log(error);
    if (Object.keys(error).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        alert("Đăng ký thành công");
      }, 1000);
    }
  }

  return (
    <div className="tab1">
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Nguyễn Văn A"
          name="username"
          onChange={inputChange}
          value={form.username}
        />
        {error.username && <p className="error-text">{error.username}</p>}
      </label>
      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input
          type="text"
          placeholder="0949******"
          name="phone"
          onChange={inputChange}
          value={form.phone}
        />
        {error.phone && <p className="error-text">{error.phone}</p>}
      </label>
      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          defaultValue="vuong.dang@dna.vn"
          type="text"
          name="email"
          onChange={inputChange}
          value={form.email}
        />
        {error.email && <p className="error-text">{error.email}</p>}
      </label>
      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Facebook url"
          name="facebook"
          onChange={inputChange}
          value={form.facebook}
        />
        {error.facebook && <p className="error-text">{error.facebook}</p>}
      </label>
      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input
          type="text"
          placeholder="Skype url"
          name="skype"
          onChange={inputChange}
          value={form.skype}
        />
        {error.skype && <p className="error-text">{error.skype}</p>}
      </label>
      <div className="btn main rect" onClick={btnSubmit}>
        LƯU LẠI{" "}
        {loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}
      </div>
    </div>
  );
}
