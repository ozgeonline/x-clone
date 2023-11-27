import React from 'react'
import LeftSidebar from './components/LeftSidebar'
import MainComponent from './components/MainComponent'
import { CiSearch } from "react-icons/ci";

const Home = () => {
  return (
    <div className='ml-2 w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full flex relative'>
        {/* left sidebar */}
        <LeftSidebar />
        <MainComponent />

        <section className='absolute w-[350px] right-12 flex flex-col items-stretch h-screen px-6 '>
          <div className='my-1'>
            <div className='relative w-full h-full group'>
              <input 
                id='searchBox' 
                type='text' 
                placeholder='Search' 
                className='w-[348px] h-full py-2.5 px-14 mt-1  bg-box-bg placeholder:text-gray-500 placeholder:text-sm focus:outline-none focus:border-x-blue focus:ring-x-blue focus:ring-1  flex rounded-full outline-none peer '/>
              <label htmlFor='searchBox' className='absolute top-0 left-1 h-full flex items-center justify-center text-gray-500  peer-focus:text-x-blue'>
                <CiSearch className='w-5 h-5  ml-4'/>
              </label>
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-box-2-bg my-4 w-[348px]'>
            <div className='my-2 px-4 font-bold text-xl'>Subscribe to Premium</div>
            <h2 className='px-4 text-sm font-bold'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</h2>
            <div className='px-4 py-1'>
              <button className='w-4/12 rounded-full bg-x-blue px-4 py-2 mt-1 mb-1 text-[15px] font-semibold text-center hover:bg-opacity-70 transition duration-200'>
                Subscribe
              </button>
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-box-bg my-4 w-[348px]'>
            <h3 className='font-bold text-xl my-4 px-4'>Trends for you</h3>
            <div>
              {
                Array.from({length:5}).map((_,i)=> (
                  <div key={i} className='hover:bg-white/5 p-4 last:rounded-b-xl transition duration-200'>
                    <div className='font-bold text-lg'>#trending{i+1}</div>
                    <div className='text-sm text-box-bg/50'></div>
                  </div>
                ))
              }
            </div>
          </div>
          <div></div>
        </section>
      </div>
    </div>
  )
}

export default Home
