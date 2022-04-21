import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Benefit = () => {
  const data = [
    {
      title: "SMS Api",
      description:
        "Our Simplified API supports normal as well as Unicode message text for your single or bulk messaging requirements. We can customise our API to suit your requirements and format it as accepted by the mobile network country-wise.",
    },
    {
      title: "OTP Api",
      description:
        "Our Simplified API supports normal as well as Unicode message text for your single or bulk messaging requirements. We can customise our API to suit your requirements and format it as accepted by the mobile network country-wise.",
    },
    {
      title: "Voice Api",
      description:
        "Our Simplified API supports normal as well as Unicode message text for your single or bulk messaging requirements. We can customise our API to suit your requirements and format it as accepted by the mobile network country-wise.",
    },
  ];
  return (
    <Box bgcolor="#ffffff" py={5}>
      <Container maxWidth="lg">
        <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
          {data.map(({ title, description }, i) => (
            <Grid key={i} item xs={12} sm={12} md={4}>
              <Box sx={{border:'solid 1px gainsboro'}} p={2} height={210}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body2">{description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefit;
