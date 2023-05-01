import { Button } from "@mui/material";
import React from "react";
import { logout } from "../firebase/utils";
import { useNavigate } from "react-router-dom";

export default function Protected() {
  const navigate = useNavigate();
  return (
    <div>
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
