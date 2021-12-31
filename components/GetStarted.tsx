import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function GetStarted() {
  return (
    <Container maxWidth="lg">
      <Box textAlign="center" display="flex" flexDirection="column"  p={6}>
        <Typography variant="h4" gutterBottom>
          Ready to get started{" "}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Incase of any question feel free to reach out to our experts or
          satisfied with our services feel free to get your api keys today and
          start your free trial
        </Typography>
        <Box display="flex" mx="auto" mt={3}>
          <Button
            sx={{
              textTransform: "capitalize",
              display: "block",
              fontFamily: "poppins",
              fontWeight: 400,
              backgroundColor: "gainsboro",
              color: "black",
              px: 3,
            }}
            size="large"
          >
            CONTACT EXPERTS
          </Button>
          <Button
            sx={{
              ml: 4,
              textTransform: "capitalize",
              display: "block",
              fontFamily: "poppins",
              fontWeight: 400,
              backgroundColor: "#008BB7",
              color: "white",
              px: 3,
            }}
            color="inherit"
            size="large"
          >
            GET VERIFICATION API KEYS
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
