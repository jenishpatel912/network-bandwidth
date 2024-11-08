import { ContentCopy, Download } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControlLabel,
  InputAdornment,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import React, { useState } from "react";
import { BlueButton } from "../componets/BlueButton";
import CustomProgress from "../componets/CustomProgress";
import StatCard from "../componets/StatCard";
import { TextFieldWithLabel } from "../componets/TextFieldWithLabel";
import { fetchData } from "../utils";

const BandwidthInput = () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));

  let residentialAccountInfo = JSON.parse(
    localStorage.getItem("residential-account-info")
  );
  const [bandwidth, setBandwidth] = useState(0);

  const { username } = userInfo || {};
  const { balance } = residentialAccountInfo || {};

  const handleAddBandwidth = async () => {
    const { error, response } = await fetchData("add-gigabytes-residential", {
      username,
      flow: 1,
      duration: bandwidth,
    });
    if (error) {
      console.log(error);
    } else {
      console.log(response);
    }
  };

  return (
    <div className="flex flex-col items-start w-full gap-2">
      <span className="mr-2 text-gray-500">Add Bandwidth</span>
      <div className="flex justify-between w-full">
        <TextField
          size="small"
          type="number"
          defaultValue={0}
          fullWidth
          sx={{
            display: "flex",
            marginRight: 4,
          }}
          value={bandwidth}
          onChange={(e) => {
            const num = Number(e.target.value);
            if (num > 0) {
              setBandwidth(num);
            } else {
              setBandwidth(null);
            }
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <span className="font-semibold text-[#116ce6]">GB</span>
                </InputAdornment>
              ),
            },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            width: "100px",
          }}
          disabled={!bandwidth}
          onClick={handleAddBandwidth}
        >
          ADD ›
        </Button>
      </div>
    </div>
  );
};

