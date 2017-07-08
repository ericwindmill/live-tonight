import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import reducers from './reducers/root_reducer.js'
import LocationContainer from './components/Location_Container'



const Root = ({store}) => {
  return (
    <Provider store={store}>
      <LocationContainer />
    </Provider>
  ) 
}

export default Root
