import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { UserContext } from "../context/user-context.js";
import { useFormik } from "formik";
import * as Yup from "yup";
import register from "../services/register.js";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}{" "}
      <Link color="inherit" href="https://mui.com/">
        EBESA{" "}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}{" "}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [state, dispatch] = useContext(UserContext);
  const navigate = useNavigate();
  /* const validationSchema = Yup.object({
    lastName: Yup.string().required(),
    firstName: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().password().required(),
  });*/

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    //validationSchema: validationSchema,
    onSubmit: async (values) => {
      //alert(JSON.stringify(values, null, 2))
      const profile = await register(event, values);
      alert(JSON.stringify(profile));
      //Set user context
      await dispatch({
        type: "SET_USER",
        payload: {
          id: profile.id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          email: profile.email,
        },
      });

      navigate("/");
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <Container component="main" maxWidth="xs">
        {" "}
        <CssBaseline />{" "}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {" "}
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
            }}
          >
            {" "}
            <LockOutlinedIcon />{" "}
          </Avatar>{" "}
          <Typography component="h1" variant="h5">
            Sign up{" "}
          </Typography>{" "}
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{
              mt: 3,
            }}
          >
            {" "}
            <Grid container spacing={2}>
              {" "}
              <Grid item xs={12} sm={6}>
                {" "}
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />{" "}
              </Grid>{" "}
              <Grid item xs={12} sm={6}>
                {" "}
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  name="lastName"
                  autoComplete="family-name"
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  name="email"
                  autoComplete="email"
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  autoComplete="new-password"
                />{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                {" "}
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />{" "}
              </Grid>{" "}
            </Grid>{" "}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
              }}
            >
              Sign Up{" "}
            </Button>{" "}
            <Grid container justifyContent="flex-end">
              {" "}
              <Grid item>
                {" "}
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in{" "}
                </Link>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Box>{" "}
        </Box>{" "}
        <Copyright
          sx={{
            mt: 5,
          }}
        />{" "}
      </Container>{" "}
    </ThemeProvider>
  );
}
