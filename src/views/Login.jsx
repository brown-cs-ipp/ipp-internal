import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Snackbar,
  TextField,
} from "@mui/material";
import React from "react";
import { firebaseSignIn } from "../firebase/utils";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loginInfo, setLoginInfo] = React.useState({
    email: "",
    password: "",
    serverError: { status: "", message: "" },
    clientError: { status: "", message: "" },
  });

  const navigate = useNavigate();
  const handleChange = (event) => {
    setLoginInfo({ ...loginInfo, [event.target.name]: event.target.value });
  };
  const login = () => {
    firebaseSignIn(loginInfo)
      .then((user) => {
        navigate("/admin", { state: user });
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/invalid-email") {
          setLoginInfo({
            ...loginInfo,
            clientError: { status: error.code, message: "Email must be valid" },
          });
        } else if (error.code === "auth/invalid-password") { // this actually doesn't seem to ever hit
          setLoginInfo({
            ...loginInfo,
            clientError: {
              status: error.code,
              message: "Password must be at least 6 characters long",
            },
          });
        } else if (
          error.code === "auth/wrong-password" ||
          "auth/user-not-found"
        ) {
          setLoginInfo({
            ...loginInfo,
            serverError: {
              status: error.code,
              message: "Incorrect email or password",
            },
          });
        }
      });
  };
  const handleClose = () => {
    setLoginInfo({
      ...loginInfo,
      serverError: { status: "", message: "" },
      clientError: { status: "", message: "" },
    });
  };
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
            error={loginInfo.clientError.status === "auth/invalid-email"}
            helperText={loginInfo.clientError.message}
          ></TextField>
          <TextField
            required
            label="Password"
            name="password"
            type="password"
            value={loginInfo.password}
            onChange={handleChange}
          ></TextField>
        </CardContent>
        <CardActions>
          <Button
            disabled={!(loginInfo.email && loginInfo.password)}
            onClick={() => login(loginInfo)}
          >
            Login
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        open={!!loginInfo.serverError.message}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="error" onClose={handleClose}>
          Error: {loginInfo.serverError.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
