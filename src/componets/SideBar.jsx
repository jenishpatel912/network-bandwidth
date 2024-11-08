import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div className="text-sm text-zinc-500 font-bold mb-2">MAIN MENU</div>
      <ul className="flex flex-col gap-1.5">
        <li>
          <Link
            to="/dashboard"
            className="group relative flex items-center gap-2.5 px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md"
          >
            <img
              src="https://lightningproxies.net/assets/images/sidebar-iconsV2/home-2.svg"
              alt="dashboard"
            />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/purchase-plan"
            className="group relative flex items-center gap-2.5 px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md"
          >
            <img
              src="https://lightningproxies.net/assets/images/sidebar-iconsV2/purchase-plan-2.svg"
              alt="dashboard"
            />
            Purchase plan
          </Link>
        </li>
        <li>
          <Link
            to="/deposite-balance"
            className="group relative flex items-center gap-2.5 px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md"
          >
            <img
              src="https://lightningproxies.net/assets/images/sidebar-iconsV2/topup-2.svg"
              alt="dashboard"
            />
            Deposite Balance
          </Link>
        </li>
        <li>
          <Link
            to="/invoice"
            className="group relative flex items-center gap-2.5 px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-[#e9f4ff] cursor-pointer rounded-md"
          >
            <img
              src="https://lightningproxies.net/assets/images/sidebar-iconsV2/invoices-2.svg"
              alt="dashboard"
            />
            Invoice
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
