import { TextField, Box } from "@mui/material";

export const TextFieldWithLabel = ({ label, sx, ...props }) => {
  return (
    <Box className="flex flex-col items-start w-full gap-1">
      <span className=" text-gray-500">{label}</span>
      <TextField sx={{ borderRadius: "20px", ...sx }} size="small" {...props} />
    </Box>
  );
};
