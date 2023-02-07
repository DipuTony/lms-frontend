import axios from 'axios';
import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import ApiList from '../../Components/Api/ApiList';

function Logout() {
    const { logOutApi, bearerHeader } = ApiList();

    const navigate = useNavigate()

    console.log("--1 ---Logout.js is Called");



    // localStorage.removeItem('token');
    navigate('/login')
    localStorage.removeItem('UserType');
    localStorage.removeItem('LoginStatus');

    useEffect(() => {
        axios.post(logOutApi, {}, bearerHeader)  // Must be logged in for Logout From server
            .then(function (res) {
                if (res.data.status) {
                    console.log("---2 --- AXIOS Logout", res)
                    localStorage.removeItem('token');
                    localStorage.removeItem('UserType');
                    localStorage.removeItem('LoginStatus');
                    navigate('/login')
                }
            })
            .catch((err) => {
                console.log("--- 2 ---AXIOS Error in Logout", err)
                localStorage.removeItem('token');
                localStorage.removeItem('UserType');
                localStorage.removeItem('LoginStatus');
                navigate('/login')
            })

    }, [])

    return <Navigate to='/login' />
    return;


}

export default Logout