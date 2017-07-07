import React from 'react'
import { database, auth, googleAuthProvider } from '../firebase'
import map from 'lodash/map'
import pick from 'lodash/pick'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null,
      newData: '',
      currentUser: null,
      users: {},
      restaurantName: '',
      restaurants: null
    }

    this.dataRef = null
    this.restaurantRef = database.ref('/restaurants')
    this.userRef = null
    this.usersRef = null

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleNewRestaurant = this.handleNewRestaurant.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleDeselect = this.handleDeselect.bind(this)
  }

  componentDidMount () {

    auth.onAuthStateChanged(currentUser => {
      this.setState({
        currentUser
      })
      this.restaurantRef.on('value', (snapshot) => {
        this.setState({restaurants: snapshot.val()})
      })

      if (currentUser) {
        this.usersRef = database.ref('/users')
        this.userRef = this.usersRef.child(currentUser.uid)

        this.userRef.once('value').then((snapshot) => {
          if (snapshot.val()) return
          const userData = pick(snapshot.val(), ['displayName', 'photoURL', 'email'])
          this.userRef.set(userData)
        })
      }

      this.usersRef.on('value', (snapshot) => {
        this.setState({ users: snapshot.val() })
      })
    })
    this.dataRef = database.ref()
    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data: snapshot.val()
      })
    })
  }

  handleChange (event) {
    const newData = event.target.value
    this.setState({
      newData
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.dataRef.push(this.state.newData)
  }

  handleNewRestaurant (event) {
    event.preventDefault()
    this.restaurantRef.push({name: this.state.restaurantName})
  }

  handleSelect (key) {
    const user = this.state.currentUser
    database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(user.uid)
            .set(user.displayName)
  }

  handleDeselect (key) {
    const user = this.state.currentUser
    database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(user.uid)
            .set(null)
  }

  render () {
    const { currentUser, restaurants } = this.state

    return (
      <div>
        <h1>This is my app component.</h1>
        <pre> 
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className='App--form' onSubmit={this.handleSubmit}>
          <input type='text' onChange={this.handleChange} />
          <input type='submit' />
        </form>
        {!currentUser &&
        <div className='SignIn'>
          <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
            Sign In
          </button>
        </div>
        }
        {
          currentUser && 
          <div>
            <h1> Howdy! </h1>
            <div className='CurrentUser'>
              <img
                src={currentUser.photoURL}
                className='currentUser--photo'
                alt={currentUser.displayName}
              />
              <div className='currentUser--info'>
                <h3>{currentUser.displayName}</h3>
                <p>{currentUser.email}</p>
                <button onClick={() => auth.signOut()}>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          }

          <form className='NewRestaurant'>
            <input
              type='text'
              value={this.state.restaurantName}
              placeholder='Name of the Fine Establishment'
              onChange={event => this.setState({ restaurantName: event.target.value })}
            />
            <button
              onClick={this.handleNewRestaurant}
              disabled={!this.state.restaurantName}
            >
              Add Restaurant
            </button>
          </form>

        {map(restaurants, (restaurant, key) =>
          <div key={key} {...restaurant}>
            <h3>{restaurant.name}</h3>
            <ul>
              { this.state.votes }
            </ul>
            <button onClick={() => this.handleSelect(key)}>
              Yeah, I'd go there
            </button>
            <button onClick={() => this.handleDeselect(key)}>
              Naw
            </button>
          </div>)}




      </div>
    )
  }
}

export default App
