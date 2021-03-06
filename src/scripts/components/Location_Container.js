import { connect } from 'react-redux'
import Location from './Location'
import {
  updateUserCoordinates,
  updateZip
} from '../actions/map_actions'
import {
  requestConcerts
} from '../actions/concert_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    map: state.map,
    concerts: state.concerts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserCoordinates: (lat, lng) => dispatch(updateUserCoordinates(lat, lng)),
    updateZip: (zip) => dispatch(updateZip(zip)),
    requestConcerts: (zip) => dispatch(requestConcerts(zip))
  }
}

const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Location)

export default LocationContainer
