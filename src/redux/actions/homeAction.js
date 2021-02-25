import pageApi from "../../api/pageApi";
import { HOME_UPDATE_DATA } from "./type";

export function homeUpdateData(data) {
  return {
    type: HOME_UPDATE_DATA,
    payload: data
  }
}

export function fetchHome() {
  return (dispatch, state) => {
    // console.log(state)
    pageApi.home().then(res => {
      dispatch(homeUpdateData(res))
    })
  }
}