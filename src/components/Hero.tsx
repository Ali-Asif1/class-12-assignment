import React from 'react'

export const Hero = () => {
  return (
    <div className='w-[1920px] h-[829px] px-[220px] py-[140px] bg-[#043873] flex'>
        <div className='w-[656px] h-[361px] gap-[60px]'>
            <div className='w-[656px] h-[238px] gap-6'>
                <h2 className='w-[656] h-[154px] text-[64px] text-[#fff] leading-[77px] font-bold '>Get More Done with whitepace</h2>
                <p className='w-[656px] h-[60px] text-[18px] leading-[30px] text-[#fff]'>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
            </div>
            <button className='[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] text-white'>Try Whitepace free -&gt;</button>
        </div>
        <img className='w-[824px] h-[549px] gap-1 bg-[#C4DEFD]'></img>
    </div>
  )
}
