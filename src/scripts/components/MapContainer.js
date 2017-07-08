import { connect } from 'react-redux'
import Map from './Map'

const mapStateToProps = (state, ownProps) => {
  return {
    map: state.map
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
