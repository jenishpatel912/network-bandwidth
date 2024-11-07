import React from 'react'
import SideBar from './componets/SideBar'

const Layout = ({children}) => {
  return (
    <div className='flex w-full'>

        <aside className='w-1/5 bg-white p-4 shadow-lg'>
        <SideBar/>
        </aside>
        <div className='w-4/5'>{children}</div> 
    </div>
  )
}

export default Layout