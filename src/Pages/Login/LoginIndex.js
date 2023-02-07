

import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiList from '../../Components/Api/ApiList'
// import AuthIndex from '../../Components/Auth/AuthIndex';
import AuthIndex from '../../Components/Auth/AuthIndex'
import LoginForm from './LoginForm'
import {Helmet} from "react-helmet";
import SiteMaster from '../../Assets/JSON/SiteMaster.json'

function LoginIndex(props) {
    const { isLogedIn, userIs } = AuthIndex();

    const { loginApi } = ApiList();
    const [loginLoader, setLoginLoader] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const navigate = useNavigate()
    console.log("SiteMaster.siteName",SiteMaster.data.siteName)

    useEffect(() => {
        if (isLogedIn == true) {

            if (userIs === 9) {
                navigate("/dashboard")
            } else if (userIs === 1) {
                navigate("/StudentDahboard")
            } else {
                navigate("/logout")
            }
        }
    }, [userIs])



    const loginSuccess = (data) => {
        console.log("===Data aftr success", data)

        localStorage.setItem("token", data.bearer)
        localStorage.setItem("UserType", data.userType)
        localStorage.setItem("LoginStatus", true)
        // navigate("/dashboard")
    }


    const loginDetails = (data) => {
        setErrorMessage()
        setLoginLoader(true)
        console.log("--1--Login Data", data)

        axios.post(loginApi, { "email": data?.email, "password": data?.password })
            .then(function (res) {
                console.log("--2-- After Login data", res)
                if (res.data.status === true && res.data.data != "") {
                    loginSuccess(res.data)
                    setLoginLoader(false)
                } else {
                    setLoginLoader(false)
                    console.log("Error", res.data.message)
                    setErrorMessage("Invalid Login Credencials")
                }
            })
            .catch((err) => {
                console.log("Error in login", err)
                setLoginLoader(false)
                setErrorMessage("Something Went Wrong !")
            })

    }

    return (
        <>
            <Helmet>
                <title>{props.title} - {SiteMaster.data.siteTitle}</title>
            </Helmet>
            <LoginForm loginDetails={loginDetails} loginLoader={loginLoader} msg={errorMessage} />
        </>
    )
}

export default LoginIndex

/*
Exported to -
app.js
*/