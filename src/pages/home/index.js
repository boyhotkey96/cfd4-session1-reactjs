import React from "react";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer.js";
import Banner from "./components/Banner.js";
import CourseList from "./components/CourseList.js";
import Special from "./components/Special.js";
import Review from "./components/Review.js";
import Gallery from "./components/Gallery.js";
import Form from "./components/Form.js";
import PopupLogin from "../../components/PopupLogin.js";

export default function Home() {
  return (
    <>
      <Header />
      <div className="overlay_nav" />
      <main>
        <Banner />
        <CourseList />
        <Special />
        <Review />
        <Gallery />
        <Form />
      </main>
      <Footer />
      <PopupLogin />
    </>
  );
}
