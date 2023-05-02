import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Partners from "./views/Partners";
import Error from "./views/Error";
import Login from "./views/Login";
import Home from "./views/Home";
import Applications from "./views/Applications";
import { getApplications, isLoggedIn } from "./firebase/utils";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "admin",
        element: <Home />,
        loader: isLoggedIn,
        children: [
          {
            path: "partners",
            element: <Partners />,
          },
          {
            path: "applications",
            element: <Applications />,
            loader: () => {
              return getApplications()
            }
          },
        ],
      },
      {
        index: true,
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
