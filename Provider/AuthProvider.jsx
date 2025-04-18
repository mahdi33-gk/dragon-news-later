import React, { createContext } from 'react';


export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    
    const names = {
        name: 'mehedi'
    }

    const authInfo = {
        names
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;