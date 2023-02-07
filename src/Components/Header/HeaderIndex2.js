import React, { useEffect, useState } from 'react'
import { FiLogOut } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthIndex from '../Auth/AuthIndex';
import HeaderIcons from './HeaderIcons';
import { CgMenu } from 'react-icons/cg';
import logo from '../../Assets/logo/logo.png';
import MobileSideBar from '../Sidebar/MobileSideBar';
import MobileSideBar2 from '../Sidebar/MobileSideBar2';
import { GrCart } from 'react-icons/gr';

import { cartCountContext } from '../Common/Context/CartCountContext';
import { useContext } from 'react';


function HeaderIndex() {

    const{cartCount} = useContext(cartCountContext)

    const navigate = useNavigate()

    const { isLogedIn, bearerHeader, userIs } = AuthIndex();

    const [opneMobileSideBar, setOpneMobileSideBar] = useState(false)

    const handeSideMenuIcon = () => {
        console.log("Side Icon Cliked in HeaderIndex")
        setOpneMobileSideBar(!opneMobileSideBar)
    }

    const close = () => {
        console.log("close called")
        setOpneMobileSideBar(false)
    }
// console.log("========",JSON.parse(localStorage.getItem('cartData')))


    return (
        <>
            <div className="fixed top-0 flex bg-white z-50 py-2 items-center px-2 md:px-10 w-full shadow-lg">

                <div className='flex-initial md:hidden'>
                    <MobileSideBar2 />
                </div>

                <div className="flex-initial hidden md:flex">
                    <div className="flex-initial"><img src={logo} alt="Logo" className='h-8' /></div>
                    <div className="flex-initial"><span onClick={() => navigate("/")} className='text-xl hidden md:block font-semibold md:mx-3 ml-8'> Emphasis Ranchi </span></div>
                </div>
                <div className="flex-initial flex border border-gray-700  rounded-3xl px-2 h-8 md:h-10 w-1/2 md:w-auto ml-10">
                    <div className='flex-initial'><GoSearch size={20} className='mt-2' /></div>
                    <div className="flex-1"> <input type="text" className='px-4 bg-transparent text-sm py-2 rounded-3xl outline-none placeholder:text-sm' placeholder='Search Courses' /></div>
                </div>
                <div className='flex-1 hidden md:block'>
                    <div className='flex float-right'>
                        <div className='space-x-4 flex'>

                            {isLogedIn && userIs == 9 && <Link className="hover:text-blue-600" to="/dashboard">Dashboard</Link>}
                            {isLogedIn && userIs == 1 && <Link className="hover:text-blue-600" to="/StudentDahboard">Dashboard</Link>}

                            <Link className="hover:text-blue-600" to="/">Home</Link>
                            <Link className="hover:text-blue-600" to="/courses">Courses</Link>
                            <Link className="hover:text-blue-600" to="/contact">Contact</Link>
                            <Link className="hover:text-blue-600" to="/about">About</Link>
                            
                            <div onClick={()=>navigate('/cart')} className='cursor-pointer'>
                                <span className='bg-purple-500 text-white text-base rounded-full px-2 absolute ml-3 -mt-2'>{cartCount}</span>
                                <GrCart size={25} />
                            </div>

                            {
                                isLogedIn ?
                                    <Link className='border bg-red-500 px-5 py-1.5 shadow-md rounded-md text-white' to="logout">Log Out</Link>
                                    :
                                    <>
                                        <Link className='border border-black hover:bg-gray-100 px-5 py-1.5  text-black' to="/login">Login</Link>
                                        <Link className='border border-black bg-black hover:bg-gray-800 px-3 py-1.5  text-white' to="/register">Sign Up</Link>
                                    </>
                            }

                        </div>

                    </div>

                </div>
                <div className='flex-1 md:hidden'>
                    <HeaderIcons />
                </div>
            </div>
        </>
    )
}

export default HeaderIndex