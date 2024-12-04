import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Logo.png'

export const Header = () => {
  return (
    <div className='flex justify-between items-center bg-[#043873] w-[1920px] h-[92px] px-[220px] py-4'>
        <div className='w-[191px] h-[34px]'>
            <Image src={Logo} alt='logo'/>
        </div>
        <div className='w-[737px] h-[60px] flex justify-between items-center'>
            <ul className='text-white flex font-semibold leading-[23px] text-[18px] gap-[60px]'>
                <li>Products</li>
                <li>Solutions</li>
                <li>Resources</li>
                <li>Pricing</li>
            </ul>
            <button className='w-[126px] h-[60px] px-10 py-4 bg-[#FFE492] rounded-lg'>Login</button>
        </div>
    </div>
  )
}
