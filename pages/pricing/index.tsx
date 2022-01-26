import type { NextPage } from "next";
import Image from "next/image";
import PricingTable from "../../components/PricingTable";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import Item from "antd/lib/list/Item";
import FolderIcon from "@mui/icons-material/Folder";
import React from "react";
import { Form, Input, Checkbox } from "antd";
import AField from "../../components/AField";

const Contact: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />

      <Box
        sx={{
          display: "flex",
          bgcolor: "#41AACB",
          width: "100%",
          height: "200px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Stack
            spacing={3}
            direction={{ xs: "column", sm: "column", md: "column" }}
          >
            <Box>
              <Typography
                justifyContent="center"
                align="center"
                variant="h3"
                sx={{ fontFamily: "poppins", fontWeight: 600, mt: "auto" }}
              >
                Pricing
              </Typography>
            </Box>

            <Box>
              <Typography
                justifyContent="center"
                align="center"
                sx={{
                  fontSize: 16,
                  fontFamily: "poppins",
                  fontWeight: 400,
                  mt: "auto",
                }}
              >
                Start with our competitive pay-as-you-go pricing. For deeper
                discounts on committed spend as you scale, talk with our sales
                team.
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container>
        <Box sx={{ mb: 7 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} sx={{ marginTop: 3 }}>
              <Card sx={{ minWidth: 275, bgcolor: "#ECECEC", boxShadow: 0 }}>
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 27,
                      fontFamily: "poppins",
                      fontWeight: 600,
                    }}
                    color="#000000"
                    gutterBottom
                  >
                    Pay-as-you-go SMS API pricing
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontFamily: "poppins",
                      fontWeight: 400,
                    }}
                    color="#000000"
                    gutterBottom
                  >
                    Prices are applied per message part based on the destination
                    and type of the message, as well as the carrier to which the
                    SMS is being sent. You’re only charged for what you use -
                    nothing more.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: 27,
                fontFamily: "poppins",
                fontWeight: 600,
              }}
              color="#000000"
              gutterBottom
            >
              SMS Pricing
            </Typography>
            <PricingTable />
          </Box>

          <Box sx={{ mt: 3 }}>
            <Typography
              sx={{
                fontSize: 27,
                fontFamily: "poppins",
                fontWeight: 600,
              }}
              color="#000000"
              gutterBottom
            >
              Verification Pricing
            </Typography>
            <PricingTable />
          </Box>

          <Box>
            <Card sx={{ mt: 3 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Stack
                    spacing={3}
                    direction={{ xs: "column", sm: "column", md: "column" }}
                  >
                    <Box>
                      <Typography
                        justifyContent="center"
                        align="center"
                        variant="h5"
                        sx={{
                          fontFamily: "poppins",
                          fontWeight: 400,
                          mt: "auto",
                        }}
                      >
                        Ready to get started
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        justifyContent="center"
                        align="center"
                        sx={{
                          fontSize: 19,
                          fontFamily: "poppins",
                          fontWeight: 400,
                          mt: "auto",
                        }}
                      >
                        Incase of any question feel free to reachout to our
                        experts or satisfied with our services feel free to get
                        your api keys today and start your free trial
                      </Typography>
                    </Box>
                  </Stack>
                </Box>

                <Stack
                  direction="row"
                  spacing={7}
                  sx={{
                    mt: 7,
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      display: "block",
                      fontFamily: "poppins",
                      fontWeight: 400,
                      backgroundColor: "white",
                      color: "#008BB7",
                      px: 3,
                      border: 1,
                      borderColor: "#008BB7",
                    }}
                  >
                    CONTACT EXPERTS
                  </Button>

                  <Button
                    sx={{
                      textTransform: "capitalize",
                      display: "block",
                      fontFamily: "poppins",
                      fontWeight: 400,
                      backgroundColor: "#008BB7",
                      color: "#ffffff",
                      px: 3,
                    }}
                  >
                    GET VERIFICATION API KEYS
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Contact;
