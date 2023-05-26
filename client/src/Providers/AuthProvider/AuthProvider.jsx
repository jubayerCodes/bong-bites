import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../utilities/firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [updates, setUpdates] = useState(true)


    // Sign Up With Email And Password

    const emailPasswordSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login with email and password

    const emailPasswordLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // handle update name and photo

    const updateNameAndPhoto = (user, displayName, photoURL) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL
        })
    }

    // google sign in

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github sign in

    const githubSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // Log Out

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // set current user on state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }

    }, [updates])

    const authInfo = {
        emailPasswordSignUp,
        emailPasswordLogin,
        updateNameAndPhoto,
        googleSignIn,
        githubSignIn,
        logOut,
        loading,
        user,
        updates,
        setUpdates
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;