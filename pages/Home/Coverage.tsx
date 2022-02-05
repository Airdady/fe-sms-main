import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Coverage: NextPage = () => {
  return (
    <Box sx={{ mb: 7 }}>
      <Box
        sx={{
          bgcolor: "#41AACB",
          width: "100%",
          height: "83vh",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(/map-illustration-dark.svg)`,
          backgroundPosition: "right",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} pl={3} pr={3} pb={3} pt={0}>
            <Grid item xs={12} md={5}>
              <Box mt={3} display="flex" justifyContent="center">
                <Box mt="auto">
                  <Typography
                    style={{
                      fontWeight: "bolder",

                      color: "#ffffff",
                    }}
                    variant="h2"
                    component="div"
                    gutterBottom
                  >
                    Global Coverage
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ color: "#ffffff" }}
                  >
                    We are in over 190 countries Across North America
                    Europe,south America and Africa
                  </Typography>

                  <Stack direction="row" spacing={7}>
                    <Stack spacing={-1.3}>
                      <Typography
                        style={{
                          fontWeight: "bolder",
                          color: "#ffffff",
                        }}
                        variant="h2"
                        component="div"
                      >
                        190+
                      </Typography>

                      <Typography
                        variant="h6"
                        style={{
                          fontWeight: "200",
                          color: "#ffffff",
                        }}
                      >
                        Countries
                      </Typography>
                    </Stack>

                    <Stack spacing={-1.3}>
                      <Typography
                        style={{
                          fontWeight: "bolder",

                          color: "#ffffff",
                        }}
                        variant="h2"
                        component="div"
                      >
                        1000+
                      </Typography>

                      <Typography
                        variant="h6"
                        style={{
                          fontWeight: "200",

                          color: "#ffffff",
                        }}
                      >
                        Network providers
                      </Typography>
                    </Stack>
                  </Stack>

                  <Button
                    sx={{
                      textTransform: "capitalize",
                      display: "block",
                      maxWidth: 300,
                      fontFamily: "poppins",
                      fontWeight: 700,
                      backgroundColor: "#ffffff",
                      color: "black",
                      px: 3,
                      mb: 3,
                      mt: 3,
                    }}
                  >
                    View Coverage List
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Coverage;
