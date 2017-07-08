import { connect } from 'react-redux'
import Map from './Map'
import {
  updateZip
} from '../actions/map_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    map: state.map
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateZip: (zip) => dispatch(updateZip(zip))
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
