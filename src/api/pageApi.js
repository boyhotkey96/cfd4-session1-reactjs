import { domain } from "./api";

export default {
  home: () => {
    return fetch(`${domain}/elearning/v4/home`).then(res => res.json());
  },
  course_detail: (slug) => {
    return fetch(`${domain}/elearning/v4/course/${slug}`)
    .then(res => res.json())
  },
};
