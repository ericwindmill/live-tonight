import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import reducers from './reducers/root_reducer.js'
import MainContainer from './components/MainContainer'



const Root = ({store}) => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  ) 
}

export default Root
