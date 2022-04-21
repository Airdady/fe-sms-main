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
import { Carousel } from "antd";

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
                    sx={{
                      color: "white",
                      fontWeight: "bolder",
                      fontSize: "4.5rem",
                    }}
                    variant="h2"
                    component="div"
                    gutterBottom
                  >
                    Cloud Messaging Provider
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "300", color: "#f1f1f1" }}
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
                <Carousel autoplay>
                  <Image
                    src="/home-banner.svg"
                    alt="sms illustration"
                    width={470}
                    height={430}
                  />
                  {/* <Image
                    key={2}
                    src="/verification.svg"
                    alt="verification illustration"
                    width={470}
                    height={430}
                  /> */}
                </Carousel>
              </Box>
            </Grid>
            <Grid item xs={12} md={12}>
              <Box
                display="flex"
                alignItems="center"
                height="100%"
                justifyContent="center"
              >
                <Image
                  key={2}
                  src="/sponsors.svg"
                  alt="verification-illustration"
                  width={500}
                  height={80}
                  
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
