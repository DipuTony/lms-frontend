import {useState,useEffect} from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'


function ProfileForm() {

    
    const [apartmentListByWard, setapartmentListByWard] = useState()
    const [consumerTypeList, setconsumerTypeList] = useState()
    const [isCommercial, setisCommercial] = useState(false)

    // const {type} = useParams()
    // console
    const [formMasterData, setformMasterData] = useState(false)
    const [flatStatus, setFlatStatus] = useState(false)
    const validationSchema = yup.object({
        wardNo: yup.string().required('Select ward'),
        holdingNo: yup.string(),
        consumerName: yup.string().required('Enter consumer name'),
        mobileNo: yup.string().required('Enter mobile no.'),
        address: yup.string().required('Enter address'),
        pinCode: yup.string().required('Enter Pin Code'),
        consumerCategory:yup.string(),
        consumerType: yup.string(),
        // demandFrom: yup.string().required('Select demand upto')
    })
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            gender: '',
            phone: '',
            email: '',
            dob: '',
            currentAddress: '',
            permanentAddress: '',
            aboutInfo:''
        },

        onSubmit: (values, resetForm) => {
        }
        , validationSchema
    })

    
    if ('edit' == 'edit') {
        formik.initialValues.wardNo = ''
       
    }

    useEffect(() => {
    //    if(props.addType=='add_flat'){

    //     getApartmentDetailsByWard(addFlatData?.flatWard)
    //     setFlatStatus(true)
        
    //    }
    }, [])

   
    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        
        // { name == 'holdingNo' && formik.setFieldValue("holdingNo", allowCharacterNumberInput(value, formik.values.holdingNo, 20)) }
        // { name == 'consumerName' && formik.setFieldValue("consumerName", allowCharacterNumberSpaceInput(value, formik.values.consumerName, 100)) }
        // { name == 'firmName' && formik.setFieldValue("firmName", allowCharacterNumberSpaceInput(value, formik.values.firmName, 100)) }
        // { name == 'mobileNo' && formik.setFieldValue("mobileNo", allowNumberInput(value, formik.values.mobileNo, 10)) }
        // { name == 'address' && formik.setFieldValue("address", allowCharacterNumberSpaceInput(value, formik.values.address, 200)) }
        // { name == 'pinCode' && formik.setFieldValue("pinCode", allowNumberInput(value, formik.values.pinCode, 10)) }
    }
   
  return (
    <>
    <div className=" w-full md:px-0 bg-white">
                {/* <h1 className='mt-6 mb-2 font-serif font-semibold text-gray-600'><RiBuilding2Fill className="inline mr-2" />Add Consumer</h1> */}

                <div className="block md:p-4 w-full px-6 bg-white  py-2  md:py-4 rounded-lg mx-auto md:mx-0">
                    <form onSubmit={formik.handleSubmit} onChange={handleChange}>
                        <div className="grid grid-cols-1 md:grid-cols-4">
                            <div className={`col-span-4 grid grid-cols-1 md:grid-cols-4  md:pr-36`}>
                              <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Firt Name <span className='text-red-500'>*</span></label>
                                    <input  {...formik.getFieldProps('firstName')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                         />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}</span>
                                </div>
                               <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Last Name<span className='text-red-500'>*</span></label>
                                    <input  {...formik.getFieldProps('lastName')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                       />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}</span>
                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Gender<span className='text-red-500'>*</span></label>
                                    <select {...formik.getFieldProps('gender')} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                    >
                                        <option>--select--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                        

                                    </select>
                                    <span className="text-red-600 absolute text-xs">{formik.touched.gender && formik.errors.gender ? formik.errors.gender : null}</span>
                                </div>
                                
                                <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Phone</label>
                                    <input {...formik.getFieldProps('phone')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.phone && formik.errors.phone ? formik.errors.phone : null}</span>
                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Email<span className='text-red-500'>*</span></label>
                                    <input {...formik.getFieldProps('email')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</span>
                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">DOB<span className='text-red-500'>*</span></label>
                                    <input {...formik.getFieldProps('dob')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                         />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.dob && formik.errors.dob ? formik.errors.dob : null}</span>
                                </div>
                                
                                <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">current Address <span className='text-red-500'>*</span></label>
                                    <input {...formik.getFieldProps('currentAddress')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.currentAddress && formik.errors.currentAddress ? formik.errors.currentAddress : null}</span>
                                </div>
                                
                                <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Permanent Address <span className='text-red-500'>*</span></label>
                                    <input {...formik.getFieldProps('permanentAddress')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.permanentAddress && formik.errors.permanentAddress ? formik.errors.permanentAddress : null}</span>
                                </div>
                                <div className="form-group mb-4 md:mb-6 col-span-3 md:col-span-1 md:px-4">
                                    <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">About<span className='text-red-500'>*</span></label>
                                    <input {...formik.getFieldProps('about')} type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                                        />

                                    <span className="text-red-600 absolute text-xs">{formik.touched.about && formik.errors.about ? formik.errors.about : null}</span>
                                </div>
                                
                            
                            </div>


                            <div className="col-span-4 grid grid-cols-2">

                                <div className='md:px-5'>
                                    {/* <button onClick={() => navigate(-1)} type='bittpm' className=" px-6 py-2.5 bg-gray-300 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg transition duration-150 ease-in-out">Back</button> */}
                                </div>
                                <div className='md:px-10 text-right'>
                                    <button type='submit' className=" px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight  rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>

                                </div>

                            </div>

                        </div>

                    </form>
                </div>
            </div>
    </>
  )
}

export default ProfileForm