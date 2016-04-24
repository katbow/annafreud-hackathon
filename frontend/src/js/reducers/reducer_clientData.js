import { CLIENT_DATA } from '../actions/actions_index.js'

export default (state = '', action) => {
  switch (action.type) {
  case CLIENT_DATA:
    return action.payload
  default:
    return state
  }
}
