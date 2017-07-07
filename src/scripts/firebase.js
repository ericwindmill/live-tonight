import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyDYmN0vziUQdHfzO_VPEGdn0-Oi9vbwUNw',
  authDomain: 'concerts-tonight.firebaseapp.com',
  databaseURL: 'https://concerts-tonight.firebaseio.com',
  projectId: 'concerts-tonight',
  storageBucket: 'concerts-tonight.appspot.com',
  messagingSenderId: '705891585119'
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
