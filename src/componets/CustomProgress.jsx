import CircularProgress from "@mui/material/CircularProgress";

const CustomProgress = ({
  percentage,
  thickness = 5,
  borderColor,
  progressColor,
  size = 100,
  textLabel,
  className,
  percentageClass,
  ...rest
}) => {
  return (
    <div className={`relative ${className}`} {...rest}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={thickness}
        sx={{
          color: borderColor,
          position: "absolute",
          left: 0,
        }}
      />
      {/* Progress circle */}
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={size}
        thickness={thickness}
        sx={{
          color: progressColor,
        }}
      />

      <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className={`text-base font-medium ${percentageClass}`}>
          {percentage}%
        </span>
        {textLabel && <div className="text-xs text-gray-500">{textLabel}</div>}
      </div>
    </div>
  );
};

export default CustomProgress;
