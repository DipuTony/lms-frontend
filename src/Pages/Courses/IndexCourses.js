import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai'
import { TbLayoutGrid } from 'react-icons/tb'
import { BiRupee } from 'react-icons/bi'
import demoImg from '../../Assets/images/img1.jpeg'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { cartCountContext } from '../../Components/Common/Context/CartCountContext'
import { useContext } from 'react'

function IndexCourses() {
    const { updateCartCount } = useContext(cartCountContext);
    const navigate = useNavigate()

    const [cartItem, setCartItem] = useState([])
    const [itemInLSCart, setItemInLSCart] = useState([])



    const handleAddtoCart = (id, name, price) => {

        const cartItem1 = {
            id: id,
            name: name,
            price: price
        }

        setCartItem([...cartItem, cartItem1])
    }

    useEffect(() => {
        localStorage.setItem("cartData", JSON.stringify(cartItem))
        setItemInLSCart(JSON.parse(localStorage.getItem('cartData')))

        updateCartCount(JSON.parse(localStorage.getItem('cartData')).length)

    }, [cartItem])

    // useEffect(() => {
    //     updateCartCount(JSON.parse(localStorage.getItem('cartData')).length)

    // }, [])



    const fakeData = [
        { "id": 1, "name": "This is Secound Course", "desc": "This is secound description of course", "fullprice": 900, "discount": 9, "finalprice": 600, "image": demoImg },
        { "id": 2, "name": "This is Secound Course", "desc": "This is secound description of course", "fullprice": 1200, "discount": 15, "finalprice": 850, "image": demoImg },
        { "id": 3, "name": "This is Secound Course", "desc": "This is secound description of course", "fullprice": 1200, "discount": 15, "finalprice": 850, "image": demoImg },
        { "id": 4, "name": "This is Secound Course", "desc": "This is secound description of course", "fullprice": 1200, "discount": 15, "finalprice": 850, "image": demoImg },
        { "id": 5, "name": "This is First Course", "desc": "This is description of course this course", "fullprice": 1100, "discount": 10, "finalprice": 900, "image": demoImg },
    ]


    return (
        <>
            <div className=''>
                <div className='bg-white rounded-md min-h-screen'>

                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">

                            <div className='flow-root border px-8 py-4 rounded-lg my-4 bg-sky-100'>
                                <div className='float-left flex space-x-10'>
                                    <div>
                                        <span className='font-semibold mr-4'>Category</span>
                                        <span>
                                            <select name="" id="" className='border border-gray-400 outline-1 outline-blue-500 rounded-lg py-2 px-3 bg-transparent'>
                                                <option value="">All</option>
                                                <option value="">Latest</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div>
                                        <span className='font-semibold mr-4'>Subject</span>
                                        <span>
                                            <select name="" id="" className='border border-gray-400 outline-1 outline-blue-500 rounded-lg py-2 px-3 bg-transparent'>
                                                <option value="">All</option>
                                                <option value="">Latest</option>
                                            </select>
                                        </span>
                                    </div>
                                </div>
                                <div className='float-right flex space-x-2'>
                                    <p className='border hover:bg-white hover:text-black rounded-sm p-1 cursor-pointer bg-blue-600 text-white'>
                                        <TbLayoutGrid size={25} />
                                    </p>
                                    <p className='border bg-white rounded-sm p-1 cursor-pointer hover:bg-blue-600 hover:text-white'>
                                        <AiOutlineBars size={25} />
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

                            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {fakeData.map((product) => (
                                    <div className='rounded-md bg-gray-100 pb-5 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                                        <div onClick={() => navigate(`/courses/${product.id}`)} key={product.id} className="cursor-pointer group relative border rounded-md">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className=""
                                            />
                                            <div className="mt-4 flex justify-between">
                                                <div>
                                                    <h3 className="text-sm text-gray-700">
                                                        <p>{product.name}</p>
                                                        <p>{product.desc.slice(0, 50)}</p>
                                                    </h3>
                                                    <p className="mt-1 text-sm text-gray-500">{product.discount}%</p>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">{product.finalprice}</p>
                                            </div>
                                        </div>
                                        {itemInLSCart?.find(i => i?.id == product?.id) ?
                                            <div className='mx-5'><button onClick={() => navigate('/cart')} className='bg-green-500 px-5 rounded-sm py-1 w-full'>Go to Cart</button></div>
                                            :
                                            <div className='mx-5'><button onClick={() => handleAddtoCart(product.id, product.name, product.finalprice)} className='bg-indigo-500 px-5 rounded-sm py-1 w-full'>Add to Cart</button></div>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default IndexCourses