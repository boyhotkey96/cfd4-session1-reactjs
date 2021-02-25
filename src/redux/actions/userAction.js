import userApi from '../../api/userApi'
import { USER } from './type'

export function loginUser(data) {
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

export function fetchLogin(form) {
  return (dispatch) => {
    userApi.login(form).then(res => {
      dispatch(loginUser(res.data));
    })
  }
}