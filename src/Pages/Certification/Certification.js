import React from 'react'
import certblue2 from '../../Assets/images/certblue2.svg'
import logo from '../../Assets/logo/logo.png'
import './print.css'

function Certification() {
  const certificateData = {
    name:'Monu Khan',
    courseName:'FULL PYTHON FOR BEGINNER COURSE',
    completedOn:'july 2022'
  }
  return (
    <>

      <div className='w-2/3 mx-auto relative ' id='certificate'>
        <img className='' src={certblue2} />
        <div className='w-full h-full absolute top-40 left-0 flex px-40'>
          <div className='w-full h-full'>
            <div className='text-center text-5xl font-semibold leading-7 text-gray-800'>CERTIFICATE <br/><span className='text-xl'>OF COMPLETION</span></div>
            <div className='font-custom-montserrat text-center font-bold text-4xl mt-20'>{certificateData?.name}</div>
            <div className='text-center text-xl text-gray-700 mt-2 font-custom-lora'>This is to certify that <span>{certificateData?.name}</span> has successfully completed the <span>{certificateData?.courseName}</span> on <span>{certificateData?.completedOn}</span>.</div>

           <div className="mt-10 text-center">
           <span className='px-4 py-1 rounded-full bg-blue-400 text-white shadow-xl border border-white'><img className='inline w-5' src={logo} /> Emphasis Ranchi</span>
           </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Certification