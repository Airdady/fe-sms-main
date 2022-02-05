import type { NextPage } from "next";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Benefit from "./Benefit";
import Pricing from "./Pricing";
import CodeSection from "../../components/CodeSection";
import Industry from "../../components/Industry";
import GetStarted from "../../components/GetStarted";
import Footer from "../../components/Footer";

const Verification: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />
      <Box sx={{ bgcolor: "#41AACB", width: "100%", height: "auto" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} md={6}>
              <Box mt={6} display="flex" justifyContent="center">
                <Box mt="auto">
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                    gutterBottom
                  >
                    Verification Api
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
            <Grid item xs={12} md={6}>
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
      <GetStarted />
      <Footer />
    </Box>
  );
};

export default Verification;
