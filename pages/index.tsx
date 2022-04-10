import type { NextPage } from "next";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../components/AppBar";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Benefit from "./Home/Benefit";
import Footer from "../components/Footer";
import Contact from "./Home/Contact";
import Documentation from "./Home/Documentation";
import Coverage from "./Home/Coverage";
import Promo from "./Home/Promo";
import AccordionComp from "./Home/AccordionComp";

const Verification: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ bgcolor: "#41AACB", width: "100%", height: "600px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} md={6}>
              <Box mt={7} display="flex" justifyContent="center">
                <Box mt="auto">
                  <Typography
                    style={{
                      fontWeight: "bolder",
                      textShadow: "0px 2px 3px rgba(255,255,255,0.5)",
                      fontSize: "4.75rem",
                    }}
                    variant="h2"
                    component="div"
                    gutterBottom
                  >
                    Cloud Messaging Provider
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "500" }}
                    gutterBottom
                  >
                    Help global users to carry out security verification through
                    the fastest way, retain every customer, let customers feel
                    the enterprises efficient service, promote the business
                    development of the enterprise.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                display="flex"
                alignItems="center"
                height="100%"
                justifyContent="center"
              >
                <Image
                  src="/home-banner.svg"
                  alt="verification illustration"
                  width={470}
                  height={430}
                  objectFit="contain"
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
      <AccordionComp />
      <Footer />
    </Box>
  );
};

export default Verification;
