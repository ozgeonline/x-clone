import React from 'react'
import { CiSearch } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const RightComponent = () => {

  const randomNumber = Math.floor(Math.random()*200)
  //console.log(randomNumber)
  return (
    <section className='absolute w-[350px] right-12 flex flex-col items-stretch h-screen px-6 text-gray-200'>
          <div className='fixed'>
            <div className='relative w-full group bg-black'>
              <input 
                id='searchBox' 
                type='text' 
                placeholder='Search' 
                className='w-[348px] h-[44px] px-14 mt-1  bg-[#202327] placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:bg-transparent focus:text-gray-200 focus:ring-1  flex rounded-full outline-none peer '
              />
              <div className='peer-focus:flex hidden w-[350px] h-[100px]'><span className=''>Try searching for people, lists, or keywords</span></div>
              <label htmlFor='searchBox' className='absolute top-0 left-1 h-[44px] flex items-center justify-center text-gray-500  peer-focus:text-sky-500'>
                <CiSearch className='w-5 h-5  ml-4'/>
              </label>
            </div>
          </div>
          <div className='flex flex-col rounded-2xl bg-[#16181C] mt-16 w-[348px]'>
            <div className='my-2 px-4 font-bold text-xl'>Subscribe to Premium</div>
            <h2 className='px-4 text-md'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h2>
            <div className='px-4 py-1'>
              <button className='w-4/12 rounded-full bg-sky-500 px-4 py-2 mt-1 mb-1 text-[15px] font-semibold text-center hover:bg-opacity-70 transition duration-200'>
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex flex-col rounded-2xl bg-[#16181C] my-4 w-[348px]'>
            <h3 className='font-bold text-xl mt-3 mb-2 px-4'>Trends for you</h3>
            <div>
              {
                Array.from({length:5}).map((_,i)=> (
                  <div className='justify-between flex hover:bg-white/5 transition duration-200'>
                    <div key={i} className=' px-4 py-3  cursor-pointer'>
                      <div className='text-gray-500 text-xs'>Trending in Turkey</div>
                      <div className='font-bold text-base'>trending{i+1}</div>
                      <div className='text-xs text-gray-500'>{randomNumber*(i+5)}K Posts</div>
                    </div>
                    <div className='p-2 mr-2 text-txt-color-1 hover:bg-sky-500/10 w-8 h-8 mt-1 rounded-full cursor-pointer hover:text-sky-500'>
                      <BsThreeDots />
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='text-sky-500 p-4 text-sm cursor-pointer hover:bg-white/5 last:rounded-b-xl'>Show more</div>
          </div>
          <div className='flex flex-col rounded-2xl bg-[#16181C] my-1 w-[348px]'>
            <div className='font-bold text-xl mt-3 mb-2 px-4'>Who to follow</div>
            <div>
              {
                Array.from({length:3}).map((_,i)=>(
                  <div key={i} className='flex items-center  px-4 py-3 justify-between cursor-pointer hover:bg-white/5 transition duration-200'>
                    <div className='flex space-x-2'>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                      <div className='text-left text-sm'>
                        <div className='font-semibold'>ozgeonline</div>
                        <div className='text-gray-500'>@ozgeonline</div>
                      </div>
                    </div>
                    <div className='flex bg-gray-200 py-2 px-4 text-gray-900 font-bold rounded-full text-sm'>
                      <button>Follow</button>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className='text-sky-500 p-4 text-sm cursor-pointer hover:bg-white/5 last:rounded-b-xl'>Show more</div>
          </div>
          <div className=' flex flex-wrap flex-col text-xs justify-center text-gray-500 mt-3 px-3'>
            <div className='space-x-3 pb-2'>
              <a href='#'>Terms of Service</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Cookie Policy</a>
            </div>
            <div className='space-x-3 flex pb-2'>
              <a href='#'>Imprint</a>
              <a href='#'>Accessibility</a>
              <a href='#'>Ads info</a>
              <div className='flex items-center justify-center space-x-1'>
                <span className=''>More</span>
                <span><BsThreeDots /></span>
              </div>
            </div>
            <div className=''>© 2023 X Corp.</div>
          </div>
        </section>
  )
}

export default RightComponent
