import userApi from '../../api/userApi';
import { COURSE_ADD } from './type';

export function courseUser(data) {
  return {
    type: COURSE_ADD,
    payload: data,
  };
}

export function fetchCourseUser() {
  return (dispatch, state) => {
    console.log(state)
    userApi.course().then(res => {
      dispatch(courseUser(res))
    })
  }
}