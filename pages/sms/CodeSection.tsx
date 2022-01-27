import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Highlight from "react-highlight";

export default function CodeSection() {
  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            {/* <Highlight language="javascript"> */}
            <Highlight className="javascript">
              {`[
  {
    "title": "apples",
    "count": [12000, 20000],
    "description": {"text": "...", "sensitive": false}
  },
  {
    "title": "oranges",
    "count": [17500, null],
    "description": {"text": "...", "sensitive": false}
  }
]
`}
            </Highlight>
          </Grid>
          <Grid md={6}>
            <Box p={4}>
              <Typography variant="h6">
                Build with Love and Confidence
              </Typography>
              <Typography variant="body2">
                we have several SDKs ready for use in all popular and modern
                stacks and we are her to make it as easy , simple
                andunderstandable as much as we can
              </Typography>
              <Box display="flex" mt={3}>
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
                >
                  start Building
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
                  View documentation
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
