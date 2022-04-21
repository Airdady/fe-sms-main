import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
}));

const Values = () => {
  return (
    <Box sx={{ width: "100%", py: 4, backgroundColor: "rgb(231, 235, 240)" }}>
      <Container maxWidth="lg">
        <Typography textAlign="center" variant="h4" gutterBottom>
          Core Values
        </Typography>
        <Grid
          container
          rowSpacing={1}
          sx={{ mt: 4 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Image
                src="/industries.svg"
                alt="industry"
                width={400}
                height={500}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Item>
              <Box p={3}>
                <Typography variant="h6" gutterBottom>
                  1. Put our customers at the heart of everything
                </Typography>
                <Typography variant="body2" gutterBottom>
                  At AirDady, we put our customers at the heart of everything we
                  do. And by customers, we mean the people at organizations that
                  rely on AirDady for their day-to-day challenges. We choose
                  progress over perfection.
                </Typography>
              </Box>
            </Item>
            <Box my={3}>
              <Item>
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>
                    2. Work with respect
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    At AirDady success is not measured in profits alone but
                    rather in the contributions to all stakeholders; our team,
                    customers, end-users, partners, the community, and the
                    planet. We are honest, tolerant, and inclusive. We all
                    commit to creating a safe working environment. We protect
                    each other’s time as well as our own.
                  </Typography>
                </Box>
              </Item>
            </Box>
            <Box my={3}>
              <Item>
                <Box p={3}>
                  <Typography variant="h6" gutterBottom>
                    3. Intergrity
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    We communicate with our team, customers, users, and
                    end-users in a clear, timely, and open way. We do not shy
                    away from crucial conversations. We give each other
                    radically  feedback and never wait to do so. We
                    understand that this can feel uncomfortable.  We have the
                    courage to speak up and challenge each other. Asking
                    questions or reaching out for help are acts of strength, not
                    weakness.
                  </Typography>
                </Box>
              </Item>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Values;
