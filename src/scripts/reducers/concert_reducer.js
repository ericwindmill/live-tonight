import {
  RECEIVE_CONCERTS
} from '../actions/concert_actions'
import merge from 'lodash/merge'

const defaultState = {}

const ConcertReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_CONCERTS:
      let newState = merge({}, state, action.concerts)
      return newState
    default:
      return state
  }
}

export default ConcertReducer
