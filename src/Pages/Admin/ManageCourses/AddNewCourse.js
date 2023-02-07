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



const customStyles = {
    overlay: {
        background: "rgba(0, 0, 0, 0.5)",
        overflowY: "scroll"
    },
    content: {
        top: '60%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'transparent',
        border: 'none',
        height: "600px" //or maxHeight 
    },
};

function AddNewCourse(props) {

    const { api_AddNewCourse, bearerHeader } = ApiList()

    const [imageFileValue, setImageFileValue] = useState()
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    useEffect(() => {
        if (props.openAddPopUP > 0)
            setIsOpen(true);
    }, [props.openAddPopUP])


    function afterOpenModal() {
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        props.refetchList();
    }

    //Fromik Start From Here

    const validationSchema = yup.object({
        // titile: yup.string().required('Enter Center Code'),
        // description: yup.string().required('Require'),
        // featureImage: yup.string().required('Require'),
        // CenterPhone: yup.string().required('Require'),


    })

    const saveData = (data, e) => {

        // console.log("DATA", data)

        // data.preventDefault();

        let formData = new FormData();

        formData.append('titile', data.titile);
        formData.append('description', data.description,);
        formData.append('featureImage', imageFileValue);
        formData.append('categoty', data.categoty.replace(/[ ,]+/g, ","));

        const payload = {
            "titile": data.titile,
            "description": data.description,
            "featureImage": imageFileValue,
            "categoty": data.categoty.replace(/[ ,]+/g, ","),
        }

        console.log("=========formData", formData)

        axios.post(api_AddNewCourse, formData, bearerHeader)
            .then((res) => {
                console.log("Current Affairs Added Successfully", res)
                closeModal()
            })
            .catch((err) => console.log("Exception while adding Current Affairs", err), closeModal())

    }


    const handleOnChange = (event) => { };

    const formik = useFormik({
        initialValues: {
            titile: '',
            description: '',
            featureImage: '',
            categoty: '',
        },
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            // saveData(values)
        }, validationSchema,
    });


    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className='overflow-auto'>
                    <div className=" bg-white rounded-lg shadow-xl border-2 border-gray-50 md:p-2 p-5">
                        <div className='float-right'>
                            <div onClick={closeModal} className='hover:bg-gray-100 rounded-full w-5 cursor-pointer mr-3'>  <CgClose size={20} /></div>
                        </div>
                        <form onSubmit={formik.handleSubmit} onChange={handleOnChange}>

                            <div className=''>
                                <div className=" lg:col-span-3 lg:p-6">
                                    <h1 className='mb-3 text-2xl text-center font-semibold'>Add New Course</h1>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1">
                                            <div className='relative'>
                                                <label>Title</label>
                                                <input
                                                    onChange={formik.handleChange}
                                                    className="w-full rounded-md border-gray-500 p-1.5 text-base border shadow-sm outline-blue-300 outline-1"
                                                    placeholder="Current Affairs Title"
                                                    type="text"
                                                    name="titile"
                                                />
                                                <p className='text-red-500 text-xs absolute'>{formik.touched.titile && formik.errors.titile ? formik.errors.titile : null}</p>

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
                                        <button onClick={closeModal} className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white sm:w-auto"><span className="font-medium">Cancel</span></button>
                                    </div>
                                </div>

                            </div>


                        </form>

                    </div>
                </div>

            </Modal>
        </>
    );
}

export default AddNewCourse

/*
Exported to -
CourseList.js
*/