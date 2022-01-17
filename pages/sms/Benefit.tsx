import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";
import { Container, Typography } from "@mui/material";

const Benefit = () => {
  return (
    <>
      <Box sx={{ width: "100%", py: 4, backgroundColor: "rgb(231, 235, 240)" }}>
        <Container maxWidth="lg">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    mx: "auto",
                    my: 1,
                  }}
                >
                  <Image
                    src="/sms-illustration-1.svg"
                    alt="sms illustration"
                    width={250}
                    height={250}
                  />
                </Box>
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>
                    Convenient log in
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Dynamic authentication improves retention rate by
                    eliminating the need to remember complex passwords
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  Convenient log in
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Dynamic authentication improves retention rate by eliminating
                  the need to remember complex passwords
                </Typography>
              </Box>
              <Box
                sx={{
                  mx: "auto",
                  my: 1,
                }}
              >
                <Image
                  src="/sms-illustration-1.svg"
                  alt="sms illustration"
                  width={250}
                  height={250}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Benefit;
