import React, { createContext } from 'react';
import auth from '../src/Firebase/Firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    
    const names = {
        name: 'mehedi'
    }
    // registernew user
    const newUserRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
        names,
        newUserRegister
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;