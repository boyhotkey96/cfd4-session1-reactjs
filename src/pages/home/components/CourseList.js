import React from "react";
import Course from "../../../components/Course";

export default function CourseList() {
  return (
    <>
      <section className="section-courseoffline">
        <div className="container">
          <p className="top-des">
            The readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <div className="textbox">
            <h2 className="main-title">Khóa học Offline</h2>
          </div>
          <div className="list row">
            <Course
              title="CFD5 React JS"
              des="Khóa học thực chiến Javascript, ES6, JSON, API và React JS, Redux."
              thumbnail="/img/img-course-advance.jpg"
              opening="sắp khải giảng"
              openingcolor="#5a46ff"
              avatar="/img/avt2.jpg"
              nameteacher="Đặng Vương"
            />
            <Course
              title="CFD5 Web Responsive"
              des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery."
              thumbnail="/img/img-course-basic.jpg"
              opening="sắp khải giảng"
              openingcolor="#5a46ff"
              avatar="/img/avt.png"
              nameteacher="Trần Nghĩa"
            />
            <Course
              title="CFD4 Web Responsive"
              des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery."
              thumbnail="/img/img-course-basic.jpg"
              opening="đang diễn ra"
              openingcolor="#f4744b"
              avatar="/img/avt.png"
              nameteacher="Trần Nghĩa"
            />
            <Course
              title="CFD4 React JS"
              des="Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS."
              thumbnail="/img/img-course-advance.jpg"
              openingcolor="#f4744b"
              opening="đang diễn ra"
              avatar="/img/avt2.jpg"
              nameteacher="Đặng Vương"
            />
            <Course
              title="CFD3 React JS"
              des="Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS."
              thumbnail="/img/img-course-advance.jpg"
              opening="đã kết thúc"
              openingcolor="#797979"
              avatar="/img/avt2.jpg"
              nameteacher="Đặng Vương"
            />
            <Course
              title="CFD3 Web Responsive"
              des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery."
              thumbnail="/img/img-course-basic.jpg"
              opening="đã kết thúc"
              openingcolor="#797979"
              avatar="/img/avt.png"
              nameteacher="Trần Nghĩa"
            />
          </div>
        </div>
      </section>
      <section className="section-courseonline section-blue">
        <div className="container">
          <div className="textbox">
            <h2 className="main-title">Khóa học Online</h2>
          </div>
          <div className="list row">
            <Course
              title="CFD4 React JS"
              des="Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS."
              thumbnail="/img/img-course-advance.jpg"
              openingcolor="#f4744b"
              opening="đang diễn ra"
              avatar="/img/avt2.jpg"
              nameteacher="Đặng Vương"
            />
            <Course
              title="CFD3 React JS"
              des="Khóa học thực chiến Javascript nâng cao, ES6, JSON, API và React JS."
              thumbnail="/img/img-course-advance.jpg"
              opening="đã kết thúc"
              openingcolor="#797979"
              avatar="/img/avt2.jpg"
              nameteacher="Đặng Vương"
            />
            <Course
              title="CFD3 Web Responsive"
              des="Khóa học thực chiến dự án gồm HTML, CSS, CSS3, SCSS, Responsive với Media Query, Boostrap 4, Grunt, JS, jQuery."
              thumbnail="/img/img-course-basic.jpg"
              opening="đã kết thúc"
              openingcolor="#797979"
              avatar="/img/avt.png"
              nameteacher="Trần Nghĩa"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}
