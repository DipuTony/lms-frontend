import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import logo from '../../Assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet";
import SiteMaster from '../../Assets/JSON/SiteMaster.json'

function ForgetPassword(props) {

    const navigate = useNavigate();

    // const validationSchema = yup.object(
    //     {
    //         wardNo: yup.string().required("This is a required field !"),
    //         newWardNo: yup.string().required("This is a required field !"),
    //     }
    // );

    const formik = useFormik({
        initialValues: {
            centerCode: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            // props.data("wardDetails", values)
            // props.nextFun()
        },
        // validationSchema
    });

    const handleCenterCode = e => formik.values.centerCode = e.target.value
    const handleEmail = e => formik.values.email = e.target.value

    return (
        <>
            <Helmet>
                <title>{props.title} - {SiteMaster.data.siteTitle}</title>
            </Helmet>

            <div class="flex h-screen">
                <div class="m-auto bg-white py-10 px-14 shadow-lg rounded-lg">
                    {/* <div className='flex justify-center'>
                        <img src={logo} alt="Logo" className='h-16' />
                    </div> */}
                    <p className='text-center font-semibold text-2xl mb-6'>Reset Password</p>
                    <form onSubmit={formik.handleSubmit}>

                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Center Code <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={(e) => handleCenterCode(e)}
                                type="text"
                                name="centerCode"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                            />
                        </div>
                        <div className='my-2'>
                            <p className='text-gray-600 font-semibold'>Enter Email <span className=' text-red-600'>*</span></p>
                            <input
                                onChange={(e) => handleEmail(e)}
                                type="text"
                                name="email"
                                className='border border-gray-400 px-2 my-1 w-64 h-10 shadow-sm rounded-md'
                            />
                        </div>
                        <div>
                            <p onClick={() => navigate('/login')} className='text-center font-semibold cursor-pointer hover:underline hover:text-blue-500'>Login</p>
                        </div>

                        <div className='mt-6'>
                            <button type="submit" className='border py-1 w-full text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-sm'> Reset Password </button>
                            {/* <button onClick={()=>navigate('/login')} className='border py-1 w-full text-lg font-semibold text-white bg-green-500 hover:bg-green-600 rounded-sm'> Login </button> */}
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}

export default ForgetPassword