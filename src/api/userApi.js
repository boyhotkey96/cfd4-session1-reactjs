import { domain } from "./api";

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
  profile: () => {
    let user = JSON.parse(localStorage.getItem("login"));
    fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/profile/course", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token.accessToken}`,
      },
    }).then((res) => res.json());
  },
  update: () => {},
  payment: () => {},
};
