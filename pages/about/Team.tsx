import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

import { Container, Typography, CardContent, Card } from "@mui/material";
// import Card from "../../components/Card";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.text.secondary,
  display: "flex",
  height: "100%",
}));

const Team = () => {
  return (
    <Box sx={{ width: "100%", py: 4, backgroundColor: "rgb(231, 235, 240)" }}>
      <Container maxWidth="lg">
        <Typography textAlign="center" variant="h6" gutterBottom>
          Meet Our Team
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
                  src="/ayes.jpg"
                  alt="sms illustration"
                  width={300}
                  height={300}
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
                    Ayesiza Hawah
                  </Typography>
                  <Typography>
                    Leads the creation of manuals and provides technical
                    assistance to the users. Collaborates with other software
                    engineers during the project’s development
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card
              sx={{
                minWidth: 275,
                pt: 6.3,
                position: "relative",
                top: -17.3,
                boxShadow: 0,
              }}
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
                    Rumbiiha Swaibu
                  </Typography>
                  <Typography>
                    Facilitates the mentoring of projects to encourage efficient
                    methods and strategies. Monitors the progress of each
                    project.
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
                  width={300}
                  height={300}
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
                    Asiimwe Paul
                  </Typography>
                  <Typography>
                    Creates product prototypes. Assists with content
                    development.
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

export default Team;
