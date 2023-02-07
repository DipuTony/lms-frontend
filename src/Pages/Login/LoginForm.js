import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import logo from '../../Assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'

function LoginForm(props) {
    const loginLoader = props.loginLoader;

    const navigate = useNavigate();

    const validationSchema = yup.object(
        {
            email: yup.string().email('Invalid email').required('This field is required !'),
            password: yup.string()
                .min(6, 'Minimum six character !')
                .max(50, 'Too Long!')
                .required('This field is required !')
                .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 'Password Must Contains (Capital, Smail, Number, Special) eg - Abc123#.'),
        }
    );

    const formik = useFormik({
        initialValues: {
            // centerCode: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            props.loginDetails(values)
        },
        validationSchema
    });

    // const handleCenterCode = e => formik.values.centerCode = e.target.value
    const handleEmail = e => formik.values.email = e.target.value
    const handlePassword = e => formik.values.password = e.target.value

    return (
        <>
            <div className="flex h-screen">
                <div className="m-auto bg-white md:py-10 py-5 md:px-14 px-8 shadow-lg rounded-lg">
                    <div className='flex justify-center'>
                        <img src={logo} alt="Logo" className='h-16' />
                    </div>
                    <p className='text-center font-semibold text-2xl my-2'>Login Page</p>
                    <form onSubmit={formik.handleSubmit}>

                        {/* <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Center Code <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={(e) => handleCenterCode(e)}
                                type="text"
                                name="centerCode"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                                disabled={loginLoader}
                            />
                        </div> */}
                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Enter Email <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={(e) => handleEmail(e)}
                                type="text"
                                name="email"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                                disabled={loginLoader}
                            />
                            <p className='text-red-500 text-xs'>{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                        </div>
                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Password <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={(e) => handlePassword(e)}
                                type="password"
                                name="password"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                                disabled={loginLoader}
                            />
                            <p className='text-red-500 text-xs'>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
                        </div>
                        {!loginLoader &&
                            <div>
                                <p onClick={() => navigate("/forgotPassword")} className='text-center font-semibold cursor-pointer hover:underline hover:text-blue-500'>Forgot Password ? </p>
                                <p onClick={() => navigate("/register")} className='text-center font-semibold cursor-pointer hover:underline hover:text-blue-500'>New User ? Regester Here </p>
                            </div>
                        }
                        <div className='text-center font-semibold text-red-500 text-sm'>
                            {props?.msg && "Error : " + props?.msg}
                        </div>
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
                                <button type="submit" className='border py-2 w-full text-base font-semibold text-white bg-green-500 hover:bg-green-600 rounded-md mb-1'> Login </button>
                            </div>
                        }
                    </form>
                </div>

            </div>
        </>
    )
}

export default LoginForm

/*
Exported to -
1. LoginIndex.js
*/