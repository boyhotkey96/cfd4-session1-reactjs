import React, { useEffect, useState } from "react";
import LoadingApi from "../../../core/LoadingApi";
import { useAuth } from "../../../core/hook/useAuth";
import CourseItem from "./CourseItem";
import userApi from "../../../api/userApi";

export default function Course() {
  let auth = useAuth();
  let [course, setCourse] = useState();

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

    let res = await userApi.profile(course);
    // console.log(res);
    if (res.data) {
      setCourse(res.data);
    }
  }, []);

  if (!course) {
    return <LoadingApi />;
  }

  return (
    <div className="tab2">
      {course.map((courseLists, index) => (
        <CourseItem key={index} {...courseLists} />
      ))}
    </div>
  );
}
