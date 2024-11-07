import React from "react";
import { Button } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const StatCard = ({
  icon,
  title,
  value,
  actionButton,
  totalLabel,
  isCurrency,
  totalValue,
}) => {
  return (
    <div className="bg-white flex flex-col w-full h-fit rounded-lg p-4 shadow-sm">
      {/* Icon Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-blue-500 rounded-lg">
          <img src={icon} alt={title} />
        </div>
      </div>

      {/* Title and Main Value */}
      <h3 className="font-medium text-gray-600">{title}</h3>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-normal">
          {isCurrency ? "$" : ""}
          {value}
        </span>

        <Button
          variant="outlined"
          size="small"
          className={`!text-sm !capitalize !font-medium !rounded-lg ${
            actionButton.color === "success" ? "!bg-[#ececec]" : ""
          } ${actionButton.color === "success" ? "!text-[#5dc77c]" : ""} ${
            actionButton.color === "success" ? "!border-[#5dc77c]" : ""
          }
            
            `}
        >
          {actionButton.title} ›
        </Button>
      </div>

      <hr className="my-4" />

      {/* Total Stats */}
      <div className=" text-gray-600">
        <span className="text-sm">{totalLabel}</span>
        <span className="float-right text-sm">
          {isCurrency ? "$" : ""}
          {totalValue}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
