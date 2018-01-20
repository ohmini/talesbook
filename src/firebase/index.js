import firebase from 'firebase'
import 'firebase/firestore'

var config = {
  apiKey: "AIzaSyCY8ViJ9E_F5d2e-z1uExe5gVX8YYCs35g",
  authDomain: "swine-sc.firebaseapp.com",
  databaseURL: "https://swine-sc.firebaseio.com",
  projectId: "swine-sc",
  storageBucket: "swine-sc.appspot.com",
  messagingSenderId: "16743347846"
}
firebase.initializeApp(config)

export const db = firebase.firestore()
