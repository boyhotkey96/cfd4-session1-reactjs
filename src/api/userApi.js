import { domain } from "../core/api";

export default {
  login: (data) => {
    return fetch(`${domain}/elearning/v4/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },
  course: () => {
    let user = JSON.parse(localStorage.getItem("login"));
    return fetch(`${domain}/elearning/v4/profile/course`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token.accessToken}`,
      },
    }).then((res) => res.json());
  },
  course_register: (data, slug) => {
    let user = JSON.parse(localStorage.getItem("login"));
    return fetch(`${domain}/elearning/v4/course-register/${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token.accessToken}`,
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },
  contact: (data) => {
    return fetch(`${domain}/elearning/v4/contact`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  },
  update: () => { },
  payment: () => { },
};
