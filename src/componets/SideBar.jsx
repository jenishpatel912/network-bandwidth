import React from 'react'

const SideBar = () => {
  return (
    <div>
        <div className='text-sm text-zinc-500 font-bold mb-2'>MAIN MENU</div>
        <ul className='flex flex-col gap-1.5'>
            <li><a className='group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md'><img src="https://lightningproxies.net/assets/images/sidebar-iconsV2/home-2.svg" alt="dashboard"/>Dashboard</a> </li>
            <li><a className='group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md'><img src="https://lightningproxies.net/assets/images/sidebar-iconsV2/purchase-plan-2.svg" alt="dashboard"/>Purchase plan</a> </li>
            <li><a className='group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md'><img src="https://lightningproxies.net/assets/images/sidebar-iconsV2/topup-2.svg" alt="dashboard"/>Deposite Balance</a> </li>
            <li><a className='group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md'><img src="https://lightningproxies.net/assets/images/sidebar-iconsV2/invoices-2.svg" alt="dashboard"/>Invoice</a> </li>
        </ul>
    </div>
  )
}

export default SideBar