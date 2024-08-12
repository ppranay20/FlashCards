import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className='border border-gray-950 min-h-full border-t-0 border-l-0 border-b-0 flex flex-col py-16 items-end gap-y-5'>
            <NavLink to='/add' className='w-[150px] border border-gray-400 py-3 border-r-0 px-3 focus:border-[tomato] focus:bg-[#fff0ed] cursor-pointer'>
                <p className='text-md'>Add Card</p>
            </NavLink>
            <NavLink to='/update' className='w-[150px] border border-gray-400 py-3 border-r-0 px-3 focus:border-[tomato] focus:bg-[#fff0ed] cursor-pointer'>
                <p className='text-md'>Update Card</p>
            </NavLink>
            <NavLink to='/delete' className='w-[150px] border border-gray-400 py-3 border-r-0 px-3 focus:border-[tomato] focus:bg-[#fff0ed] cursor-pointer'>
                <p className='text-md'>Delete Card</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar