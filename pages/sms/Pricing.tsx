import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PricingTable from "../../components/PricingTable";

export default function Pricing() {
  return (
    <Container maxWidth="lg">
      <Box width="70%" m="auto" p={3} my={3}>
        <Typography variant="h6" textAlign="center" gutterBottom>
          Pay-as-you-go SMS API pricing
        </Typography>
        <Typography variant="body2" textAlign="center">
          Prices are applied per message part based on the destination and type
          of the message, as well as the carrier to which the SMS is being sent.
          You’re only charged for what you use - nothing more.
        </Typography>
      </Box>
      <Box mb={3}>
      <PricingTable />
      </Box>
    </Container>
  );
}
