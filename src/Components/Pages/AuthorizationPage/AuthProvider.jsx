/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../Config/config.firebase";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (loadedUser) => {
      setUser(loadedUser);
      setLoader(false);
      // console.log(loadedUser);
    });
  }, []);

  const Login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const Register = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Logout = () => {
    return signOut(auth);
  };

  const LoginWGoogle = () =>{
    setLoader(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }


  const handleUpdateProfile = (name, photoURL) =>{
    // setLoader(true);
    updateProfile(auth.currentUser, {
      displayName: `${name}`, photoURL: `${photoURL}`
    }).then(() => {
      console.log("profile updated");
      Logout();
    }).catch((error) => {
      console.log(error)
    })
    // setLoader(false);
  }

  const authInfo = {
    user,
    loader,
    Login,
    Register,
    Logout,
    LoginWGoogle,
    handleUpdateProfile
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
