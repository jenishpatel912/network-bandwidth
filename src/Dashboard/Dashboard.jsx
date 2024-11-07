import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";
import React from "react";
import CustomProgress from "../componets/CustomProgress";
import StatCard from "../componets/StatCard";
import StatProgressCard from "../componets/StatProgressCard";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Welcome user</h1>
          <p className="text-gray-600">Welcome back, we're glad to have you.</p>
        </div>
        {/* <Button variant="text" className="text-blue-600">
          Please read! Read More ›
        </Button> */}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-[repeat(4,minmax(0,300px))] gap-6 mb-8">
        <StatCard
          icon={"https://lightningproxies.net/assets/images/icons/doller.svg"}
          title={"Active Balance"}
          value={10}
          isCurrency={true}
          actionButton={{
            title: "Add Balance",
            onClick: () => {},
            color: "success",
          }}
          totalLabel={"Total Balance Spent"}
          totalValue={50}
        />
        <StatCard
          icon={"https://lightningproxies.net/assets/images/icons/cart.svg"}
          title={"Active Plans"}
          value={"1"}
          actionButton={{
            title: "Purchase Plan",
            onClick: () => {},
            color: "primary",
          }}
          totalLabel={"Total Purchased Plans"}
          totalValue={"50"}
        />

        <StatProgressCard
          icon={"https://lightningproxies.net/assets/images/icons/server.svg"}
          title={"Data Left"}
          value={76}
          totalLabel={"Total Data Purchased"}
          totalValue={"5 GB"}
          percentage={25}
        />

        <div className="bg-white flex flex-col w-full justify-center items-center gap-4 rounded-lg p-4 shadow-sm">
          <img
            className="w-11 h-11"
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt=""
          />

          <div className="flex flex-col items-center">
            <h3 className="font-medium">user</h3>
            <span className="text-sm text-gray-600">532423ew3482304</span>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://lightningproxies.net/assets/images/icons/g-01.svg"
              alt=""
            />

            <img
              src="https://lightningproxies.net/assets/images/icons/g-02.svg"
              alt=""
            />

            <img
              src="https://lightningproxies.net/assets/images/icons/g-03.svg"
              alt=""
            />

            <img
              src="https://lightningproxies.net/assets/images/icons/g-04.svg"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Active Plans Section */}
      <div className="mb-8">
        <h2 className="text-xl font-normal">Your Active Plans</h2>
        <p className="text-gray-600 mb-4">
          Generate proxies with just a click of a button
        </p>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <CustomProgress
              borderColor="#8abaff"
              progressColor="#1a75ff"
              percentage={76}
              size={60}
              thickness={6}
            />
            <div>
              <h3 className="font-medium">Residential 5GB</h3>
              <p className="text-sm text-gray-600">
                Ideal proxies for any use case & purpose. By accessing our 10M+
                IP pool non-subnet linked, bans and blocks are non-existent.
              </p>
            </div>
            <span className="ml-auto">5 GB</span>
          </div>

          <div className="flex justify-between items-center text-sm ">
            <div>
              <p>Plan ID</p>
              <p className="font-medium">672576d20a6c581e87249045</p>
            </div>
            <div>
              <p>Data Left</p>
              <p className="font-medium">3.79 GB / 5 GB</p>
            </div>
            <div>
              <p>Expires</p>
              <p className="font-medium">31 Oct 2025</p>
            </div>
            <Button variant="outlined" color="primary">
              Generate Proxy ›
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
