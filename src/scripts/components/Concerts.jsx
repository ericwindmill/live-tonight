import React, { Component } from 'react'

class Concerts extends Component {



  componentWillReceiveProps (nextProps) {

  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.concerts.forEach(concert => {
          <li>concert.artist[0]</li>
        })}
      </div>
    )
  }

}


export default Concerts