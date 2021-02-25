import { COURSE_ADD } from '../actions/type'

let initState = {
  data: []
}

export default function courseReducer(state = initState, action) {
  switch (action.type) {
    case COURSE_ADD:
      // console.log(action.payload)
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state;
  }
}