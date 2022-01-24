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

const Documentation = () => {
  return (
    <Box sx={{ width: "100%", py: 4, backgroundColor: "#ffffff" }}>
      <Container maxWidth="lg">
        <Card
          sx={{
            flex: 1,
            pl: 3,
            pr: 3,
            pt: 1.3,
            pb: 3,
            position: "relative",
            top: -93,
            boxShadow: "none",
          }}
        >
          <Grid
            container
            rowSpacing={0}
            sx={{ mt: 0 }}
            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
          >
            <Grid item xs={12} sm={12} md={5.2}>
              <Grid item xs={12} sm={12} md={12}>
                <Card
                  sx={{
                    minWidth: 275,

                    minHeight: 270,
                    border: 0,
                    borderColor: "#C4C4C4",
                    mb: 1,
                    boxShadow: "none",
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "left",
                        justifyContent: "left",
                        flexGrow: 1,
                        textAlign: "left",
                        p: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 38,
                          fontWeight: "400",
                        }}
                      >
                        Carefully documented API
                      </Typography>
                      <Typography sx={{ pb: 3 }}>
                        Our Api is carefully crafted using postman documenter
                        and supports all the popular programming languages .
                      </Typography>
                      <Typography sx={{ pb: 3 }}>
                        and for the languages not listed we have an api to be
                        intergrated in different languages to make it easier for
                        every developer to be able to use our Api
                      </Typography>
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          display: "block",
                          maxWidth: 300,
                          fontFamily: "poppins",
                          fontWeight: 700,
                          backgroundColor: "#C4C4C4",
                          color: "black",
                          px: 0,
                          mb: 3,
                        }}
                      >
                        View Documentation
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={0.4}>
              <Box
                sx={{
                  borderRight: 1,
                  height: 330,
                  ["@media screen and (max-width: 992px)"]: {
                    display: "none",
                  },
                  ["@media screen and (max-width: 600px)"]: {
                    display: "block",
                    borderTop: 1,
                    borderRight: 0,
                    height: 7,
                  },
                }}
              >
                <Box
                  sx={{
                    ["@media screen and (max-width: 600px)"]: {
                      display: "none",
                    },
                    position: "relative",
                    left: 15,
                    top: 153,
                  }}
                >
                  <Image
                    src="/postman.svg"
                    alt="sms illustration"
                    width={55650}
                    height={55320}
                  />
                </Box>

                <Box
                  sx={{
                    ["@media screen and (max-width: 600px)"]: {
                      display: "block",
                      position: "relative",
                      left: 7,
                      top: -37,
                    },

                    display: "none",
                  }}
                >
                  <Image
                    src="/postman.svg"
                    alt="sms illustration"
                    width={300}
                    height={70}
                  />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={5.2}>
              <Card
                sx={{
                  mt: 3,
                  minWidth: 275,
                  minHeight: 200,
                  border: 0,
                  borderColor: "#C4C4C4",
                  mb: 1,
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Grid container direction="row">
                    <Grid item xs={6} sm={6} md={4}>
                      <Image
                        src="/go-logo.svg"
                        alt="sms illustration"
                        width={350}
                        height={120}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <Image
                        src="/php-logo.svg"
                        alt="sms illustration"
                        width={350}
                        height={120}
                      />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                      <Image
                        src="/java-logo.svg"
                        alt="sms illustration"
                        width={350}
                        height={120}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Grid item xs={12} sm={12} md={4}>
                      <Image
                        src="/curl-logo.svg"
                        alt="sms illustration"
                        width={350}
                        height={120}
                      />
                    </Grid>
                  </Grid>

                  <Grid container direction="row">
                    <Grid item xs={12} sm={12} md={4}>
                      <Image
                        src="/python-logo.svg"
                        alt="sms illustration"
                        width={350}
                        height={120}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <Image
                        src="/javascript-logo.svg"
                        alt="sms illustration"
                        width={350}
                        height={120}
                      />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                      <Image
                        src="/javascript-logo1.svg"
                        alt="sms illustration"
                        width={350}
                        height={120}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Documentation;
