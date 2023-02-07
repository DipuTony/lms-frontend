import React from 'react'
import { useParams } from 'react-router-dom'
import demoImg from '../../Assets/images/img1.jpeg'
import AuthIndex from '../../Components/Auth/AuthIndex';

function SingleCourseView() {

    const { id } = useParams();

    const { isLogedIn, user, bearerHeader } = AuthIndex();

    console.log("=====================", isLogedIn, user, bearerHeader)



    return (
        <>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                fg  {id}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, reiciendis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, reiciendis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, reiciendis?
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, reiciendis?


                <div className='grid grid-cols-12'>
                    <div className='col-span-9 mx-3'>

                        <div className='grid grid-cols-12 border bg-white rounded-2xl'>
                            <div className='col-span-4 '>
                                <img src={demoImg} alt="" className='h-full rounded-l-2xl' />
                            </div>
                            <div className='col-span-8 p-4'>
                                <h1 className='text-xl font-semibold mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                                <p>Mollitia doloremque perferendis distinctio inventore velit consectetur, magni ratione est! Dolor quaerat obcaecati, molestias laborum distinctio commodi doloribus laboriosam.</p>
                                <button className='bg-green-600 my-2 px-5 py-1 rounded-sm text-white'>Enroll Now</button>
                            </div>
                        </div>

                        <div className='bg-white rounded-md p-5 my-5'>
                            <h1 className='font-semibold'>Description</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum inventore dicta, aspernatur optio tempora minima iste tenetur quibusdam nostrum quis adipisci accusamus autem eveniet culpa incidunt odit molestiae neque eum reprehenderit sequi laudantium dolore animi esse. Adipisci, hic in!</p>
                            <p className='text-blue-500 font-semibold cursor-pointer'>Read More</p>
                        </div>


                    </div>
                    <div className='col-span-3'>
                        <div className='border bg-white rounded-md p-2'>
                            <p>Purchasing in Bihar CHANGE</p>
                            <p>Coupon Code Available View All</p>
                        </div>
                        <div className='border bg-white my-1 rounded-md p-2'>
                            PRICE DETAILS
                            <p>
                                Course Price ₹ 30,000/-
                            </p>
                            <p>
                                G.S.T. (0%) + ₹0/-
                            </p>
                            <p>
                                Discount - ₹ 15,000/-
                            </p>
                            <p className='border-b mx-5'></p>
                            <p>Internet Handling Charges  ₹ 394.09/-</p>
                            <p className='border-b mx-5'></p>
                            <p>Amount Payable ₹ 15,394.09/- </p>

                            <div className='flex justify-center my-5'>
                                <button className='bg-blue-800 px-3 py-1 rounded-sm text-white'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SingleCourseView