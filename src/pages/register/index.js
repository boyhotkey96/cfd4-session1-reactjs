import React, { useState } from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";

export default function Register() {
   let [form, setForm] = useState({
      username: '',
      phone: '',
      email: '',
      facebook: '',
      payment: 'chuyển khoản',
      note: ''
   });

   function inputChange(e) {
      // let val = e.target.value;
      // let name = e.target.getAttribute('name');

      form[e.target.getAttribute('name')] = e.target.value;
      setForm({...form});

      let {username, phone, ...rest} = form;
      console.log(rest);
   }
   
   function btnSubmit() {
      
   }

   return (
      <>
         <Header />
         <main>
         <section className="section register">
            <div className="container">
               <div className="course">
                  <h2 className="title">đăng ký</h2>
                  <h2 className="type">thực chiến front-end căn bản </h2>
               </div>
               <div className="register__wrap">
                  <form action="/" method="POST" className="register__form">
                        <div className="field">
                           <label>Họ và Tên<span>*</span></label>
                           <input type="text" name="username" placeholder="Họ và tên bạn" onChange={inputChange} value={form.username} />
                        </div>
                        <div className="field">
                           <label>Số điện thoại<span>*</span></label>
                           <input type="text" name="phone" placeholder="Số điện thoại" onChange={inputChange} value={form.phone} />
                        </div>
                        <div className="field">
                           <label>Email<span>*</span></label>
                           <input type="text" name="email" placeholder="Email của bạn" onChange={inputChange} value={form.email} />
                        </div>
                        <div className="field">
                           <label>URL Facebook<span>*</span></label>
                           <input type="text" name="facebook" placeholder="https://facebook.com" onChange={inputChange} value={form.facebook} />
                        </div>
                        <div className="field">
                           <label>Hình thức thanh toán</label>
                           <input type="text" name="payment" placeholder="Chuyển khoản" onChange={inputChange} value={form.payment} />
                        </div>
                        <div className="field">
                           <label>Ý kiến cá nhân</label>
                           <input type="text" name="note" placeholder="Định hướng và mong muốn của bạn" onChange={inputChange} value={form.note} />
                        </div>
                        <div className="btn-register btn-save" style={{backgroundColor:"#00afab"}} onClick={btnSubmit}>ĐĂNG KÝ</div>
                  </form>
               </div>
            </div>
         </section>
         </main>
         <Footer />
      </>
   );
}
