import React, { Component } from 'react'
import Map from './Map'

class Main extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='Main'>
        <Map />
      </div>
    )
  }

}

export default Main
