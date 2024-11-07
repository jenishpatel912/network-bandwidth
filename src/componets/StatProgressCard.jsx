import React from "react";
import CustomProgress from "./CustomProgress";

const StatProgressCard = ({
  icon,
  title,
  value,
  totalLabel,
  isCurrency,
  percentage,
  totalValue,
}) => {
  return (
    <div className="bg-white flex flex-col w-full rounded-lg p-4 shadow-sm">
      {/* Icon Header */}
      <div className="flex  justify-between items-center">
        <div className="flex flex-col justify-between items-start">
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
          </div>
        </div>
        <CustomProgress
          borderColor="#f1f5f9"
          progressColor="#1a75ff"
          percentage={percentage}
          textLabel="Data Left"
        />
      </div>

      <hr className="my-4" />

      {/* Total Stats */}
      <div className="text-gray-600">
        <span>{totalLabel}</span>
        <span className="float-right">
          {isCurrency ? "$" : ""}
          {totalValue}
        </span>
      </div>
    </div>
  );
};

export default StatProgressCard;
