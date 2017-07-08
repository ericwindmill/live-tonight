import { connect } from 'react-redux'
import Location from './Location'
import {
  updateUserCoordinates,
  updateZip
} from '../actions/map_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    map: state.map
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserCoordinates: (lat, lng) => dispatch(updateUserCoordinates(lat, lng)),
    updateZip: (zip) => dispatch(updateZip(zip))
  }
}

const LocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Location)

export default LocationContainer
