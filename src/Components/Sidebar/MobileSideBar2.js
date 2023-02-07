import React from 'react'
import AuthIndex from '../Auth/AuthIndex';
import AdminMenuList from './AdminMenuList'
import PublicMenuList from './PublicMenuList';
import StudentMenuList from './StudentMenuList';
import { AiFillHome } from 'react-icons/ai'
import { BsFillBookmarksFill } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import profileImage from '../../Assets/images/profile.jpg'
import { GiHamburgerMenu } from 'react-icons/gi'

function MobileSideBar() {
    const { isLogedIn, bearerHeader, userIs } = AuthIndex();
    return (
        <>
            <button class="bg-hamburger  peer text-2xl z-50" id="button_aside">
                <GiHamburgerMenu className="inline" />
            </button>
            <aside class="fixed top-14 -[233px] h-full -left-[233px] peer-focus:left-0 ease-out delay-150 duration-300" id="aside">

                <div className='w-full h-screen pt-3'>

                    <div className="sidebar fixed top-14 bottom-0 lg:left-0 p-2 w-[220px] overflow-y-auto text-center bg-gray-800">
                        <div className='flex justify-center'>
                            <div className='bg-white rounded-full h-20 w-20 overflow-hidden flex justify-center items-center border-2 '>
                                <img src={profileImage} alt="Profile" />
                            </div>

                        </div>
                        <div>
                            <span className='text-white font-custom-lora'>Henry Steven</span>
                        </div>

                        {/* DIVIDER LINE */}
                        <div className="my-4 bg-gray-600 h-[1px]" />
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                            <AiFillHome className="inline" />
                            <span className="text-sm ml-4 text-gray-200 font-bold">Home</span>
                        </div>
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                            <BsFillBookmarksFill className="inline" />
                            <span className="text-sm ml-4 text-gray-200 font-bold">Bookmark</span>
                        </div>


                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                            <BiLogOut className="inline" />
                            <span className="text-sm ml-4 text-gray-200 font-bold">Logout</span>
                        </div>
                    </div>
                </div>

                <h1 class="text-[#6164E8] font-bold text-[13px] mt-8 text-center">

                    {!isLogedIn && "Welcome"}
                    {isLogedIn && userIs === 1 && "Student"}
                    {isLogedIn && userIs === 9 && "Admin"}

                </h1>
                <div className='text-left mx-8'>

                    {isLogedIn && userIs === 9 && <AdminMenuList />}
                    {isLogedIn && userIs === 1 && <StudentMenuList />}
                    <PublicMenuList />

                </div>
            </aside>
        </>
    )
}

export default MobileSideBar


/*

Exported to -
1. HeaderIndex.js
*/