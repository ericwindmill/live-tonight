import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



import Navigation from './Navigation'
import LocationContainer from './Location_Container'
import ConcertsContainer from './Concerts_Container'

const App = () => (
  <div>
    <header>
      <Navigation />
    </header>
    <LocationContainer />
    <ConcertsContainer />
  </div>
)


export default App