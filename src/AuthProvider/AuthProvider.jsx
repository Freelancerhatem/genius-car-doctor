import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const[user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

    }
    const signOutUser=()=>{
        
        setLoading(true)
           return signOut(auth);
        
    }

    const authinfo = {
        createUser,
        user,
        loading,
        setLoading,
        signInUser,
        signOutUser,
        setUser
    }
    // console.log(user)
    
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return ()=> unSubscribe();
    },[]);

    
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.any
}

export default AuthProvider;





