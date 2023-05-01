import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import React from "react";
import { login } from "../firebase/utils";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginInfo, setLoginInfo] = React.useState({ email: "", password: "" });
  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card sx={{ padding: "30px" }}>
        <CardHeader title="Login"></CardHeader>
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <TextField
            required
            label="Email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
          ></TextField>
          <TextField
            required
            label="Password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
          ></TextField>
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              login(loginInfo).then((user) =>
                navigate("/protected", { state: user })
              )
            }
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