const ProxyGenerator = () => {
  const [proxyType, setProxyType] = useState("Standard");
  const [country, setCountry] = useState("Germany");
  const [tab, setTab] = useState(0);
  const [stickyTime, setStickyTime] = useState(22);
  const [stickyCount, setStickyCount] = useState(2000);

  const rotatingProxy =
    "resi-eu.lightningproxies.net:9999:dnzkfhzjlkcobzp90166-zone-resi-region-de:lsusonhynm";
  const generatedProxy =
    "resi-eu.lightningproxies.net:9999:dnzkfhzjlkcobzp90166-zone-resi-region-de-session-39HivxVQaccW-sessTime=22:lsusonhynm";

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <div className="p-6 bg-[#f4f6f8] rounded-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-medium">Generate Proxy</h2>
          <p className="text-gray-600">Plan ID : 672576d20a6c581e87249045</p>
        </div>
        <div className="flex items-center gap-2">
          <span>Need Support?</span>
          <Button variant="contained" color="primary">
            Contact Us ›
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="flex flex-wrap gap-6 mb-8">
        <StatCard
          icon="https://lightningproxies.net/assets/images/icons/qube.svg"
          title="Current Plan"
          subTitle="Residential 5GB"
          titleClass="text-gray-400"
          subTitleClass="!font-medium"
          className="max-w-md pl-6 pb-6 pt-6 flex-1"
          actionButton={{
            className: "self-start",
            title: "Plan Settings",
            onClick: () => {},
          }}
        />

        <StatCard
          icon="https://lightningproxies.net/assets/images/icons/date-w.svg"
          title="Plan Expiry"
          subTitle="31 Jun 2025 03:52"
          titleClass="text-gray-400"
          subTitleClass="!font-medium"
          className="max-w-md pl-6 pb-6 pt-6 flex-1"
          actionButton={{
            className: "self-start",
            title: "Auto Renew",
            onClick: () => {},
          }}
        />

        {/* Bandwidth Progress */}

        <div className="bg-white flex flex-[2] justify-between p-4 rounded-lg w-full h-fit">
          <div className="flex flex-col justify-between items-start gap-6 w-1/4 h-full">
            <div className="p-2 bg-blue-500 rounded-lg">
              <img
                src={
                  "https://lightningproxies.net/assets/images/icons/quee.svg"
                }
                alt={"Bandwidth"}
              />
            </div>

            <div className="flex flex-col justify-between items-start">
              <h3 className="font-medium text-gray-600">Total Bandwidth</h3>
              <span className="text-2xl font-normal">
                {bytesToGB(balance)} GB
              </span>
            </div>
          </div>

          <div className="flex items-center border-l border-gray-200 w-3/4 h-full pl-8">
            <CustomProgress
              borderColor="#8abaff"
              progressColor="#1a75ff"
              percentage={76}
              percentageClass="!text-2xl"
              size={120}
              thickness={6}
            />

            <div className="flex flex-col w-full items-center gap-2 pl-6">
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#8abaff]"></div>
                  <span className="text-gray-400">Used Bandwidth</span>
                </div>

                <span>1.2 GB</span>
              </div>

              <div className="flex w-full justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#1a75ff]"></div>
                  <span className="text-gray-400">Remaining Bandwidth</span>
                </div>

                <span>3.8 GB</span>
              </div>

              <BandwidthInput />
            </div>
          </div>
        </div>
      </div>

      {/* Configure Proxy Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Configure Proxy</h3>
        <p className="text-gray-600">Configure your proxy type, and white</p>
      </div>
      <div className="flex w-full justify-between gap-8">
        <div className=" bg-white rounded-lg w-full">
          {/* Proxy Type Selection */}
          <RadioGroup
            row
            value={proxyType}
            className="self-end flex justify-end"
            onChange={(e) => setProxyType(e.target.value)}
          >
            <FormControlLabel
              value="Standard"
              control={<Radio color="primary" />}
              label="Standard"
            />
            <FormControlLabel
              value="Regions"
              control={<Radio color="primary" />}
              label="Regions"
            />
          </RadioGroup>

          {/* Tabs */}
          <Tabs
            value={tab}
            onChange={handleTabChange}
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tab label="User Auth & Pass" />
            <Tab label="Whitelist IP" />
          </Tabs>

          <Box
            sx={{
              display: tab === 0 ? "block" : "none",
              p: 3,
              // paddingTop: "4px",
            }}
          >
            {/* Username and Password Fields */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 2,
                mb: 3,
              }}
            >
              <Box className="flex flex-col items-start w-full gap-1">
                <span className=" text-gray-500">Username</span>
                <TextField
                  defaultValue="dnzkfhzjlkcobzp90166-zone-resi-region-de"
                  size="small"
                  fullWidth
                />
              </Box>

              <Box className="flex flex-col items-start gap-1 w-full">
                <span className=" text-gray-500">Password</span>
                <TextField defaultValue="lsusonhynm" size="small" fullWidth />
              </Box>
            </Box>

            {/* Country-State-City Label */}
            <Button
              sx={{
                bgcolor: "#0066FF",
                marginLeft: "auto",
                alignSelf: "end",
                alignItems: "self-end",
                display: "flex",
                color: "white",
                p: 1,
                width: "20rem",
                mb: 2,
                borderRadius: 2,
              }}
            >
              Country - State - City
            </Button>

            {/* Location Fields */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 3,
              }}
            >
              <Box className="flex flex-col items-start w-full gap-1">
                <span className=" text-gray-500">Country</span>
                <Select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  size="small"
                  fullWidth
                  sx={{ bgcolor: "white" }}
                >
                  <MenuItem value="Germany">Germany</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                  <MenuItem value="Spain">Spain</MenuItem>
                </Select>
              </Box>
              <Box className="flex flex-col items-start w-full gap-1">
                <span className=" text-gray-500">State </span>
                <TextField
                  fullWidth
                  defaultValue="Worldwide Mix"
                  size="small"
                />
              </Box>
              <Box className="flex flex-col items-start w-full gap-1">
                <span className=" text-gray-500">City</span>
                <TextField
                  fullWidth
                  defaultValue="Worldwide Mix"
                  size="small"
                />
              </Box>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                sx={{
                  backgroundColor: "#0066FF",
                  color: "white",
                  textTransform: "none",
                  borderRadius: 2,
                }}
                variant="outlined"
              >
                API Generator ›
              </Button>

              <Button
                sx={{
                  backgroundColor: "#0066FF",
                  color: "white",
                  textTransform: "none",
                  borderRadius: 2,
                }}
                variant="outlined"
              >
                Update Settings ›
              </Button>
            </Box>
          </Box>
        </div>

        {/* Sticky Sessions Section */}
        <div className=" bg-white w-full rounded-lg">
          {/* Proxy Section */}

          <Box sx={{ p: 2, mb: 2, borderBottom: "1px solid #e0e0e0" }}>
            <Typography
              sx={{
                fontSize: "1.1rem",
                color: "#666666",
              }}
              variant="h6"
            >
              Proxy
            </Typography>
          </Box>

          <Box sx={{ p: 4, pt: 0 }}>
            {/* Host and Port */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mb: 3,
              }}
            >
              <TextFieldWithLabel
                label="Host"
                defaultValue="resi-eu.lightningproxies.net"
                fullWidth
              />
              <TextFieldWithLabel
                label="Port (HTTP & SOCKS5)"
                defaultValue="9999"
                fullWidth
              />
            </Box>

            <TextFieldWithLabel
              label="Rotating Proxy"
              fullWidth
              value={rotatingProxy}
              sx={{ mb: 3 }}
              InputProps={{
                readOnly: true,
              }}
            />

            {/* Sticky Sessions */}
            <Box
              sx={{
                bgcolor: "#fafafa",
                border: 1,
                borderColor: "#e0e0e0",
                borderRadius: 2,
                p: 2,
                mb: 2,
              }}
            >
              <Typography variant="body1" sx={{ mb: 1 }}>
                Sticky Sessions ( Session time: {stickyTime} min )
              </Typography>
              <Slider
                value={stickyTime}
                onChange={(_, value) => setStickyTime(value)}
                max={60}
                sx={{
                  color: "#0066FF",
                  "& .MuiSlider-thumb": {
                    width: 16,
                    height: 16,
                  },
                  "& .MuiSlider-track": {
                    height: 6,
                    color: "#dee2e6",
                  },
                  "& .MuiSlider-rail": {
                    height: 6,
                    color: "#dee2e6",
                  },
                }}
              />
            </Box>

            {/* Sticky Count */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <span className="text-gray-500 mr-2 text-lg">Sticky count:</span>
              <TextField
                size="small"
                value={stickyCount}
                onChange={(e) => setStickyCount(e.target.value)}
                sx={{ width: 100 }}
              />
            </Box>

            {/* Generated Proxy */}
            <TextField
              fullWidth
              multiline
              rows={2}
              value={generatedProxy}
              sx={{ mb: 2 }}
              InputProps={{
                readOnly: true,
              }}
            />

            {/* Action Buttons */}
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                startIcon={<Download />}
                variant="text"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                Save as .txt
              </Button>
              <BlueButton variant="contained">Copy Proxies</BlueButton>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ProxyGenerator;
