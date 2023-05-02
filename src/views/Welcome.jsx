import { Typography } from "@mui/material";
import React from "react";

export default function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <Typography variant="h3">Welcome to IPP Admin Console</Typography>
    </div>
  );
}
