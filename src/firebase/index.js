import firebase from 'firebase'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyCY8ViJ9E_F5d2e-z1uExe5gVX8YYCs35g",
    authDomain: "talsebook-5b1ea.firebaseapp.com",
    databaseURL: "https://talsebook-5b1ea.firebaseio.com",
    projectId: "talsebook-5b1ea",
    storageBucket: "talsebook-5b1ea.appspot.com",
    messagingSenderId: "902248397103"
}
firebase.initializeApp(config)

export const db = firebase.firestore()
