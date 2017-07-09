import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import reducers from './reducers/root_reducer.js'
import LocationContainer from './components/Location_Container'
import Navigation from './components/Navigation'



const Root = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
        <LocationContainer />
      </div>
    </Provider>
  ) 
}

export default Root
