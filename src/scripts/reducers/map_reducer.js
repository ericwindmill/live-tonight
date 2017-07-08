import { 
  GRAB_USER_COORDS,
  GET_ZIP
} from '../actions/map_actions'

import merge from 'lodash/merge'

const defaultState = {
  lat: '',
  lng: '',
  zip: 94110
}

const MapReducer = (state = defaultState, action) => {
  Object.freeze(state)

  switch (action.type) {
    case GRAB_USER_COORDS:
      return merge({}, state, action.coords)
    case GET_ZIP:
      return merge({}, state, action.zip)
    default:
      return state
  }
}

export default MapReducer
