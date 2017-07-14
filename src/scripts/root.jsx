import '../styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import reducers from './reducers/root_reducer.js'
import App from './components/App'



const Root = ({store}) => {
  return (
    <Provider store={store}>
      <div>
        <HashRouter>
          <App />
        </HashRouter>
      </div>
    </Provider>
  ) 
}

export default Root
