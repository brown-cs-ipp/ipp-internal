import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { approveApplication } from "../firebase/utils";

export default function Applications() {
  const data = useLoaderData();
  const allApps = Object.entries(data);

  return (
    <div style={{ margin: 40, display: "flex", flexDirection: "row", gap: 10 }}>
      {allApps
        .filter((elt) => !!elt[1].applicationId)
        .map((kvp) => {
          return (
            <Card>
              <CardHeader>
                <Typography>{kvp[1].applicationId}</Typography>
              </CardHeader>
              <CardContent>
                <Typography>{kvp[1].name}</Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => approveApplication(kvp[0], kvp[1])}>Approve</Button>
                <Button onClick={() => console.log("rejecting", kvp[0])}>Deny</Button>
              </CardActions>
            </Card>
          );
        })}
    </div>
  );
}
