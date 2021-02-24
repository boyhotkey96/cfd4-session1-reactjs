import { USER } from '../actions/type'

let loginStorage = null;

try {
  loginStorage = JSON.parse(localStorage.getItem("login"));
} catch (Exception) { }

let initState = {
  login: loginStorage,
}

export function addToken(data) {
  localStorage.setItem('token', JSON.stringify(data))
}

export function getToken() {
  let token = JSON.parse(localStorage.getItem('token'))
  return token.accessToken
}

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case USER.LOGIN:
      localStorage.setItem('login', JSON.stringify(action.payload))
      addToken(action.payload.token)
      return {
        ...state,
        login: action.payload
      }
    case USER.LOGOUT:
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      return {
        ...state,
        login: null
      }
    default:
      return state
  }
}