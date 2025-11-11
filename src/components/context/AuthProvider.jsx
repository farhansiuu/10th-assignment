import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,
     GoogleAuthProvider, 
     onAuthStateChanged, 
     
     signInWithEmailAndPassword, 
     signInWithPopup, 
     signOut} 
     from 'firebase/auth';

import { auth } from '../firebase.config';


const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const creatUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleUser = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const signOutUser = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unsubscribe()
        }
        },[])
    const authInfo={
        creatUser,
        loginUser,
        googleUser,
       signOutUser ,
        user,
        loading

    }
    return (
        <AuthContext.Provider value={authInfo}>
         {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;