import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ApiList from '../Api/ApiList'
import profileImage from '../../Assets/images/profile.jpg'
// import MenuList from './AdminMenuList';
import AuthIndex from '../Auth/AuthIndex';
import AdminMenuList from './AdminMenuList';
import { AiFillHome } from 'react-icons/ai'
import { GiTeacher } from 'react-icons/gi'
import { AiOutlineDashboard } from 'react-icons/ai'
import { GiOpenBook } from 'react-icons/gi'
import { FaUserGraduate } from 'react-icons/fa'
import { BiLogOut } from 'react-icons/bi'
import { MdPaid } from 'react-icons/md'


function AdminSidebarIndex() {

    const { userType } = ApiList();

    const { userIs } = AuthIndex();

    return (
        <>

            <div className='w-full h-screen pt-3'>

                <div className="sidebar fixed top-14 bottom-0 lg:left-0 p-2 w-[220px] overflow-y-auto text-center bg-gray-800">
                    <div className='flex justify-center'>
                        <div className='bg-white rounded-full h-20 w-20 overflow-hidden flex justify-center items-center border-2 '>
                            <img src={profileImage} alt="Profile" />
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold text-white'>{userType || "Guest"}</p>
                        <span className='text-white font-custom-lora'>Henry Steven</span>
                    </div>

                    {/* DIVIDER LINE */}
                    <div className="my-4 bg-gray-600 h-[1px]" />
                    {userIs == 9 &&   // This is For Admin
                        <>
                            {/* <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                <AiFillHome className="inline" />
                                <span className="text-sm ml-4 text-gray-200 font-bold">Home</span>
                            </div>
                            </Link> */}

                            <Link to="/dashboard">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <AiOutlineDashboard className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">Dashboard</span>
                                </div>
                            </Link>

                            <Link to="/CourseList">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <GiOpenBook className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">Course List</span>
                                </div>
                            </Link>

                            <Link to="/StudentsList">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <FaUserGraduate className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">Students</span>
                                </div>
                            </Link>

                            <Link to="/TeachersList">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <GiTeacher className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">Teachers</span>
                                </div>
                            </Link>

                        </>

                    }
                    {userIs == 1 &&  // This is for Student
                        <>
                            <Link to="/StudentDahboard">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <AiOutlineDashboard className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">Dashboard</span>
                                </div>
                            </Link>

                            <Link to="/my-courses">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <GiOpenBook className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">My Course</span>
                                </div>
                            </Link>
                            <Link to="/order-history">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <MdPaid className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">Order History</span>
                                </div>
                            </Link>
                            <Link to="/certificates">
                                <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                                    <FaUserGraduate className="inline" />
                                    <span className="text-sm ml-4 text-gray-200 font-bold">Certificates</span>
                                </div>
                            </Link>

                        </>

                    }
                    <Link to="/logout">
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                            <BiLogOut className="inline" />
                            <span className="text-sm ml-4 text-gray-200 font-bold">Logout</span>
                        </div>
                    </Link>
                </div>
            </div >

            {/* <div className='w-full h-screen bg-white shadow-xl pt-3'>

                <div className='flex justify-center'>
                    <img src={profileImage} alt="Profile" className='w-1/3 rounded-t-full' />
                </div>

                <div className='text-center'>
                    <p>Welcome </p><p className='font-semibold'>{userType || "Guest"}</p>
                    <p className='border-b mx-5'></p>
                </div>
                <p className='py-5'></p>
                <div className='text-left mx-8'>
                    <AdminMenuList />
                </div>

            </div> */}

        </>
    )
}

export default AdminSidebarIndex

/*
Exported to - 
App.js
*/