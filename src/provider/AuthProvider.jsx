import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
const auth = getAuth(app);


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const userInfo = {name : 'Foyez Ahamed'};

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;