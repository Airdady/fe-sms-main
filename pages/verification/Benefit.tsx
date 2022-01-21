import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

import {
  Container,
  Typography,
  CardMedia,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";
// import Card from "../../components/Card";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.text.secondary,
  display: "flex",
  height: "100%",
}));

const Benefit = () => {
  return (
    <Box sx={{ width: "100%", py: 4, backgroundColor: "rgb(231, 235, 240)" }}>
      <Container maxWidth="lg">
        <Typography textAlign="center" variant="h6" gutterBottom>
          Assist new user registration and activation to retain every customer
        </Typography>

        <Grid
          container
          rowSpacing={1}
          sx={{ mt: 4 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Box sx={{ width: "20%", ml: "40%", mr: "40%" }}>
                  <Image
                    src="/convenient.svg"
                    alt="convenient illustration"
                    width={320}
                    height={320}
                  />
                </Box>

                <Typography variant="h4" sx={{ mb: 0 }}>
                  <p align="center"> Convenient log in </p>
                </Typography>

                <Typography variant="p">
                  <p align="center">
                    Dynamic authentication improves retention rate by
                    eliminating the need to remember complex passwords{" "}
                  </p>
                </Typography>
              </CardContent>
            </Card>
            {/* <Card
              mainText="Convenient log in"
              subText="Dynamic authentication improves retention rate by eliminating the
            need to remember complex passwords"
              svgname="/convenient.svg"
            /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {/* <Card
              mainText="Ensure safety"
              subText="Sensitive operations are confirmed and authenticated to reduce
                  malicious operations by illegal users and ensure account
                  security"
              svgname="/safety.svg"
            /> */}
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            {/* <Card
              mainText="Identity authentication"
              subText="Guarantee the authenticity of registration, mobile phone
                  number binding, retrieve password, and avoid repeated data"
              svgname="/identity.svg"
            /> */}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefit;
