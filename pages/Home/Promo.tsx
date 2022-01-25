import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Grid, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Promo: NextPage = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#ffffff",
          width: "100%",
          height: "83vh",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(/promo.svg)`,
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} pl={3} pr={3} pb={3} pt={0}>
            <Grid item xs={12} md={12}>
              <Box mt={3} display="flex" justifyContent="center">
                <Box mt="auto">
                  <Typography
                    sx={{
                      fontSize: 27,
                      fontWeight: "bolder",
                      mt: 3,
                      color: "#000000",
                    }}
                    variant="h2"
                    component="div"
                    display="flex"
                    justifyContent="center"
                  >
                    Free Trial Credit
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#000000", mb: 9.7 }}
                    display="flex"
                    justifyContent="center"
                  >
                    We provide free trial credit to our newcustomers
                  </Typography>

                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    spacing={7}
                    sx={{ mb: 7 }}
                  >
                    <Stack spacing={-1.3}>
                      <Typography
                        sx={{
                          fontSize: 27,
                          fontWeight: "bolder",
                          mb: 1.7,
                          color: "#000000",
                        }}
                        variant="h2"
                        component="div"
                      >
                        Pleasant Api Features
                      </Typography>

                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ color: "#000000" }}
                        display="flex"
                        justifyContent="left"
                      >
                        These include sms delay timing,customisable otp length
                      </Typography>
                    </Stack>

                    <Stack spacing={-1.3}>
                      <Typography
                        sx={{
                          fontSize: 27,
                          fontWeight: "bolder",
                          mb: 1.7,
                          color: "#000000",
                        }}
                        variant="h2"
                        component="div"
                      >
                        Pay-as-you-go Pricing
                      </Typography>

                      <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ color: "#000000" }}
                        display="flex"
                        justifyContent="left"
                      >
                        Transperance usage pricing pay only for what you have
                        used
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack spacing={-1.3}>
                    <Typography
                      sx={{
                        fontSize: 27,
                        fontWeight: "bolder",
                        mb: 1.7,
                        color: "#000000",
                      }}
                      variant="h2"
                      component="div"
                      display="flex"
                      justifyContent="center"
                    >
                      Competetive pricing
                    </Typography>

                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#000000" }}
                      display="flex"
                      justifyContent="center"
                    >
                      We provide the best and most competitive pricing
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Promo;
