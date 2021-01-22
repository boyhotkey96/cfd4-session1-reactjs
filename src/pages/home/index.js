import React from "react";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Special from "./components/Special";
import Review from "./components/Review";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import PopupLogin from "../../components/PopupLogin";

export default function Home(/*props*/) {
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList />
      <Special />
      <Review />
      <Gallery />
      <Form /*transmitOpenPopupLogin={props.transmitOpenPopupLogin}*/ />
      <PopupLogin />
    </main>
  );
}
