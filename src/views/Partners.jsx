import {
  Button,
  Typography,
} from "@mui/material";
import React from "react";
import { logout } from "../firebase/utils";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function Partners() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>Welcome!</Typography>
      <Button
        onClick={() => {
          logout();
          navigate("/");
        }}
      >
        Logout
      </Button>
    </div>
  );
}
