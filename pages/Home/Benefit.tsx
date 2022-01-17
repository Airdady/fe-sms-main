import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Card, CardContent, Container, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.text.secondary,
  display: "flex",
  background: "rgba(216, 216, 216, 0.24)",
  height: "100%",
}));

const Benefit = () => {
  return (
    <Container sx={{ mt: -4 }} maxWidth="lg">
      <Card>
        <CardContent>
          <Typography textAlign="center" variant="h6" gutterBottom>
            Assist new user registration and activation to retain every customer
          </Typography>
          <Grid
            container
            rowSpacing={1}
            rowGap={3}
            columnSpacing={3}
          >
            <Grid item xs={6}>
              <Item>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    bgcolor: "rgb(231, 235, 240)",
                    borderRight: "solid #41aacb",
                  }}
                />
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>
                    Convenient log in
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Dynamic authentication improves retention rate by
                    eliminating the need to remember complex passwords
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    bgcolor: "rgb(231, 235, 240)",
                    borderRight: "solid #41aacb",
                  }}
                />
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>
                    Ensure safety
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Sensitive operations are confirmed and authenticated to
                    reduce malicious operations by illegal users and ensure
                    account security
                  </Typography>
                </Box>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    bgcolor: "rgb(231, 235, 240)",
                    borderRight: "solid #41aacb",
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
            <Grid item xs={6}>
              <Item>
                <Box
                  sx={{
                    width: 100,
                    height: 100,
                    mx: "auto",
                    bgcolor: "rgb(231, 235, 240)",
                    borderRight: "solid #41aacb",
                  }}
                />
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>
                    Convenient log in
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Dynamic authentication improves retention rate by
                    eliminating the need to remember complex passwords
                  </Typography>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Benefit;
