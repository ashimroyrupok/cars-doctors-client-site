import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";
import axios from "axios";




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
       const unSubscribe= onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            // if user exist then issue a token
            const userEmail = currentUser?.email || user?.email
            const loggedUser = {user: userEmail}

            if(currentUser){

                axios.post('http://localhost:5000/jwt',loggedUser, {withCredentials:true})
                .then(res => {
                    console.log(res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true} )
                .then(res => {
                    console.log("token response",res.data);
                })
            }
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