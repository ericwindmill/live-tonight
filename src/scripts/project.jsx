import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './root'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = configureStore()
window.store = store

document.addEventListener('DOMContentLoaded', () => {
	const store = configureStore()
	const root = document.getElementById('root')
	ReactDOM.render(<Root store={store} />, root)
})