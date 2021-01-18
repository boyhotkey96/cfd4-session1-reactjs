import React from "react";
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
        <main>
            <Banner />
            <CourseList />
            <Special />
            <Review />
            <Gallery />
            <Form />
        </main>
        <PopupLogin />
    </>
  );
}