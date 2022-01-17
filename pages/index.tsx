import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../components/AppBar";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Benefit from "./Home/Benefit";
import Pricing from "./Home/Pricing";
import CodeSection from "./Home/CodeSection";
import Industry from "./Home/Industry";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import Contact from "./Home/Contact";

const Verification: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ bgcolor: "#41AACB", width: "100vw", height: "100vh" }}>
        <Container
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(/map-illustration.svg)`,
            backgroundPosition: "right",
          }}
          maxWidth="lg"
        >
          <Grid container spacing={2} p={3}>
            <Grid item xs={5}>
              <Box mt={7} display="flex" justifyContent="center">
                <Box mt="auto">
                  <Typography
                    style={{
                      fontSize: 70,
                      fontWeight: "bolder",
                      textShadow: "0px 2px 3px rgba(255,255,255,0.5)",
                    }}
                    variant="h2"
                    component="div"
                    gutterBottom
                  >
                    Cloud Messaging Provider
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    Increase the registration conversion rate and speed up your
                    business process
                  </Typography>
                  <Typography variant="body2">
                    Help global users to carry out security verification through
                    the fastest way, retain every customer, let customers feel
                    the enterprises efficient service, promote the business
                    development of the enterprise.
                  </Typography>
                  <Box display="flex" mt={3}>
                    <Button
                      sx={{
                        textTransform: "capitalize",
                        display: "block",
                        fontFamily: "poppins",
                        fontWeight: 400,
                        backgroundColor: "white",
                        color: "black",
                        px: 3,
                      }}
                    >
                      Free Trial
                    </Button>
                    <Button
                      sx={{
                        ml: 2,
                        textTransform: "capitalize",
                        display: "block",
                        fontFamily: "poppins",
                        fontWeight: 400,
                        backgroundColor: "#008BB7",
                        color: "white",
                        px: 3,
                        py: 1,
                      }}
                      color="inherit"
                      size="small"
                    >
                      talk to experts
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                  src="/verification.svg"
                  alt="verification illustration"
                  width={400}
                  height={400}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Benefit />
      <Pricing />
      <CodeSection />
      <Industry />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Verification;
