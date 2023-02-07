import { SiMaterialdesignicons } from 'react-icons/si'
import design from './design.svg'

function Categories() {

    const categories = [
        {category:'Design'},
        {category:'Development'},
        {category:'Design'},
        {category:'Design'},
        {category:'Development'},
        {category:'Design'},
        {category:'Development'},

    ]
    return (
        <>
            <div className='text-2xl md:text-3xl font-bold text-center'>Top Categories</div>
            <div className='text-sm text-gray-600 text-center font-custom-lora'>Choose your preferred categories</div>

            {/* SPACER */}
            <div className="w-full h-5"></div>

            <div className="grid grid-cols-10 ">
                {
                    categories?.map((category, index) => (
                        <div className="col-span-10 md:col-span-2 mt-8 md:mt-0  md:px-0 mx-4 sm:mx-10 sm:pb-4 cursor-pointer">
                            <div class="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md flex flex-col justify-center items-center ">
                                <img src={design}/>
                                <a href="#">
                                    <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-700 font-custom-lora ">{category?.category}</h5>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Categories