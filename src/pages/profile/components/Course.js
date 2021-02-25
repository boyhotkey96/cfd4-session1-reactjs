import React, { useEffect, useState } from "react";
import LoadingApi from "../../../core/LoadingApi";
import { useAuth } from "../../../core/hook/useAuth";
import CourseItem from "./CourseItem";
import userApi from '../../../api/userApi'
import { useDispatch, useSelector } from "react-redux";
import { addCourse, fetchCourseUser } from "../../../redux/actions/courseAction";

export default function Course() {
  let auth = useAuth();
  // let [course, setCourse] = useState();

  let courseUser = useSelector(state => state.courseUser);
  // console.log(courseUser)
  const dispatch = useDispatch();

  useEffect(async () => {
    // fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/profile/course", {
    //   method: "POST",
    //   headers: {
    //     Authorization: `Bearer ${auth.login.token.accessToken}`,
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.data)
    //     setCourse(res.data);
    //   });
    // let res = await userApi.course();
    // console.log(res);
    // if (res) {
      // setCourse(res.data);
      dispatch(fetchCourseUser())
    // }
  }, []);

  if (!courseUser) {
    return <LoadingApi />;
  }

  return (
    <div className="tab2">
      {courseUser.data.map((courseLists, index) => (
        <CourseItem key={index} {...courseLists} />
      ))}
    </div>
  );
}
