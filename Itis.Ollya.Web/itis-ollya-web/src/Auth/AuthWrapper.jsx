import { createContext, useContext, useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom";
import React from 'react';
import API from "../constants/AxiosClients";
import Main from "../Containers/Main";
import NotFound from '../Components/NotFound';
import SignIn from '../Containers/SignIn.jsx';
import SignUp from '../Containers/SignUp.jsx';
import {main, notFound, registration, admin, signin, profile} from '../constants/PagePaths'
import UserProfile from "../Containers/UserProfile.jsx";


export const getTokenFromSessionStorage = () => sessionStorage.getItem("token");

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
     const [ user, setUser ] = useState({email: sessionStorage.getItem("email") ?? "", isAuthenticated: getTokenFromSessionStorage() != undefined })

     const login = (email, password) => {
        return API.login(email, password)
        .then(() => setUser({...user, email: sessionStorage.getItem("email"), isAuthenticated: true}));
     }

     const logout = () => {
          API.logout();
          setUser({...user, isAuthenticated: false})
     }

    //  useEffect(() => {
    //       async function validateToken() {
    //            const isValidSession = await API.testSession();
    //            if (isValidSession == false){
    //                 logout();
    //                 if (location != "/registration")
    //                      navigate("/login");
    //            }
    //       }

    //       validateToken();
    //  }, []);

     return (
            <AuthContext.Provider value={{user, login, logout}}>
                <>         
                    <Routes>
                        <Route path ="/">
                            <Route path={main} element={<Main />} />
                            <Route path={profile} element={<UserProfile />} />
                            <Route path={signin} element={<SignIn />} />
                            <Route path={registration} element={<SignUp />} />                    
                        </Route>
                        <Route path ={admin} element={<p>Admin Panel</p>}/>                
                        <Route path={notFound} element={<NotFound />} />
                    </Routes>                    
                </>
            </AuthContext.Provider>
     )
}