import type { NextPage } from "next";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import SimpleMap from "./SimpleMap";
import React from "react";
import AField from "../../components/AField";

const Contact: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />

      <Box
        sx={{
          bgcolor: "#41AACB",
          width: "100%",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontFamily: "poppins", fontWeight: 600, mt: -4.7 }}
        >
          Contact Us
        </Typography>
      </Box>
      <Container>
        <Box sx={{ mb: 7 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Box textAlign="center" mb={3} mt={6.3}>
                <Typography
                  color="#008BB7"
                  sx={{ fontSize: 24, fontFamily: "poppins", fontWeight: 700 }}
                >
                  Get in Touch
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ padding: 3 }}>
              <Typography
                variant="h6"
                ml={0}
                color="#0F001A"
                sx={{ fontSize: 20, fontFamily: "poppins", fontWeight: 400 }}
              >
                Leave us a message
              </Typography>
              <form>
                <AField placeHolder="name" />
                <AField placeHolder="email" />
                <AField component="textarea" placeHolder="Message" />
              </form>
              <Button
                sx={{
                  marginTop: 5.3,
                  width: "100%",
                  color: "white",
                  fontSize: "16px",

                  pb: 0.3,
                  textTransform: "none",
                  display: "block",
                  fontFamily: "poppins",
                  fontWeight: 400,
                  bgcolor: "#41AACB",
                }}
              >
                Send
              </Button>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{ marginTop: 2.3, mb: 0, padding: 1 }}
            >
              <List>
                <ListItem>
                  <ListItemIcon sx={{ m: 0 }}>
                    <Image
                      src="/location.svg"
                      alt="verification illustration"
                      width={40}
                      height={40}
                    />
                  </ListItemIcon>
                  <Typography sx={{ fontSize: 16 }}>
                    205 Limestone Rd STE 200C
                  </Typography>
                </ListItem>

                <ListItem sx={{ paddingTop: 0.5 }}>
                  <ListItemIcon>
                    <Image
                      src="/telephone.svg"
                      alt="verification illustration"
                      width={40}
                      height={40}
                    />
                  </ListItemIcon>
                  <Typography sx={{ fontSize: 16 }}>+256200957272</Typography>
                </ListItem>

                <ListItem sx={{ paddingTop: 0.5 }}>
                  <ListItemIcon>
                    <Image
                      src="/email.svg"
                      alt="verification illustration"
                      width={40}
                      height={40}
                    />
                  </ListItemIcon>
                  <Typography sx={{ fontSize: 16 }}>
                    hello@airdady.com
                  </Typography>
                </ListItem>
              </List>
              <Box sx={{ width: "100%" }}>
                <SimpleMap />
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ marginTop: 3 }}>
              <Card sx={{ minWidth: 275, bgcolor: "#ECECEC", boxShadow: 0 }}>
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                    color="#000000"
                    gutterBottom
                  >
                    Main street Hoima - Hoima City Uganda
                    <br />
                    +256200957272
                    <br />
                    Mon-Fri 9am-6pm EAT
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6} sx={{ marginTop: 3 }}>
              <Card sx={{ minWidth: 275, bgcolor: "#ECECEC", boxShadow: 0 }}>
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                    color="#000000"
                    gutterBottom
                  >
                    205 Limestone Rd STE 200C WilmingTon -U.S.A
                    <br />
                    +256200957272
                    <br />
                    Mon-Fri 9am-6pm UTC
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Contact;
