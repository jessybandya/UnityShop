import React, { useEffect, useState, useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  avatar: "/static/images/avatars/avatar_6.png",
  city: "Los Angeles",
  country: "USA",
  jobTitle: "Senior Developer",
  name: "Katarina Smith",
  timezone: "GTM-7",
};

import { UserContext } from "../context/user-context.js";

export default function Profile(props) {
  const [state, reducer] = useContext(UserContext);
  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography color="textPrimary" gutterBottom variant="h5">
            {state.user.firstName} {state.user.lastName}
          </Typography>
          <Typography color="textSecondary" variant="body2">
            Email: {state.user.email}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="primary" fullWidth variant="text">
          Upload picture
        </Button>
      </CardActions>
    </Card>
  );
}
