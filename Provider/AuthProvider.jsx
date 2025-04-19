import React, { createContext, useEffect, useState } from 'react';
import auth from '../src/Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    console.log(user)
    
    const names = {
        name: 'mehedi'
    }
    // registernew user
    const newUserRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[])
    // signOUt
    const signoutUser =()=>{
        signOut(auth);
    }
    const authInfo = {
        names,
        newUserRegister,
        user,
        setUser,
        signoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;