import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';
const auth = getAuth(app);
export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const userSignUp = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        return signOut(auth);
    }
    
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    },[])

    const userInfo = {
        userSignUp,
        userSignIn,
        user,
        userSignOut
    };


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}