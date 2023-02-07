import { IoMdStar, IoMdStarHalf } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import StickyPriceTag from './StickyPriceTag'
import {BiChevronRight} from 'react-icons/bi'

function CouresHeader(props) {
    return (
        <div className='w-full h-auto sm:h-80 bg-[#1C1D1F] grid grid-cols-12 px-4 sm:px-10 py-10 sm:py-10'>
            <div className="col-span-2"></div>
            <div className="col-span-12 sm:col-span-5">
                <div className="hidden sm:flex">
                    <div className="flex-initial"><NavLink to='/'><span className='text-md text-indigo-300 font-semibold'>Development</span></NavLink></div>
                    <div className="flex-initial"><NavLink to='/'><span className='text-md text-indigo-300 font-semibold'><BiChevronRight className="inline ml-1" /> Programming Languages</span></NavLink></div>
                    <div className="flex-initial"><NavLink to='/'><span className='text-md text-indigo-300 font-semibold'><BiChevronRight className="inline ml-1" /> Python</span></NavLink></div>
                   
                </div>
                <h1 className='text-3xl font-bold text-white mt-2'>{props?.courseDetails?.courseTitle}</h1>
                <h2 className='text-lg text-white mt-3 font-custom-lora'>{props?.courseDetails?.courseDescription}</h2>
                <div class="text-gray-700 text-xs flex items-center mt-3">
                    <span className='font-bold text-lg text-amber-200'>4.3</span>
                    <IoMdStar className='text-amber-200 text-lg inline' />
                    <IoMdStarHalf className='text-amber-200 text-lg inline' />
                    <span>({props?.courseDetails?.ratings})</span>
                    <span>{props?.courseDetails?.students} students</span>
                </div>
                <div class="text-gray-700 text-xs flex items-center mt-2">
                    <span className='text-md text-white'>Created by </span>
                    <span className='text-md text-indigo-300 ml-1'>{props?.courseDetails?.author}</span>
                    
                </div>
                
            </div>
            <div className="col-span-1 hidden sm:block"></div>
            <div className="col-span-12 sm:col-span-3 px-2">
                    <StickyPriceTag priceCard={props?.courseDetails?.priceCard} stickyShow={props?.stickyShow} />
                </div>
        </div>
    )
}

export default CouresHeader