import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyChOZGGVQfH2CsEfAcLwWi7OVrUEzeswlk",
    authDomain: "real-time-chat-8d3d2.firebaseapp.com",
    projectId: "real-time-chat-8d3d2",
    storageBucket: "real-time-chat-8d3d2.appspot.com",
    messagingSenderId: "278728560677",
    appId: "1:278728560677:web:7de9fee2e1e5444cabefcc"
})

export const auth = app.auth()
export const firestore = app.firestore()
export default app