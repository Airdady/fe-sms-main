import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
}));

const Industry = () => {
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
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Image
                src="/industries.svg"
                alt="industry"
                width={400}
                height={500}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  New customers through verification code
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Provide a global stable connection SMS channel for your
                  website and APP, quickly verify the authenticity of customers,
                  improve the conversion rate of registration, help products to
                  attract new customers efficiently
                </Typography>
              </Box>
            </Item>
            <Box my={3}>
            <Item>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  New customers through verification code
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Provide a global stable connection SMS channel for your
                  website and APP, quickly verify the authenticity of customers,
                  improve the conversion rate of registration, help products to
                  attract new customers efficiently
                </Typography>
              </Box>
            </Item>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Industry;
