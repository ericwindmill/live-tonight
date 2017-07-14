import { connect } from 'react-redux'
import Concerts from './Concerts'
import {
  receiveConcerts
} from '../actions/concert_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    concerts: state.concerts
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const ConcertsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Concerts)

export default ConcertsContainer
