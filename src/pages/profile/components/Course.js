import React, { useEffect, useState } from "react";
import LoadingApi from "../../../components/LoadingApi";
import { useAuth } from "../../../core/hook/useAuth";
import CourseItem from "./CourseItem";

export default function Course() {
  let auth = useAuth();
  let [course, setCourse] = useState();

  useEffect(() => {
    fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/profile/course", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.login.token.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data)
        setCourse(res.data);
      });
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
