import { useState } from 'react'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'
import { BiRupee } from 'react-icons/bi'
import pc from './pc.jfif'
import { NavLink, useLocation } from 'react-router-dom'
import { ImList2 } from 'react-icons/im'
import { FiGrid } from 'react-icons/fi'
import { AiOutlineDoubleRight } from 'react-icons/ai'

function Courses() {

    //STATE TO TOGGLE LIST AND GRID VIEW
    const [layoutViewType, setlayoutViewType] = useState('grid')

    const location = useLocation()

    // DUMMY DATA ARRAY TO SHOW COURESES
    const courses = [
        { id: 1, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
        { id: 2, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
        { id: 3, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
        { id: 4, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
        { id: 5, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
        { id: 6, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
        { id: 7, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
        { id: 8, courseName: 'python', title: "Learn Python: The Complete Python Programming Course", author: 'Avinash Jain, The Codex', ratings: 450, price: 4254 },
    ]

    // LIST OF COURSE CATEGORIES
    const CATEGORIES = [
        { id: 1, category: "Python" },
        { id: 2, category: "Java" },
        { id: 3, category: "Javascript" },
        { id: 4, category: "C" },
        { id: 5, category: "C++" },
        { id: 6, category: "React" },
        { id: 7, category: "Flask" },
    ]

    // FUNCTION TO CHANGE LAYOUT VIEW IN LIST OR GRID
    const toggleLayoutView = (type)=>{
        setlayoutViewType(type)
    }
    return (
        <>
            <div className='text-2xl md:text-4xl font-bold text-center'>A broad selection of courses.</div>
            <div className='text-sm text-gray-600 text-center font-custom-lora'>Choose from 213,000 online video courses with new additions published every month</div>



            {/* SPACER */}
            <div className="w-full h-5"></div>
            <div className="grid grid-cols-10 md:space-x-5">

                {/* SEARCH CATEGORY */}
                <div className="col-span-10 grid grid-cols-10 ">
                    <div className="col-span-10 md:col-span-2  px-4">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Search Courses</label>
                        <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md"
                            placeholder="Search" type="text" /> </div>
                    <div className="col-span-10 md:col-span-2 px-4 mt-2 md:mt-0">
                        <label className="form-label inline-block mb-1 text-gray-600 text-sm font-semibold">Categories</label>
                        <select className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none placeholder-gray-300 shadow-md cursor-pointer">
                            {CATEGORIES?.map((data) => (
                                <option value={data?.category}>{data?.category}</option>
                            ))}

                        </select>
                    </div>
                    <div className="col-span-6 text-right hidden sm:block">
                        <ImList2 onClick={()=>toggleLayoutView('list')} className='inline cursor-pointer hover:scale-110 mr-3 font-bold' /> <FiGrid onClick={()=>toggleLayoutView('grid')} className='inline cursor-pointer hover:scale-110 font-bold' />
                    </div>
                </div>
                <div className="col-span-10 md:mb-2 md:mt-2 hidden sm:block">
                    <hr />
                </div>
                {/* GRID VIEW LAYOUT */}
                { layoutViewType=='grid' &&
                    courses?.map((course, index) => (

                        <div className="col-span-10 md:col-span-2 mt-8 md:mt-0 px-4 md:px-0 sm:mb-4">
                            <NavLink to={`/course-details/${course?.courseName}/${window.btoa(course?.id)}`}>
                                <div class="w-full rounded overflow-hidden shadow-lg pb-4 md:pb-2">
                                    <img class="w-full" src={pc} alt="Sunset in the mountains" />
                                    <div class="px-6 md:px-1 md:pl-2 py-4">
                                        <div class="font-bold text-md mb-2">{course?.title}</div>
                                        <p class="text-gray-700 text-xs font-custom-lora">
                                            {course?.author}
                                        </p>
                                        <div class="text-gray-700 text-xs flex items-center">
                                            <span className='font-bold text-lg text-amber-600'>4.3</span>
                                            <IoMdStar className='text-amber-600 text-xl inline' />
                                            <IoMdStarHalf className='text-amber-600 text-xl inline' />
                                            <span>({course?.ratings})</span>
                                        </div>
                                        <div className='font-bold'><span><BiRupee className='inline' />{course?.price}</span></div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        
                    ))
                }

                {/* LIST VIEW LAYOUT */}
                { layoutViewType =='list' &&
                    courses?.map((course, index) => (

                        <div className="col-span-10 md:col-span-5 mt-8 md:mt-0 px-4 md:px-0">
                            <NavLink to={`/course-details/${course?.courseName}/${window.btoa(course?.id)}`}>
                                <div class="grid grid-cols-12 w-full rounded overflow-hidden pb-4 md:pb-2">
                                    <div className="col-span-4"><img class="w-full h-full" src={pc} alt="Sunset in the mountains" /></div>
                                    <div class="col-span-8 md:pl-4 py-4">
                                        <div class="font-bold text-md mb-2">{course?.title}</div>
                                        <p class="text-gray-700 text-xs font-custom-lora">
                                            {course?.author}
                                        </p>
                                        <div class="text-gray-700 text-xs flex items-center">
                                            <span className='font-bold text-lg text-amber-600'>4.3</span>
                                            <IoMdStar className='text-amber-600 text-xl inline' />
                                            <IoMdStarHalf className='text-amber-600 text-xl inline' />
                                            <span>({course?.ratings})</span>
                                        </div>
                                        <div className='font-bold'><span><BiRupee className='inline' />{course?.price}</span></div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))
                }

                <div className="col-span-10 mt-4 px-2 sm:px-0">

                    {/* IF WE ARE IN ALL COURSES PAGE THEN THIS CODE WILL VIEW MORE COURSES */}
                    {location.pathname == '/courses' &&
                        <span className="hover:bg-gray-200 cursor-pointer rounded-sm py-1 px-2">View More
                        </span>
                    }

                    {/* IF WE ARE IN MAIN LANDING PAGE THEN THIS CODE WILL NAVIGATE TO ALL COURSES */}
                    {location.pathname != '/courses' && <NavLink to="/courses">
                        <span className="hover:bg-gray-200 cursor-pointer rounded-sm py-1 px-2">View All <AiOutlineDoubleRight className='inline' />
                        </span>
                    </NavLink>}
                </div>
            </div>


        </>
    )
}



export default Courses