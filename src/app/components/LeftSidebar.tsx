import React from 'react'
import Link from 'next/link';
import { BsThreeDots } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { HiOutlineBell } from "react-icons/hi2";
import { FaRegEnvelope } from "react-icons/fa";
import { RiFileList2Line } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

const NAVIGATION_ITEMS = [
  {
   title: 'Home',
   icon: GoHome
  },
  {
   title: 'Explore',
   icon: CiSearch,
  },
  {
   title: 'Notifications',
   icon: HiOutlineBell
  },
  {
   title: 'Messages',
   icon: FaRegEnvelope
  },
  {
   title: 'Lists',
   icon: RiFileList2Line
  },
  {
   title: 'Communities',
   icon: BsPeople
  },
  {
   title: 'Premium',
   icon: FaXTwitter
  },
  {
   title: 'Profile',
   icon: IoPersonOutline
  },
  {
   title: 'More',
   icon: HiOutlineDotsCircleHorizontal
  }
 ]
 
const LeftSidebar = () => {
  return (
    <section className='absolute left-0 w-[275px] flex flex-col items-stretch h-screen px-2'>
          <div className='flex flex-col items-stretch h-full  mt-2'>
            <Link href={"/"} className='pb-3  text-3xl w-[50px] h-[50px] items-center justify-center flex'>
              <FaXTwitter />
            </Link>
            {
              NAVIGATION_ITEMS.map((item) => (
                <Link
                  href={`${item.title.toLowerCase()}`}
                  key={item.title}
                  className='hover:bg-white/10
                    transition duration-200
                    flex items-center justify-start
                    w-fit space-x-4 rounded-3xl
                    p-2.5'
                >
                  <div className='text-[27px]'>
                    <item.icon/>
                  </div>
                  <div className='text-[20px]'>
                    <div>{item.title}</div>
                  </div>
                </Link>
              ))
            }
            <button
              className='w-11/12 rounded-full bg-x-blue
                px-8 py-3 my-4 text-[15px] font-semibold text-center hover:bg-opacity-70
                transition duration-200'
            >
              Post
            </button>
          </div>
          <button
            className='rounded-full flex items-center text-center
              space-x-2 my-2 py-3 px-2 bg-transparent hover:bg-white/10
              transition duration-200 w-full justify-between'
          >
            <div className='flex items-center space-x-2'>
              <div className='rounded-full bg-slate-400 w-12 h-12'></div>
              <div className='text-left text-sm'>
                <div className='font-semibold'>ozgeonline</div>
                <div className=''>@ozgeonline</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
  )
}

export default LeftSidebar
