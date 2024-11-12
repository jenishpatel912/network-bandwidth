import React from 'react'
import SideBar from './componets/SideBar'

const Layout = ({children}) => {
    const excludedPath = ['/register','/proxy']
  return (
    <div className='flex w-full'>

        {!excludedPath.includes(window.location.pathname) && <aside className='w-1/5 bg-white p-4 shadow-lg'>
        <SideBar/>
        </aside>}
        <div className='w-4/5 flex-1'>{children}</div> 
    </div>
  )
}

export default Layout