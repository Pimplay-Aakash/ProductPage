import React from 'react'
import Image from 'next/image';
import { MdOutlineDeliveryDining } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";



const ProductPage = () => {
  return (
    <div className='flex gap-6 '  >

      {/* product image */}
      <div className='flex gap-3 h-[440px] w-[550px]'>

        <div className='  w-[84px] h-[440px] '>

          <div><img src="/img.jpeg" alt="" className='mb-2 border border-gray-400 rounded-md'/></div>
          <div><img src="/veg1.webp" alt="" className='mb-2 border border-gray-400 rounded-md'/></div>
          <div><img src="/veg2.webp" alt="" className='mb-2 border border-gray-400 rounded-md'/></div>
          <div><img src="/veg3.webp" alt="" className='mb-2 border border-gray-400 rounded-md'/></div>
          <div><img src="/veg4.webp" alt="" className='mb-2 border border-gray-400 rounded-md'/></div>
         
        </div>

        <div className=' border border-gray-400 overflow-hidden rounded-md'>
          <img src="/img.jpeg" alt="" />
        </div>

      </div>

      <div className='h-[800px] w-[580px] '>

      {/* product details */}
        <div className='flex justify-between mb-3'>

          <div className='text-gray-300 underline '>
              <h3 className=''>Fresho</h3>
          </div>

          <div className='flex items-center gap-2 bg-slate-200 rounded-2xl h-6 w-17 '>
              <MdOutlineDeliveryDining />
              <p>2 hrs</p>
          </div>

        </div>

        <div className='mb-7'>
          <h3 className='font-semibold text-xl mb-2 '>Fresho Capsicum - Green (Loose), 1 kg</h3>
          <h3 className='text-gray-400 mb-2'>MRP:₹92</h3>
          <h3 className='font-medium text-lg mb-2'>Price: ₹48 <span className='text-gray-400 font-normal text-base'>(₹48 / kg)</span></h3>
          <h3 className='text-green-700 text-sm mb-1'>You Save:48% OFF</h3>
          <h3 className='text-gray-400 text-sm'>(inclusive of all taxes)</h3>
        </div>

        <div className='flex justify-between mb-4'>
          <button className='bg-[#cc0000] text-white font-bold rounded-md pl-24 pr-24 p-4'>Add to basket</button>
          <div className='border border-gray-400 rounded-md pl-14 pr-14 p-4 flex items-center gap-2 font-medium'>
            <FaRegBookmark className='text-lg'/> save for later </div>
        </div>

        <div className='flex items-center gap-2 text-gray-500 mb-6' >
          <MdOutlineDeliveryDining />
          <h3>Earliest: Get it in 2 hrs</h3>
        </div>

        {/* Pick sizes  */}
        <div>

          <h3 className='font-semibold mb-4'>Pick sizes</h3>
          <div >
              <div className='flex justify-between'>
                <h2>1 Kg</h2> 
                <div>
                  <p>₹48(₹48 / kg)</p>
                  <p>₹92 48% OFF</p> 
                </div>
                <img src="" alt="" />
              </div>
          </div>
          
        </div>
        

      </div>
    </div>
  )
}

export default ProductPage 