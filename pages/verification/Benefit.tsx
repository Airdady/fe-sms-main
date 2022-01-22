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
  IconButton,
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
          rowSpacing={3.3}
          sx={{ mt: 4 }}
          columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Image
                  src="/convenient.svg"
                  alt="sms illustration"
                  width={350}
                  height={120}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      fontWeight: "bolder",
                    }}
                  >
                    Convenient log in
                  </Typography>
                  <Typography>
                    Dynamic authentication improves retention rate by
                    eliminating the need to remember complex passwords
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{ minWidth: 275, pt: 6.3, position: "relative", top: -17.3 }}
            >
              <CardContent>
                <Image
                  src="/safety.svg"
                  alt="sms illustration"
                  width={350}
                  height={120}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Typography sx={{ fontSize: 18, fontWeight: "bolder" }}>
                    Ensure safety
                  </Typography>
                  <Typography>
                    Sensitive operations are confirmed and authenticated to
                    reduce malicious operations by illegal users and ensure
                    account securit
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Image
                  src="/identity.svg"
                  alt="sms illustration"
                  width={350}
                  height={120}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    flexGrow: 1,
                    textAlign: "center",
                    p: 3,
                  }}
                >
                  <Typography sx={{ fontSize: 18, fontWeight: "bolder" }}>
                    Identity authentication
                  </Typography>
                  <Typography>
                    Guarantee the authenticity of registration, mobile phone
                    number binding, retrieve password, and avoid repeated data
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefit;
