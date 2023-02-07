import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import logo from '../../Assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import AuthIndex from '../../Components/Auth/AuthIndex';
import ApiList from '../../Components/Api/ApiList';
import axios from 'axios';
import { Helmet } from "react-helmet";
import SiteMaster from '../../Assets/JSON/SiteMaster.json'

function Register(props) {

    const { registrationApi, bearerHeader } = ApiList();
    const [loginLoader, setLoginLoader] = useState(false)
    const [errorMessage, setErrorMessage] = useState()
    const [successMsg, setSuccessMsg] = useState()


    const registerSuccess = (data) => {
        console.log("===Data aftr success", data)
        setSuccessMsg("Register successfull, Please Login")

        // navigate("/dashboard")
    }


    const registrationDetails = (data) => {
        setErrorMessage()
        setSuccessMsg()
        setLoginLoader(true)
        console.log("--1--Registration Data", data)


        const payload = {
            "name": data.studentName,
            "email": data.email,
            "password": data.password,
            "mobile": data.phone,
        }

        axios.post(registrationApi, payload, bearerHeader)
            .then(function (res) {
                console.log("--2-- After reg data", res)
                if (res.data.status === true) {
                    registerSuccess(res.data)
                    setLoginLoader(false)
                } else {
                    setLoginLoader(false)
                    console.log("Error", res.data.message)
                    setErrorMessage("Please fill details carefully!")
                }
            })
            .catch((err) => {
                console.log("Error in login", err)
                setLoginLoader(false)
                setErrorMessage("Something Went Wrong !")
            })
    }

    const navigate = useNavigate();

    const validationSchema = yup.object(
        {
            studentName: yup.string().required('Enter Your Name')
                .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
            phone: yup.string().required('Enter mobile no.')
                .min(10, 'Please Enter 10 Digit !')
                .max(10, 'Please Enter 10 Digit !'),
            email: yup.string().email('Invalid email').required('This field is required !'),
            password: yup.string()
                .min(6, 'Minimum six character !')
                .max(50, 'Too Long!')
                .required('This field is required !')
                .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 'Password Must Contains (Capital, Smail, Number, Special) eg - Abc123#.'),
        }
    );

    const handleOnChange = (event) => {
    };

    const formik = useFormik({
        initialValues: {
            studentName: '',
            email: '',
            password: '',
            phone: ''
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            registrationDetails(values)
        },
        validationSchema
    });

    const handleName = e => formik.values.studentName = e.target.value

    return (
        <>
            <Helmet>
                <title>{props.title} - {SiteMaster.data.siteTitle}</title>
            </Helmet>
            <div className="flex h-screen">
                <div className="m-auto bg-white md:py-10 py-5 md:px-14 px-8 shadow-lg rounded-lg">
                    <div className='flex justify-center'>
                        <img src={logo} alt="Logo" className='h-16' />
                    </div>
                    <p className='text-center font-semibold text-2xl my-2'>Student Registration</p>
                    <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>

                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Name<span className=' text-red-600'>*</span></p>
                            <input
                                onChange={(e) => handleName(e)}
                                type="text"
                                name="studentName"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                                disabled={loginLoader}
                            />
                            <p className='text-red-500 text-xs'>{formik.touched.studentName && formik.errors.studentName ? formik.errors.studentName : null}</p>
                        </div>
                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Enter Email <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={formik.handleChange}
                                type="text"
                                name="email"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                                disabled={loginLoader}
                            />
                            <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                        </div>
                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Phone <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={formik.handleChange}
                                type="text"
                                name="phone"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                                disabled={loginLoader}
                            />
                            <p className='text-red-500 text-xs'>{formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}</p>
                        </div>
                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Password <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={formik.handleChange}
                                type="password"
                                name="password"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                                disabled={loginLoader}
                            />
                            <p className='text-red-500 text-xs'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
                        </div>
                        <div className='text-center font-semibold text-red-500 text-sm'> {errorMessage && "Error : " + errorMessage} </div>
                        <div className='text-center font-semibold text-green-400 text-sm'> {successMsg && successMsg} </div>
                        {!loginLoader &&
                            <div>
                                <p onClick={() => navigate("/login")} className='text-center font-semibold cursor-pointer text-blue-500 hover:underline hover:text-blue-500'>Already Account ? Login Here </p>
                            </div>
                        }
                        <div>
                            <div className='flex justify-center mt-2'>
                                <RotatingLines
                                    strokeColor="black"
                                    strokeWidth="2"
                                    animationDuration="1"
                                    width="40"
                                    visible={loginLoader}
                                />
                            </div>
                        </div>
                        {!loginLoader &&
                            <div className=' mt-1'>
                                <button type="submit" className='border py-2 w-full text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-md mb-1'> Register </button>
                            </div>
                        }
                    </form>
                </div>

            </div>
        </>
    )
}

export default Register

/*
Exported to -
1. LoginIndex.js
*/