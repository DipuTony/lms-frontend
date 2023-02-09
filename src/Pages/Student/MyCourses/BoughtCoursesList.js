import React from 'react'
import ProgressBar from '../../../Components/Common/ProgressBar'

const BoughtCoursesList = () => {
    const fakeData = [
        { "id": 1, name: "This is First", "percentage": 40, imgUrl: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" },
        { "id": 2, name: "This is Secound", "percentage": 20, imgUrl: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" }
        , { "id": 3, name: "This is Secound", "percentage": 30, imgUrl: "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg" }
    ]


    let a = 20
    return (
        <>
            <div> Your Purchesed Courses </div>

            <div className='grid col-span-1 md:grid-cols-12 xl:md:grid-cols-12 md:space-x-5'>

                {fakeData &&
                    fakeData.map((item, i) => (
                        <div className='col-span-1 md:col-span-2 my-5'>
                            <div key={i} className='border border-gray-300 rounded-md bg-gray-100'>
                                <img className='h-52 w-full' src={item?.imgUrl} alt={item?.name} srcset="" />
                                <p className='m-2 text-2xl font-semibold'>{item?.name}</p>

                                <ProgressBar percentage={item.percentage} />
                                <div className='m-3'>
                                    <button className='bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded w-full'>Start</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default BoughtCoursesList
