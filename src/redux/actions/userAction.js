import userApi from '../../api/userApi'
import { USER } from './type'

export function login(data) {
  return {
    type: USER.LOGIN,
    payload: data
  }
}

export function logout() {
  return {
    type: USER.LOGOUT,
  }
}

export function fetchLogin() {
  return (dispatch) => {
    userApi.login().then(res => {
      dispatch(res.data);
    })
  }
}