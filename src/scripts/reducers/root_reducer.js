import { combineReducers } from 'redux'
import MapReducer from './map_reducer'

const RootReducer = combineReducers({
  map: MapReducer
})

export default RootReducer
