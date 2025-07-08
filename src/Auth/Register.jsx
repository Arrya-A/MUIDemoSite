import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/bg-removebg-preview.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormProvider from "../utils/FormProvider";
import useAuth from "./hook/useAuth";
import { useSnackbar } from "notistack";

const defaultValues = {
  username: "",
  email: "",
  password: "",
};

const registerSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

const Register = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const { registerUser } = useAuth();
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (formdata) => {
    console.log(formdata);
    try {
      const { data, status } = await registerUser(formdata);
      if (status === 200) {
        console.log(status, data);

        enqueueSnackbar("User Registered Successfully", { variant: "success" });
        navigate("/");
      } else {
        enqueueSnackbar("Registeration failed", { variant: "error" });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "whitesmoke",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 5,
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
              justifyContent: "center",
              alignItems: "center",
              p: 3,
            }}
          >
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
              <Stack
                spacing={2}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "400px",
                  },
                }}
              >
                <Typography>Sign Up</Typography>
                <TextField
                  label="Username"
                  variant="outlined"
                  fullWidth
                  {...register("username")}
                  error={!!errors?.username}
                  helperText={errors?.username?.message}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  {...register("email")}
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                />
                <TextField
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  {...register("password")}
                  error={!!errors?.password}
                  helperText={errors?.password?.message}
                />
                <TextField
                  type="password"
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  {...register("confirm_password")}
                  error={!!errors?.confirm_password}
                  helperText={errors?.confirm_password?.message}
                />
                <Button type="submit" variant="contained">
                  Sign Up
                </Button>
                <Typography>
                  Already a user? Sign in <Link to={"/"}>here</Link>
                </Typography>
              </Stack>
            </FormProvider>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={image} height="100%" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Register;
