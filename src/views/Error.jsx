import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">error: {error.data}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Login
      </Button>
    </div>
  );
}
