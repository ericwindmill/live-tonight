import { connect } from 'react-redux'
import Map from './Map'
import { grabUserCoordinates } from '../util/map_util'

const mapStateToProps = dispatch => {
  return {
    sample: {a: 1, b: 2}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    grabUserCoordinates: () => grabUserCoordinates()
  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
