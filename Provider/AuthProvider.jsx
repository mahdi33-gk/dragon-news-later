import React, { createContext, useEffect, useState } from 'react';
import auth from '../src/Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading,setLoading] = useState(true);
    console.log(user)
    
    const names = {
        name: 'mehedi'
    }

    // updateUser
    const updateUserinfo = (updatedInfo) =>{
        return updateProfile(auth.currentUser, updatedInfo);
    }
   

    // registernew user
    const newUserRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    // signOUt
    const signoutUser =()=>{
       return signOut(auth);
    }
    // signIn
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }
    // login
    const authInfo = {
        names,
        newUserRegister,
        user,
        setUser,
        signoutUser,
        signIn,
        loading,
        error,
        setError,
        updateUserinfo
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;