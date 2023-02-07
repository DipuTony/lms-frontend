import { useState } from 'react'
import { BiRupee } from 'react-icons/bi'
import pc from './pc.jfif'
import { IoMdStar, IoMdStarHalf } from 'react-icons/io'
import { NavLink } from 'react-router-dom'


function StickyPriceTag(props) {

    return (
        <>
                {props?.stickyShow==false && <div className='h-auto w-full bg-white shadow-xl border mt-14 hidden sm:block pb-6' style={{'zIndex':500}}>
                    <div><img className='w-full' src={pc} alt="" /></div>
                    <div className='font-bold text-3xl mt-3 px-4'><span><BiRupee className='inline' />{props?.priceCard?.price}</span></div>

                    {/* BUTTONS */}
                    <div class="w-full grid grid-cols-12 mt-6 px-8">
                        <div className='col-span-12 w-full'>
                            <button class="flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded font-semibold shadow-lg w-full justify-center items-center">Add to Cart</button>
                        </div>
                        <div className='col-span-12 w-full mt-2'>
                            <button class="flex border border-indigo-500 text-indigo-500 py-3 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded font-semibold shadow-lg w-full justify-center items-center">Buy Now</button>
                        </div>

                    </div>
                    <p className='text-xs text-gray-700 mt-2 text-center px-8'> 30-Day Money-Back Guarantee</p>
                    <div className='font-bold text-lg mt-3 px-8 font-custom-montserrat'>This course includes:</div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidRating}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidArticle}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidDownloads}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidLimit}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidAccess}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidCertificate}</span></div>
                    <div className="flex px-8 mt-4">
                        <div className="flex-initial text-sm mr-8 border-b"><NavLink to='/'><span className='border-b border-b-black font-semibold'>Share</span></NavLink></div>
                        <div className="flex-1 text-sm border-b"><NavLink to='/'><span className='border-b border-b-black font-semibold'>Gift this course</span></NavLink></div>
                        <div className="flex-1 text-sm border-b ml-3"><NavLink to='/'><span className='border-b border-b-black font-semibold'>Apply Coupon</span></NavLink></div>
                    </div>

                    <div className='w-full px-8 mt-10'>
                        <hr className='h-1' />
                    </div>

                    <div className='font-bold text-xl mt-3 px-8'>Training 5 or more people?</div>
                    <p className='text-sm text-gray-700 mt-4 px-8'> Get your team access to 19,000+ top Udemy courses anytime, anywhere.</p>

                    <div class="w-full grid grid-cols-12 mt-4 px-8">
                        <div className='col-span-12 w-full'>
                            <button class="flex border border-black text-black py-3 px-6 focus:outline-none hover:bg-black hover:text-white rounded font-semibold shadow-lg w-full justify-center items-center">Try Udemy Business</button>
                        </div>
                    </div>
                </div>}

                {/* STICKY CARD */}
                {props?.stickyShow==true && <div className='h-auto w-[344px] bg-white shadow-xl border mt-14 hidden sm:block fixed top-5 pb-6'>
                    {/* <div><img className='w-full' src={pc} alt="" /></div> */}
                    <div className='font-bold text-3xl mt-3 px-4'><span><BiRupee className='inline' />{props?.priceCard?.price}</span></div>

                    {/* BUTTONS */}
                    <div class="w-full grid grid-cols-12 mt-6 px-8">
                        <div className='col-span-12 w-full'>
                            <button class="flex text-white bg-indigo-500 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600 rounded font-semibold shadow-lg w-full justify-center items-center">Add to Cart</button>
                        </div>
                        <div className='col-span-12 w-full mt-2'>
                            <button class="flex border border-indigo-500 text-indigo-500 py-3 px-6 focus:outline-none hover:bg-indigo-600 hover:text-white rounded font-semibold shadow-lg w-full justify-center items-center">Buy Now</button>
                        </div>

                    </div>
                    <p className='text-xs text-gray-700 mt-2 text-center px-8 font-custom-lora'> 30-Day Money-Back Guarantee</p>
                    <div className='font-bold text-lg mt-3 px-8 font-custom-montserrat'>This course includes:</div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidRating}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidArticle}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidDownloads}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidLimit}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidAccess}</span></div>
                    <div className='flex items-center px-8 text-sm'><IoMdStar className='inline' /><span className='ml-3'>{props?.priceCard?.vidCertificate}</span></div>
                    <div className="flex px-8 mt-4 font-custom-montserrat">
                        <div className="flex-initial text-sm mr-8 border-b"><NavLink to='/'><span className='border-b border-b-black font-semibold'>Share</span></NavLink></div>
                        <div className="flex-1 text-sm border-b"><NavLink to='/'><span className='border-b border-b-black font-semibold'>Gift this course</span></NavLink></div>
                        <div className="flex-1 text-sm border-b ml-3"><NavLink to='/'><span className='border-b border-b-black font-semibold'>Apply Coupon</span></NavLink></div>
                    </div>

                    <div className='w-full px-8 mt-10'>
                        <hr className='h-1' />
                    </div>

                    <div className='font-bold text-xl mt-3 px-8'>Training 5 or more people?</div>
                    <p className='text-sm text-gray-700 mt-4 px-8'> Get your team access to 19,000+ top Udemy courses anytime, anywhere.</p>

                    <div class="w-full grid grid-cols-12 mt-4 px-8">
                        <div className='col-span-12 w-full'>
                            <button class="flex border border-black text-black py-3 px-6 focus:outline-none hover:bg-black hover:text-white rounded font-semibold shadow-lg w-full justify-center items-center">Try Udemy Business</button>
                        </div>
                    </div>
                </div>}
        </>
    )
}

export default StickyPriceTag