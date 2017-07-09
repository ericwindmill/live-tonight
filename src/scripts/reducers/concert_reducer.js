import {
  RECEIVE_CONCERTS
} from '../actions/concert_actions'
import merge from 'lodash/merge'

const defaultState = {
  concerts: ''
}

const ConcertReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CONCERTS:
      return merge({}, state, action.concerts)
    default:
      return state
  }
}

export default ConcertReducer
