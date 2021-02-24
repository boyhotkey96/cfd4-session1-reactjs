import { COURSE_ADD } from '../actions/type'

let initState = {

}

export default function courseReducer(state = initState, action) {
  switch (action.type) {
    case COURSE_ADD:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}