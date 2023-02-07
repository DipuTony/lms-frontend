import axios from 'axios'
import React from 'react'
import { VscClose } from 'react-icons/vsc'
import ApiList from '../../Components/Api/ApiList'
// import { FaBVscCloseeer } from 'react-icons/fa';

function CartIndex() {
    const { api_stripePayment, header } = ApiList()

    const cartData = [
        { id: 1, "productName": "This is forst course", subTitle: "This is Sub tiitle", "price": 100, "img": "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" }
        , { id: 2, "productName": "This is forst course", subTitle: "This is Sub tiitle", "price": 100, "img": "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" }
        , { id: 3, "productName": "This is forst course", subTitle: "This is Sub tiitle", "price": 100, "img": "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" }
    ]

    const payNow = () => {
        console.log("Clicke pay button")

        axios.post(api_stripePayment, {}, header)
            .then((res) => (
                console.log("Stripe pay", res)
            ))
            .catch((err) => console.log("Error while pay", err))

    }

    return (
        <>
            <div className='bg-gray-100'>
                <div className='grid grid-cols-12 md:p-10 p-3 mt-10 md:space-x-4 md:mx-10'>
                    <div className='md:col-span-8 col-span-12'>
                        <div className='flex flex-col border border-gray-50 rounded-md shadow-lg md:p-5 md:mt-0 mt-5 bg-white'>
                            <p className='text-center text-xl font-semibold mb-5'>Course Cart Page</p>
                            <table className=''>
                                <thead className="text-xs font-semibold uppercase text-gray-900 border-b">
                                    <tr>
                                        <th></th>
                                        <th className="p-2">
                                            <div className="font-semibold text-left">Product Name</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-center">Quantity</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-center">Total Fee</div>
                                        </th>
                                        <th className="p-2">
                                            <div className="font-semibold text-center">Action</div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="text-sm divide-y divide-gray-100">

                                    {
                                        cartData.map((item) => (

                                            <tr>
                                                <td>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-gray-800 flex">
                                                        <p><img src={item?.img} alt="Course Image" className='md:w-10 w-20 h-10 rounded-md shadow-md' /></p>
                                                        <p className='mx-3'>
                                                            <p className='font-semibold'> Samsung Galaxy Note 4</p>
                                                            <p className='text-xs text-gray-500'> Type : New</p>
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center">1</div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="text-center font-medium text-gray-800">
                                                        ${item.price}
                                                    </div>
                                                </td>
                                                <td className="p-2">
                                                    <div className="flex justify-center cursor-pointer">
                                                        < VscClose className='hover:bg-gray-300 hover:text-white rounded-sm' />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className='md:col-span-4 col-span-12 my-3 md:my-0 rounded-lg'>
                        <div className='border border-gray-50 py-2 shadow-lg px-2 pl-8 bg-white'>
                            <div className='grid grid-cols-2'>
                                <div className='col-span-1 space-y-1'>
                                    <p className='text-sm'>Subtotal</p>
                                    <p className='text-sm'>Shipping Cost</p>
                                    <p className='text-sm'>Discount</p>
                                    <p className=' text-base font-semibold'>Total Payble</p>
                                </div>
                                <div className='col-span-1 space-y-1'>
                                    <p className='text-sm'>$108</p>
                                    <p className='text-sm'>$10.85</p>
                                    <p className='text-sm'>$9.14</p>
                                    <p className='text-base font-semibold w-fit'>$200</p>
                                </div>
                            </div>
                            <p className='border-b my-3'></p>

                            <div className=''>
                                <div>
                                    {/* <p className='font-semibold text-gray-600'>Coupon Code</p> */}
                                    {/* <p className='text-xs text-gray-500'>Enter Code to get discount instantly</p> */}
                                    <p className='border-gray-300 my-2 mr-20'></p>
                                </div>

                                <div className='rounded-sm '>
                                    <input type="text" className='px-2 border-none outline-none placeholder:text-sm' placeholder='Coupon Code' />
                                    <button className='bg-gray-700 text-white px-3 py-1 m-1 rounded-sm text-sm'> Apply</button>
                                </div>
                            </div>
                            <p className='border-b my-3'></p>
                            <div>
                                <p className='pb-2 font-semibold text-base text-gray-600'>Payment Method</p>
                                <div className='font-semibold px-5'>
                                    <p><input type="radio" name="paymentOption" id="" /> Paypal</p>
                                    <p><input type="radio" name="paymentOption" id="" /> Stripe</p>
                                </div>
                            </div>
                            <p className='border-b my-4'></p>
                            <div>
                                <button onClick={payNow} className='bg-indigo-600 w-full rounded-sm text-white py-1'>Place Order</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartIndex