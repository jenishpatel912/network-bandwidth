import React from "react";
import { Button, styled } from "@mui/material";

export const BlueButton = styled(Button)({
  textTransform: "none",
  backgroundColor: "#0066FF",
  "&:hover": {
    backgroundColor: "#0052CC",
  },
});
