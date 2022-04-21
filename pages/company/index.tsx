import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import JobList from "../../components/JobList";
import Contact from "../../components/contact";
import About from "../../components/about";
import Team from "../../components/about/Team";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Company: NextPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box>
      <ResponsiveAppBar />
      <Box
        sx={{
          bgcolor: "#41AACB",
          width: "100%",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          Our Company
        </Typography>
      </Box>
      <Container>
        <Box sx={{ width: "100%", minHeight: 500 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Company Profile" {...a11yProps(0)} />
              <Tab label="Careers" {...a11yProps(1)} />
              <Tab label="OUR TEAM" {...a11yProps(2)} />
              <Tab label="Contact Us" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <About/>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box textAlign="center" my={6}>
              <Typography variant="h5">Current Openings</Typography>
              <Typography variant="body2">
                Feel fulfilled. Have fun. Help us to shape the future.
              </Typography>
            </Box>
            <JobList />
            <Box textAlign="center" my={4}>
              <Typography variant="h5">Hiring Process</Typography>
              <Typography variant="body2">
                Here are the steps you will go through during your recruitment
                process
              </Typography>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={3}>
                  <Box p={4}>
                    <Typography textAlign="center" variant="h6">
                      REVIEW
                    </Typography>
                    <Typography textAlign="center" variant="body2">
                      We review applications to screen for a variety of
                      criteria.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={4}>
                    <Typography textAlign="center" variant="h6">
                      INTRO-CALL
                    </Typography>
                    <Typography textAlign="center" variant="body2">
                      A quick chat with one of our tech recruiters to get to
                      know you a little better.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={4}>
                    <Typography textAlign="center" variant="h6">
                      TECH INTERVIEW
                    </Typography>
                    <Typography textAlign="center" variant="body2">
                      An interview with Airdady engineers, learning more about
                      your technical and team experiencies
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={3}>
                  <Box p={4}>
                    <Typography textAlign="center" variant="h6">
                      OFFER
                    </Typography>
                    <Typography textAlign="center" variant="body2">
                      We make an offer to the candidate we feel is the best fit
                      for the role.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Team/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Contact/>
          </TabPanel>
         
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default Company;
