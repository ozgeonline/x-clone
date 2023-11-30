import React from 'react'
import LeftSidebar from '@/components/LeftSidebar'
import RightComponent from '@/components/RightComponent'
import MainComponent from '@/components/MainComponent'


const Home = () => {
  return (
    <div className=' w-full h-full flex justify-center items-center relative bg-black text-txt-color-2'>
      <div className='max-w-screen-xl w-full flex relative pl-2'>
        <LeftSidebar/>
        <MainComponent />
        <RightComponent />
      </div>
    </div>
  )
}

export default Home
