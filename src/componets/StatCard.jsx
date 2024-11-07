import { Button } from "@mui/material";
import React from "react";

const StatCard = ({
  icon,
  title,
  titleClass,
  subTitleClass,
  subTitle,
  customActionButton,
  actionButton,
  totalLabel,
  totalValue,
  className,
}) => {
  return (
    <div
      className={`bg-white flex flex-col w-full h-fit rounded-lg p-4 shadow-sm ${className}`}
    >
      {/* Icon Header */}
      <div className="flex justify-between">
        <div className="flex flex-col justify-between items-start">
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-500 rounded-lg">
              <img src={icon} alt={title} />
            </div>
          </div>

          {/* Title and Main Value */}
          <h3 className={`font-medium text-gray-600 ${titleClass}`}>{title}</h3>
          <span className={`text-2xl font-normal ${subTitleClass}`}>
            {subTitle}
          </span>
        </div>

        {customActionButton ? (
          customActionButton
        ) : (
          <Button
            variant="outlined"
            size="small"
            className={`!text-sm !capitalize !font-medium !rounded-lg ${
              actionButton?.color === "success" ? "!bg-[#ececec]" : ""
            } ${actionButton?.color === "success" ? "!text-[#5dc77c]" : ""} ${
              actionButton?.color === "success" ? "!border-[#5dc77c]" : ""
            } ${actionButton?.className}`}
            onClick={actionButton?.onClick}
          >
            {actionButton?.title} ›
          </Button>
        )}
      </div>

      {totalLabel && <hr className="my-2" />}
      {/* Total Stats */}
      {totalLabel && (
        <div className=" text-gray-600">
          <span className="text-sm">{totalLabel}</span>
          <span className="float-right text-sm">{totalValue}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
