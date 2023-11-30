import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { LuDot } from "react-icons/lu";
import { IoChatbubbleOutline } from "react-icons/io5";
import { FaRetweet } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { PiBookmarkSimple } from "react-icons/pi";
import { CiExport } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { MdOutlineGifBox } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { FaRegSmile } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { GiWorld } from "react-icons/gi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const MainComponent = () => {
  return (
    <main className='flex flex-col ml-[275px] w-[598.4px] h-full min-h-screen border-l-[0.5px] border-r-[0.5px] border-gray-800'>
          <div className='text-md flex-row flex items-center text-center justify-evenly backdrop-blur bg-black/20  sticky top-0 cursor-pointer '>
            <div  className='hover:bg-white/10 w-full p-3 transition duration-200 font-bold underline decoration-4 decoration-sky-500 underline-offset-[14px] text-gray-300'>For you</div>
            <div className='hover:bg-white/10 w-full p-3 transition duration-200 text-gray-600'>Following</div>
            <div className='hover:bg-white/10 w-1/12 p-3 rounded-full mr-2 transition duration-200 text-gray-300'><IoSettingsOutline/></div>
          </div>
          <div className='flex items-stretch space-x-2 pt-4 pl-4 border-t-[0.5px] border-b-[0.5px] border-gray-800  relative'>
            
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className='flex flex-col w-full h-full'>
              <div className='flex flex-col group'>
                <input 
                  type='text'
                  placeholder="What's happenning?!"
                  className='peer w-full h-full pt-2 pb-5 bg-transparent outline-none border-none placeholder:text-xl placeholder:text-gray-600'
                />
                <div className='peer-focus:flex hidden  items-center text-sky-500 space-x-1 text-sm font-bold border-b-[0.5px] pb-3 mr-3 border-gray-700'>
                  <span className='px-2'><GiWorld /></span>
                  <span>Everyone can reply</span>
                </div>
              </div>
              <div className='w-full justify-between items-center flex border-gray-800'>
                <div className='text-sky-500 flex space-x-1 cursor-pointer '>
                  <div className='hover:bg-sky-500/20 p-2 rounded-full '>
                    <AiOutlinePicture className='text-lg'/>
                  </div>
                  <div className='hover:bg-sky-500/20 p-2 rounded-full'>
                    <MdOutlineGifBox  className='text-xl'/>
                  </div>
                  <div className='hover:bg-sky-500/20 p-2 rounded-full'>
                    <CiCircleList  className='text-lg' />
                  </div>
                  <div className='hover:bg-sky-500/20 p-2 rounded-full'>
                    <FaRegSmile  className='text-lg'/>
                  </div>
                  <div className='hover:bg-sky-500/20 p-2 rounded-full'>
                    <LuCalendarClock  className='text-lg' />
                  </div>
                  <div className='hover:bg-sky-500/20 p-2 rounded-full'>
                    <CiLocationOn  className='text-lg' />
                  </div>
                </div>
                <div>
                  <button className='w-11/12 rounded-full bg-sky-500 text-white px-5 py-2 mr-2 my-2 text-[15px] font-semibold text-center hover:bg-opacity-70 transition duration-200'>
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
                  <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex items-center space-x-1'>
                      <div className='font-bold text-gray-300'>ozgeonline</div>
                      <div className='text-gray-500'>@ozgeonline</div>
                      <div className='text-gray-500'><LuDot /></div>
                      <div className='text-gray-500'>1h ago</div>
                      <div className='text-gray-500 pl-[230px]'><BsThreeDots /></div>
                    </div>
                    <div className='text-white text-sm pb-3'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim rem accusamus quibusdam et nihil fugiat qui aperiam molestias autem quasi, asperiores perspiciatis, quod tempore explicabo nulla fuga voluptas eaque? Dolores eum natus corrupti exercitationem mollitia tenetur accusantium quo numquam assumenda facilis, sint placeat magnam consequuntur!
                    </div>
                    <div className='bg-slate-400 aspect-square w-full h-72 rounded-xl mb-3'>

                    </div>
                    <div className='flex items-center justify-between w-full text-gray-400 text-[17px]'>
                      <div className='rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition duration-200 p-3 cursor-pointer'>
                        <IoChatbubbleOutline />
                      </div>
                      <div className='rounded-full hover:bg-emerald-500/10 hover:text-emerald-600 transition duration-200 p-3 cursor-pointer'>
                        <FaRetweet />
                      </div>
                      <div className='rounded-full hover:bg-pink-600/10 hover:text-pink-600 transition duration-200 p-3 cursor-pointer'>
                        <FaRegHeart />
                      </div>
                      <div className='rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition duration-200 p-3 cursor-pointer'>
                        <IoIosStats />
                      </div>
                      <div className='flex space-x-4'>
                        <div className='rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition duration-200 p-3 cursor-pointer'>
                          <PiBookmarkSimple />
                        </div>
                        <div className='rounded-full hover:bg-sky-500/10 hover:text-sky-500 transition duration-200 p-3 cursor-pointer'>
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
