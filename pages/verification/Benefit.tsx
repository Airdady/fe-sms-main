import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Image from "next/image";

import { Container, Typography, CardContent, Card } from "@mui/material";

const Benefit = () => {
  const data = [
    {
      img: "/convenient.svg",
      title: "Convenient login",
      description: `Dynamic authentication improves retention rate by eliminating
      the need to remember complex passwords`,
    },
    {
      img: "/safety.svg",
      title: "Ensure safety",
      description: `Sensitive operations are confirmed and authenticated to reduce
      malicious operations by illegal users and ensure account security`,
    },
    {
      img: "/safety.svg",
      title: "Identity authentication",
      description: `Guarantee the authenticity of registration, mobile phone
      number binding, retrieve password, and avoid repeated data`,
    },
  ];
  return (
    <Box sx={{ width: "100%", py: 4, backgroundColor: "rgb(231, 235, 240)" }}>
      <Container maxWidth="lg">
        <Typography textAlign="center" variant="h6" gutterBottom>
          Assist new user registration and activation to retain every customer
        </Typography>
        <Grid
          container
          rowSpacing={3.3}
          sx={{ mt: 4 }}
          columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        >
          {data.map((e, i) => (
            <Grid key={i} item xs={12} sm={12} md={4}>
              <Box sx={{ marginLeft: -1, p: 3, height: 200 }}>
                <Image src={e.img} alt={e.title} width={50} height={50} />
                <Typography sx={{ fontSize: 18, fontWeight: "bolder" }}>
                  {e.title}
                </Typography>
                <Typography variant="body2">{e.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefit;
