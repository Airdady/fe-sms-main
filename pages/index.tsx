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
import Footer from "../components/Footer";
import Contact from "./Home/Contact";
import Documentation from "./Home/Documentation";
import Coverage from "./Home/Coverage";
import Promo from "./Home/Promo";

const Verification: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ bgcolor: "#41AACB", width: "100%", height: "100vh" }}>
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
                    Help global users to carry out security verification through
                    the fastest way, retain every customer, let customers feel
                    the enterprises efficient service, promote the business
                    development of the enterprise.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                  src="/home-banner.svg"
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
      <Documentation />
      <Coverage />
      <Promo />

      <Contact />
      <Footer />
    </Box>
  );
};

export default Verification;
