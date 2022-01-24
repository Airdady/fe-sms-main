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
        <Card
          sx={{
            flex: 1,
            pl: 3,
            pr: 3,
            pt: 1.3,
            pb: 3,
            position: "relative",
            top: -93,
          }}
        >
          <Grid
            container
            rowSpacing={3.3}
            sx={{ mt: 4 }}
            columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={4}>
              <Card
                sx={{
                  minWidth: 275,
                  maxHeight: 240,
                  minHeight: 240,
                  border: 1,
                  borderColor: "#C4C4C4",
                  mb: 1,
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Image
                    src="/conversion.svg"
                    alt="sms illustration"
                    width={300}
                    height={70}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                      textAlign: "center",
                      p: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 38,
                        fontWeight: "bolder",
                      }}
                    >
                      Conversion
                    </Typography>
                    <Typography>
                      Promote your products, grab every customer
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  minWidth: 275,
                  maxHeight: 200,
                  minHeight: 200,
                  border: 1,
                  borderColor: "#C4C4C4",
                  mb: 1,
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Image
                    src="/participation.svg"
                    alt="sms illustration"
                    width={300}
                    height={70}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                      textAlign: "center",
                      p: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 38,
                        fontWeight: "bolder",
                      }}
                    >
                      Participation
                    </Typography>
                    <Typography>
                      Invite customers to interact with you and keep them active
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Card
                sx={{
                  minWidth: 275,
                  maxHeight: 200,
                  minHeight: 200,
                  border: 1,
                  borderColor: "#C4C4C4",
                  mb: 1,
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Image
                    src="/acquisition.svg"
                    alt="sms illustration"
                    width={300}
                    height={70}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                      textAlign: "center",
                      p: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 38,
                        fontWeight: "bolder",
                      }}
                    >
                      Acquisition
                    </Typography>
                    <Typography>
                      Marketing activities are reached in time, order chains are
                      tracked throughout
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              <Card
                sx={{
                  minWidth: 275,
                  minHeight: 240,
                  maxHeight: 240,
                  border: 1,
                  borderColor: "#C4C4C4",
                  mb: 1,
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Image
                    src="/retension.svg"
                    alt="sms illustration"
                    width={300}
                    height={70}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      flexGrow: 1,
                      textAlign: "center",
                      p: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 38,
                        fontWeight: "bolder",
                      }}
                    >
                      Retention
                    </Typography>
                    <Typography>
                      Truly enhance customer value and make the customer more
                      than just a contact
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Card
                sx={{
                  minWidth: 275,
                  minHeight: 447,
                  border: 1,
                  borderColor: "#C4C4C4",
                  mb: 1,
                  boxShadow: "none",
                }}
              >
                <CardContent>
                  <Image
                    src="/athenticity.svg"
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
                      p: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 38,
                        fontWeight: "bolder",
                      }}
                    >
                      Authenticity
                    </Typography>
                    <Typography>
                      Ensure secure customers by using our verification api that
                      verifies true identity of the customers. to reduce fraud
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default Benefit;
