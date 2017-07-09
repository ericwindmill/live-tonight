import { combineReducers } from 'redux'
import MapReducer from './map_reducer'
import ConcertReducer from './concert_reducer'

const RootReducer = combineReducers({
  map: MapReducer,
  concerts: ConcertReducer
})

export default RootReducer
