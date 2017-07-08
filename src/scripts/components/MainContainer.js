import { connect } from 'react-redux'
import Main from './Main'
import {
  updateUserCoordinates,
  updateZip
} from '../actions/map_actions'

const mapStateToProps = dispatch => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateUserCoordinates: (lat, lng) => dispatch(updateUserCoordinates(lat, lng)),
    updateZip: (zip) => dispatch(updateZip(zip))
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer
