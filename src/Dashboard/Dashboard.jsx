import { Button } from "@mui/material";
import React, { useEffect } from "react";
import CustomProgress from "../componets/CustomProgress";
import StatCard from "../componets/StatCard";
import { bytesToGB, fetchData } from "../utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const [residentialAccountInfo, setResidentialAccountInfo] = useState(null);
  const [residentialUserInfo, setResidentialUserInfo] = useState(null);

  const { username, email, id } = userInfo || {};

  const { balance, all_buy } = residentialAccountInfo || {};

  const { bandwidthLeft, all_buy: total_buy, used } = residentialUserInfo || {};

  const navigate = useNavigate();

  const getResidentialAccountInfo = async () => {
    if (localStorage.getItem("residential-account-info")) {
      setResidentialAccountInfo(
        JSON.parse(localStorage.getItem("residential-account-info"))
      );

      return;
    }

    const res = await fetchData("residential-account-info", {
      username: username,
    });

    if (!res.error) {
      localStorage.setItem(
        "residential-account-info",
        JSON.stringify(res?.response?.data)
      );
    }
  };

  useEffect(() => {
    if (username) {
      getResidentialUserInfo();
      getResidentialAccountInfo();
    }
  }, [username]);

  const getResidentialUserInfo = async () => {
    const res = await fetchData("residential-user-info", {
      username: username,
    });

    if (!res.error) {
      setResidentialUserInfo(res?.response?.data);
      localStorage.setItem(
        "residential-user-info",
        JSON.stringify(res?.response?.data)
      );
    }
  };

  useEffect(() => {
    if (username) {
      const intervalId = setInterval(() => {
        getResidentialUserInfo();
      }, 30000);

      return () => clearInterval(intervalId);
    }
  }, [username]);

  return (
    <div className="p-6 bg-[#f4f6f8] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-semibold">Welcome user</h1>
          <p className="text-gray-600">Welcome back, we're glad to have you.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-[repeat(4,minmax(0,300px))] gap-6 mb-8">
        <StatCard
          icon={"https://lightningproxies.net/assets/images/icons/doller.svg"}
          title={"Active Balance"}
          subTitle={`$${balance}`}
          actionButton={{
            title: "Add Balance",
            onClick: () => {},
            color: "success",
            className: "self-end",
          }}
          totalLabel={"Total Balance Spent"}
          totalValue={`$${all_buy}`}
        />
        <StatCard
          icon={"https://lightningproxies.net/assets/images/icons/cart.svg"}
          title={"Active Plans"}
          subTitle={"1"}
          actionButton={{
            title: "Purchase Plan",
            onClick: () => {},
            color: "primary",
            className: "self-end",
          }}
          totalLabel={"Total Purchased Plans"}
          totalValue={"50"}
        />

        <StatCard
          icon={"https://lightningproxies.net/assets/images/icons/server.svg"}
          title={"Data Left"}
          subTitle={`${bytesToGB(bandwidthLeft)} GB`}
          totalLabel={"Total Data Purchased"}
          totalValue={`${bytesToGB(total_buy)} GB`}
          customActionButton={
            <CustomProgress
              borderColor="#f1f5f9"
              progressColor="#1a75ff"
              className="self-center"
              percentage={25}
              textLabel="Data Left"
            />
          }
        />

        <div className="bg-white flex flex-col w-full justify-center items-center gap-4 rounded-lg p-4 shadow-sm">
          <img
            className="w-11 h-11"
            src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
            alt=""
          />

          <div className="flex flex-col items-center">
            <h3 className="font-medium">{username}</h3>
            <span className="text-sm text-gray-600">{id}</span>
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

        <div className="bg-white rounded-lg p-6 w-full max-w-4xl shadow-sm">
          <div className="flex justify-between items-center gap-4 mb-4">
            <div className="flex items-center gap-4">
              <CustomProgress
                borderColor="#8abaff"
                progressColor="#1a75ff"
                percentage={76}
                size={60}
                thickness={6}
              />
              <div>
                <h3 className="font-medium">Residential 5GB</h3>
                <p className="text-sm text-gray-600 max-w-2xl">
                  Ideal proxies for any use case & purpose. By accessing our
                  10M+ IP pool non-subnet linked, bans and blocks are
                  non-existent.
                </p>
              </div>
            </div>
            <span>5 GB</span>
          </div>

          <hr className="my-4" />

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
            <Button
              variant="outlined"
              size="small"
              className={`!text-sm !capitalize !font-medium !rounded-lg`}
              onClick={() => {
                navigate("/generate-proxy");
              }}
            >
              Generate Proxy ›
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
