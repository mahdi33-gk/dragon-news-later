import React, { createContext, useEffect, useState } from 'react';
import auth from '../src/Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";


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
    const authInfo = {
        names,
        newUserRegister,
        user,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;