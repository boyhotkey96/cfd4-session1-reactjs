import React, { useState, useEffect } from "react";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Special from "./components/Special";
import Review from "./components/Review";
import Gallery from "./components/Gallery";
import Form from "./components/Form";
import PopupLogin from "../../components/PopupLogin";
import LoadingApi from "../../core/LoadingApi";

export default function Home(/*props*/) {
  let [state, setState] = useState();
  // let [review, setReview] = useState();
  // let [gallery, setGallery] = useState();

  useEffect(async () => {
    let res = await fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home");
    res = await res.json();
    // console.log(res);
    setState(res);
  }, []);

  useEffect(() => {
    //   Promise.all([
    //     fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home"),
    //     fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home"),
    //     fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home"),
    //   ]).then(async ([resState, resReview, resGallery]) => {
    //     resState = await resState.json();
    //     resReview = await resReview.json();
    //     resGallery = await resGallery.json();
    //     setState(resState);
    // });
    //   console.log("resState: ", resState);
    //   console.log("resReview: ", resReview);
    //   console.log("resGallery: ", resGallery);
    // });
    // fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res);
    //     setCourse(res);
    //   });
    // fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setReview(res);
    //   });
    // fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setGallery(res);
    //   });
  }, []);
  console.log("render");

  if (!state) {
    return <LoadingApi />;
  }
  return (
    <main className="homepage" id="main">
      <Banner />
      <CourseList offline={state.offline} online={state.online} />
      <Special />
      <Review list={state.review} />
      <Gallery list={state.gallery} />
      <Form /*transmitOpenPopupLogin={props.transmitOpenPopupLogin}*/ />
      <PopupLogin />
    </main>
  );
}
