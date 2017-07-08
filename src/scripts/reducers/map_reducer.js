import { GRAB_USER_COORDS } from '../actions/map_actions'

import merge from 'lodash/merge'

const MapReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case GRAB_USER_COORDS:
      return merge({}, state, action.coords)
    default:
      return state
  }
}

export default MapReducer
