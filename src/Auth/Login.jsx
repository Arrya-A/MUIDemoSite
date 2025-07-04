import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/bg-removebg-preview.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormProvider from "../utils/FormProvider";
import useAuth from "./hook/useAuth";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { useState } from "react";

const defaultValues = {
  email: "",
  password: "",
};

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState("");

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(loginSchema),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoginError("");
      await loginUser(data);
      const token = localStorage.getItem("accessToken");
      if (token) {
        toast.success("Login successful");
        console.log("login successful");

        navigate("/dummy");
      } else {
        setLoginError("Invalid Credentials");
        toast.error("Login failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "whitesmoke",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            backgroundColor: "white",
            width: "75%",
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                p: { xs: 3, md: 0 },
              }}
            >
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2}  sx={{ width: "400px" }}>
                  <Typography variant="h6">Sign In</Typography>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    {...register("email")}
                    error={!!errors?.email}
                    helperText={errors?.email?.message}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    fullWidth
                    {...register("password")}
                    error={!!errors?.password}
                    helperText={errors?.password?.message}
                  />
                  <Button type="submit" variant="contained">
                    Sign In
                  </Button>
                  <Typography>
                    New User? Sign up <Link to={"/register"}>here</Link>
                  </Typography>
                </Stack>
              </FormProvider>
            </Grid>
            <Grid item xs={12} md={6} >
              <img src={image} height="100%" width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Login;
