import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { FiAlertCircle } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { CgClose } from 'react-icons/cg';
import { Navigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import axios from 'axios';
import { useState } from 'react';
import ApiList from '../../../Components/Api/ApiList';



function AddNewCourse(props) {

    const { api_AddNewCourse, bearerHeader } = ApiList()

    const [imageFileValue, setImageFileValue] = useState()

    const navigate = useNavigate();


    //Fromik Start From Here

    const validationSchema = yup.object({
        // courseName: yup.string().required('Enter Center Code'),
        // description: yup.string().required('Require'),
        // featureImage: yup.string().required('Require'),
        // CenterPhone: yup.string().required('Require'),


    })

    const saveData = (data, e) => {


        let formData = new FormData();

        formData.append('courseName', data.courseName);
        formData.append('fee', data.offerPrice);


        formData.append('description', data.description,);
        formData.append('featureImage', imageFileValue);
        formData.append('categoryId', data.categoty.replace(/[ ,]+/g, ","));

        const payload = {
            "courseName": data.courseName,
            "fee": data.description,
            "discount": imageFileValue,
            "finalPrice": data.categoty.replace(/[ ,]+/g, ","),
        }

        console.log("=========formData", formData)

        axios.post(api_AddNewCourse, formData, bearerHeader)
            .then((res) => {
                if (res.data.status) {
                    console.log("Course Added Successfully", res)
                } else {
                    console.log("Failed to add new course", res)
                }
            })
            .catch((err) => {
                console.log("Exception while adding Course", err)
            })

    }


    const handleOnChange = (event) => { };

    const formik = useFormik({
        initialValues: {
            courseName: '',
            description: '',
            featureImage: '',
            categoty: '',
            offerPrice: '',
            regularPrice: ''
        },
        onSubmit: (values, { resetForm }) => {
            // alert(JSON.stringify(values, null, 2));
            // saveData(values)

            console.log("this formil value..", values)

        }, validationSchema,
    });


    return (
        <>

            <div className='overflow-auto'>
                <div className=" bg-white border-gray-50 md:p-2 p-5">

                    <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>

                        <div className=''>
                            <div className=" lg:col-span-3 lg:p-6">
                                <h1 className='mb-3 text-2xl text-center font-semibold'>Add New Course</h1>
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                        <div className='relative'>
                                            <label>Course Name</label>
                                            <input
                                                onChange={formik.handleChange}
                                                className="w-full rounded-md border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1"
                                                placeholder="Current Affairs Title"
                                                type="text"
                                                name="courseName"
                                            />
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.courseName && formik.errors.courseName ? formik.errors.courseName : null}</p>

                                        </div>
                                        <div>
                                            <label>Description</label>
                                            <textarea
                                                onChange={formik.handleChange}
                                                name="description"
                                                className="w-full rounded-md border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1"
                                                placeholder="Center Name"
                                                type="text"
                                            />
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.description && formik.errors.description ? formik.errors.description : null}</p>
                                        </div>
                                        <div className='flex space-x-4'>
                                            <div className='relative'>
                                                <label>Regular Price</label>
                                                <input
                                                    onChange={formik.handleChange}
                                                    className="w-full rounded-md border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1"
                                                    placeholder="Regular Price"
                                                    type="number"
                                                    name="regularPrice"
                                                />
                                                <p className='text-red-500 text-xs absolute'>{formik.touched.regularPrice && formik.errors.regularPrice ? formik.errors.regularPrice : null}</p>
                                            </div>
                                            <div className='relative'>
                                                <label>Offer Price</label>
                                                <input
                                                    onChange={formik.handleChange}
                                                    className="w-full rounded-md border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1"
                                                    placeholder="Offer Price"
                                                    type="number"
                                                    name="offerPrice"
                                                />
                                                <p className='text-red-500 text-xs absolute'>{formik.touched.offerPrice && formik.errors.offerPrice ? formik.errors.offerPrice : null}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p>File upload</p>
                                            <input
                                                onChange={(e) => setImageFileValue(e.target.files[0])}
                                                className="form-control"
                                                name="docPath"
                                                type="file"
                                            />

                                            {/* <Thumb file={values.file} /> */}
                                        </div>

                                        <div>
                                            <label for="categoty">Category</label>
                                            <select
                                                onChange={formik.handleChange}
                                                name="categoty"
                                                className="w-full rounded-md border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1"
                                                placeholder="categoty"
                                                type="text"
                                            >
                                                <option> Select</option>
                                                <option value="Category1">Category 1</option>
                                                <option value="Category2">Category 2</option>
                                                <option value="Category3">Category 3</option>
                                            </select>
                                            <p className='text-red-500 text-xs absolute'>{formik.touched.categoty && formik.errors.categoty ? formik.errors.categoty : null}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 md:space-x-3 space-y-2 ">
                                    <button type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-green-600 px-5 py-3 text-white sm:w-auto">
                                        <span className="font-medium"> Save Data </span>
                                    </button>
                                    <button onClick={() => navigate(-1)} className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white sm:w-auto"><span className="font-medium">Cancel</span></button>
                                </div>
                            </div>

                        </div>


                    </form>

                </div>
            </div>

        </>
    );
}

export default AddNewCourse

/*
Exported to -
CourseList.js
*/