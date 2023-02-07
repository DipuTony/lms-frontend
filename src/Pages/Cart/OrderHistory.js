import React from 'react'
import python from '../../Assets/images/python.png'
import js from '../../Assets/images/js.png'

function OrderHistory() {

    const orderHIstory = [
        { id: 1, courseName: 'Python Course', duration:'02:50 M',author:'Avinash, The Codex', orderId: 'C-10101', purchaseDate: '20-12-2022', price: 4355, padiStatus: true },
        { id: 2, courseName: 'Javascript ES6', duration:'04:50 M',author:'Henry, The Codex', orderId: 'C-10101', purchaseDate: '20-12-2022', price: 4355, padiStatus: true },
        { id: 3, courseName: 'Java Course', duration:'05:00 M',author:'David, The Codex', orderId: 'C-10101', purchaseDate: '20-12-2022', price: 4355, padiStatus: true },
        { id: 4, courseName: 'React Course', duration:'01:35 M',author:'Hello, The Codex', orderId: 'C-10101', purchaseDate: '20-12-2022', price: 4355, padiStatus: false },
    ]
    return (
        <>
            {/* component */}
            <div className="bg-white py-8 px-6 sm:p-8 rounded-md w-full">
                <div className=" flex flex-col sm:flex-row items-center justify-between pb-4">
                    <div >
                        <h2 className="text-gray-600 text-lg font-bold">Courses Order History</h2>
                        <span className="text-sm font-custom-lora">All purchased course.</span>
                    </div>
                    <div className="flex items-center justify-between mt-4 sm:mt-0">
                        <div className="flex bg-gray-50 items-center p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                            <input className="bg-gray-50 outline-none ml-1 block " type="text" name id placeholder="search..." />
                        </div>

                    </div>
                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-1 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            #
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Course Name
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Order-Id
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Purchase-Date
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderHIstory?.map((data,index) => (

                                        <tr>
                                            <td className="px-2 py-3  text-left text-xs font-semibold text-gray-500 ">
                                                {index+1}
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img className="w-full h-full rounded-full" src={python} alt />
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 font-semibold whitespace-no-wrap">
                                                                {data?.courseName}
                                                            </p>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-700 text-sm whitespace-no-wrap">
                                                                {data?.duration}
                                                            </p>
                                                        </div>
                                                        <div className="ml-3">
                                                            <p className="text-gray-700 s whitespace-no-wrap font-custom-lora">
                                                                {data?.author}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">{data?.orderId}</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {data?.purchaseDate}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">
                                                    {data?.price}
                                                </p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <span className={`${data?.padiStatus ?'text-green-900':'text-red-900'} relative inline-block px-3 py-1 font-semibold leading-tight`}>
                                                    <span aria-hidden className={`${data?.padiStatus?'bg-green-200':'bg-red-200'} absolute inset-0 bg-green-200 opacity-50 rounded-full`} />
                                                    <span className="relative">{data?.padiStatus ? 'Paid':'Pending..'}</span>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    Showing 1 to 4 of 50 Entries
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default OrderHistory