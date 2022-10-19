import React, { useState, useContext, useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { sizing } from "@mui/system";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/client/members")
      .then((res) => {
        setMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
    >
      <div>
        <Box>
          <Typography gutterBottom variant="h5" component="h2">
            EBESA Members
          </Typography>
          <ul>
            {members.map((member) => (
              <Grid item key={member} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    margin: "5px",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {member.firstName} {member.lastName}
                    </Typography>
                    <Typography>Email: {member.email}</Typography>
                  </CardContent>
                  <CardActions>
                    {/*<Link to={`/viewmember/${member.id}`}>
                      <Button size="small">View Member</Button>
                    </Link>*/}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </ul>
        </Box>
      </div>
    </Box>
  );
}
