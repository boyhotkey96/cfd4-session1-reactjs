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
              title="Front-end căn bản"
              des="One of the best corporate fashion brands in Sydney"
              thumbnail="/img/img-1.jpg"
            />
            <Course
              title="Reactjs"
              des="One of the best corporate fashion brands in Sydney"
              thumbnail="/img/img-2.jpg"
            />
            <Course
              title="PHP"
              des="One of the best corporate fashion brands in Sydney"
              thumbnail="/img/img-3.jpg"
            />
            <Course
              title="Nodejs"
              des="One of the best corporate fashion brands in Sydney"
              thumbnail="/img/img-4.jpg"
            />
            <Course
              title="React Native"
              des="One of the best corporate fashion brands in Sydney"
              thumbnail="/img/img-5.jpg"
            />
            <Course
               title="Java"
               des="One of the best corporate fashion brands in Sydney"
               thumbnail="/img/img-6.jpg"
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
              name="Animation"
              description="One of the best corporate fashion brands in Sydney"
              thumbnail="/img/img1.png"
            />
            <Course
              name="Reactjs"
              description="ABC"
              thumbnail="/img/img2.png"
            />
            <Course
              name="Căn bản"
              description="XZY"
              thumbnail="/img/img3.png"
            />
          </div>
          <div className="text-deco">C</div>
        </div>
      </section>
    </>
  );
}
