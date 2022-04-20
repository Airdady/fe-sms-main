import type { NextPage } from "next";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../AppBar";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CodeSection from "../CodeSection";
import Footer from "../Footer";
import Link from "next/link";
import Values from "./Values";
import Team from "./Team";

const About = () => {
  return (
    <>
      <Container maxWidth="lg">
          <Grid container spacing={2} p={3}>
            <Grid item xs={12} md={6}>
              <Box mt={6} display="flex" justifyContent="center">
                <Box mt="auto">
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                    gutterBottom
                  >
                    Our Story
                  </Typography>
                  <Typography variant="body2">
                    AirDady is a software development company established by
                    Rumbiiha Swaibu, a renowned Senior Developer who worked in
                    Andela and Silensec . The company was founded in 2019 in
                    Uganda. Recently, it opened its first office in Hoima,
                    Uganda and is seeking to expand to the USA in the next few
                    years.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                    gutterBottom
                  >
                    Our Mission
                  </Typography>
                  <Typography variant="body2">
                    AirDady is dedicated to providing efficient and long term
                    software solutions for your business to increase your
                    performance and competence in the industry.
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold" }}
                    component="div"
                    gutterBottom
                  >
                    Our Vision
                  </Typography>
                  <Typography variant="body2">
                    To become a prime name in the business of Software
                    Development in providing excellent and lasting services that
                    help promote growth and facilitate the progress of a
                    business through modern technology.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                 src="/cover.jpg"
                  alt="sms illustration"
                  width={500}
                  height={400}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      <Container maxWidth="lg">
        <Box py={4}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image
                  src="/core.png"
                  alt="sms illustration"
                  width={400}
                  height={300}
                />
              </Box>
            </Grid>
            <Grid md={6}>
              <Box p={4}>
                <Typography variant="h4">Who We Are</Typography>
                <Typography variant="body2">
                  AirDady's culture is driven by respect, transparency,
                  collaboration, and direct feedback. We have no room on our
                  team for disrespect, office politics or discrimination of any
                  kind. We're obsessed with communicating with our customers as
                  well as with each other. We love lean, iterative improvements,
                  and success is measured by the value we create for our users.
                  Here are the core values we live by:
                </Typography>
                <Typography variant="h4">Our Culture</Typography>
                <Typography variant="body2">
                  We are a company of builders who bring varying backgrounds,
                  ideas, and points of view to inventing on behalf of our
                  customers. Our diverse perspectives come from many sources
                  including gender, race, age, national origin, sexual
                  orientation, culture, education, and professional and life
                  experience. We are committed to diversity and inclusion and
                  always look for ways to scale our impact as we grow.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Values />
     
    </>
  );
};

export default About;
