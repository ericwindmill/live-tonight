import React, { Component } from 'react'

class Concerts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      key: 0
    }
  }


  componentDidUpdate (prevProps, prevState) {
    if (prevProps.concerts !== this.props.concerts) {
      
    }
  }

  render() {
    var concertsList = Object.entries(this.props.concerts).map(([id, concert]) => {
          console.log(concert)
                          return <li key={id}>{concert.artist[0]}</li>
                       })
    return (
      <div>
        <ul> 
          { concertsList }
        </ul>
      </div>
    )
  }

}


export default Concerts