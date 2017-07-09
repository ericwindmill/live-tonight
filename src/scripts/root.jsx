import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import reducers from './reducers/root_reducer.js'
import LocationContainer from './components/Location_Container'
import Navigation from './components/Navigation'
import Spotify from './components/spotify'



const Root = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        <Navigation />
        <LocationContainer />
        <Spotify />
      </div>
    </Provider>
  ) 
}

export default Root
