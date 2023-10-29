import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";




export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)


    // crate user
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // 
    const logOut = ()=> {
        return signOut(auth)
    }


    // observer
    useEffect(() => {
       const unSubscribe= onAuthStateChanged(auth, (currentUer) => {
            setUser(currentUer)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        signUp,
        login,
        logOut


    }

    return (
        <AuthContext.Provider value={authInfo}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;