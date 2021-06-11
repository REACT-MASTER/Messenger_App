import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    // your Firebase credentials go here
    apiKey: "AIzaSyDuqMwsXYxkPcbaB_gJU6-UxpZAzpcLWmw",
    authDomain: "messenger-clone-c6680.firebaseapp.com",
    projectId: "messenger-clone-c6680",
    storageBucket: "messenger-clone-c6680.appspot.com",
    messagingSenderId: "264957833195",
    appId: "1:264957833195:web:2174ea2f5be3f5abb933ae",
    measurementId: "G-J0CEK1ELCQ"
})

const db = firebaseApp.firestore()

export default db