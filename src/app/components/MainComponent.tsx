import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { PiBookmarkSimple } from "react-icons/pi";
import { CiExport } from "react-icons/ci";


const MainComponent = () => {
  return (
    <main className='flex flex-col ml-[275px] w-[598.4px] h-full min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-800'>
          <h1 className='text-2xl font-bold backdrop-blur bg-black/20 sticky top-0 py-3'>Home</h1>
          <div className='flex items-stretch space-x-2 pt-4 pl-4 border-t-[0.5px] border-b-[0.5px] border-gray-800  relative'>
            <div className='w-10 h-10 bg-slate-400 p-4 rounded-full'></div>
            <div className='flex flex-col w-full h-full'>
              <div className='flex'>
                <input 
                  type='text'
                  placeholder="What's happenning?!"
                  className='w-full h-full pt-2 pb-9 bg-transparent outline-none border-none placeholder:text-xl placeholder:text-gray-600'/>
              </div>
              <div className='w-full justify-between items-center flex border-t-[0.5px] border-gray-800'>
                <div></div>
                <div>
                  <button className='w-11/12 rounded-full bg-x-blue px-5 py-2 mt-1 mb-1 text-[15px] font-semibold text-center hover:bg-opacity-70 transition duration-200'>
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            {
              Array.from({length:5}).map((_,i)=>(
                <div key={i} className=' p-4 border-b-[0.5px] border-gray-800 flex space-x-2 '>
                  <div>
                    <div className='w-10 h-10 bg-slate-200 rounded-full' />
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex items-center space-x-1'>
                      <div className='font-bold'>ozgeonline</div>
                      <div className='text-gray-500'>@ozgeonline</div>
                      <div className='text-gray-500'><LuDot /></div>
                      <div className='text-gray-500'>1h ago</div>
                      <div className='text-gray-500 pl-[230px]'><BsThreeDots /></div>
                    </div>
                    <div className='text-white text-sm pb-3'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem accusamus quibusdam et nihil fugiat qui aperiam molestias autem quasi, asperiores perspiciatis, quod tempore explicabo nulla fuga voluptas eaque? Dolores eum natus corrupti exercitationem mollitia tenetur accusantium quo numquam assumenda facilis, sint placeat magnam consequuntur illo omnis cupiditate voluptates ex unde repudiandae distinctio accusamus! Inventore molestias repellat minima error aperiam consectetur minus harum esse libero! Facilis dolore, perspiciatis quos quaerat facere incidunt temporibus, reprehenderit fugiat quam numquam sint reiciendis voluptas! Accusantium delectus, voluptatem autem ad libero eaque corporis, non tenetur aliquid quisquam vitae itaque harum esse quibusdam, veniam hic culpa.
                    </div>
                    <div className='bg-slate-400 aspect-square w-full h-72 rounded-xl mb-3'>

                    </div>
                    <div className='flex items-center justify-between w-full text-gray-400 text-[17px]'>
                      <div className='rounded-full hover:bg-x-blue/10 hover:text-x-blue transition duration-200 p-3 cursor-pointer'>
                        <IoChatbubbleOutline />
                      </div>
                      <div className='rounded-full hover:bg-emerald-500/10 hover:text-emerald-500 transition duration-200 p-3 cursor-pointer'>
                        <FaRetweet />
                      </div>
                      <div className='rounded-full hover:bg-pink-600/10 hover:text-pink-600 transition duration-200 p-3 cursor-pointer'>
                        <FaRegHeart />
                      </div>
                      <div className='rounded-full hover:bg-x-blue/10 hover:text-x-blue transition duration-200 p-3 cursor-pointer'>
                        <IoIosStats />
                      </div>
                      <div className='flex space-x-4'>
                        <div className='rounded-full hover:bg-x-blue/10 hover:text-x-blue transition duration-200 p-3 cursor-pointer'>
                          <PiBookmarkSimple />
                        </div>
                        <div className='rounded-full hover:bg-x-blue/10 hover:text-x-blue transition duration-200 p-3 cursor-pointer'>
                          <CiExport />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </main>
  )
}

export default MainComponent
