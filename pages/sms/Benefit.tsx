import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Typography, Stack, Card, CardContent } from "@mui/material";

const Benefit = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              sx={{
                backgroundColor: "rgb(231, 235, 240)",
              }}
            >
              <Grid item xs={12} sm={12} md={4} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/sms-illustration-1.svg"
                    alt="sms illustration"
                    width={200}
                    height={200}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={8} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                  }}
                >
                  <Typography sx={{ fontSize: 18, fontWeight: "bolder" }}>
                    Improve customer experience and extend customer life cycle
                  </Typography>
                  <Typography variant="body2">
                    Send care and reminders to customers on holidays, members'
                    birthdays and other time nodes, creating experience that
                    customers value in the process of communication
                  </Typography>
                </Box>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Stack
              direction={{ xs: "column", lg: "row" }}
              sx={{
                backgroundColor: "#ffffff",
              }}
            >
              <Grid item xs={12} sm={12} md={4} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/sms-illustration-2.svg"
                    alt="sms illustration"
                    width={200}
                    height={200}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={8} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                  }}
                >
                  <Typography sx={{ fontSize: 18, fontWeight: "bolder" }}>
                    Improve customer experience and extend customer life cycle
                  </Typography>
                  <Typography variant="body2">
                    Send care and reminders to customers on holidays, members'
                    birthdays and other time nodes, creating experience that
                    customers value in the process of communication
                  </Typography>
                </Box>
              </Grid>
            </Stack>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Stack
              direction={{ xs: "column", lg: "column" }}
              sx={{
                bgcolor: "#ffffff",
              }}
            >
              <Grid item xs={12} sm={12} md={4} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src="/sms-illustration-3.svg"
                    alt="sms illustration"
                    width={200}
                    height={200}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={12} md={8} lg={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    pb: 7,
                    backgroundColor: "rgb(231, 235, 240)",
                  }}
                >
                  <Typography sx={{ fontSize: 18, fontWeight: "bolder" }}>
                    Timely notification of marketing activities to increase
                    customer conversion
                  </Typography>

                  <Typography variant="body2">
                    Send care and reminders to customers on holidays, members'
                    birthdays and other time nodes, creating experience that
                    customers value in the process of communication
                  </Typography>
                </Box>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Benefit;
