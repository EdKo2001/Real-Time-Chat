
import React, { useContext, useState, useEffect } from "react"
import { auth, firestore } from "../firebase"
import firebase from 'firebase'

const Context = React.createContext()

export function useContent() {
    return useContext(Context)
}

export function Provider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function signIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        return auth.signInWithPopup(provider)
    }

    function signOut() {
        return auth.signOut()
    }

    function sendMessage(value) {
        return firestore.collection('messages').add({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signIn,
        signOut,
        sendMessage
    }

    return (
        <Context.Provider value={value}>
            {!loading && children}
        </Context.Provider>
    )
}