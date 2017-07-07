import { connect } from 'react-redux'
import Main from './Main'

const mapStateToProps = dispatch => {
  return {
    sample: {a: 1, b: 2}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sampleFunc: (data) => console.log(data)
  }
}

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

export default MainContainer
