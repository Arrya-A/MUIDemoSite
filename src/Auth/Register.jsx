import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../images/bg-removebg-preview.png";

const Register = () => {
  return (
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
              p: { xs: 3, md: 0 },
            }}
          >
            <Stack spacing={2} sx={{ width: "400px" }}>
              <Typography>Sign Up</Typography>
              <TextField label="Username" variant="outlined" fullWidth />
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Password" variant="outlined" fullWidth />
              <Button variant="contained">Sign Up</Button>
              <Typography>
                Already a user? Sign in <Link to={"/"}>here</Link>
              </Typography>
            </Stack>
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
