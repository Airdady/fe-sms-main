import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.text.secondary,
  display: "flex",
  height:"100%"
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
          <Grid item xs={4}>
            <Item>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  my: 1,
                  bgcolor: "rgb(231, 235, 240)",
                  borderRight:"solid #41aacb"
                }}
              />
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  Convenient log in
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Dynamic authentication improves retention rate by eliminating
                  the need to remember complex passwords
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  my: 1,
                  bgcolor: "rgb(231, 235, 240)",
                  borderRight:"solid #41aacb"
                }}
              />
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  Ensure safety
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Sensitive operations are confirmed and authenticated to reduce
                  malicious operations by illegal users and ensure account
                  security
                </Typography>
              </Box>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  mx: "auto",
                  my: 1,
                  bgcolor: "rgb(231, 235, 240)",
                  borderRight:"solid #41aacb"
                }}
              />
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  Identity authentication
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Guarantee the authenticity of registration, mobile phone
                  number binding, retrieve password, and avoid repeated data
                </Typography>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefit;
