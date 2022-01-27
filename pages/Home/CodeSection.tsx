import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Highlight from "react-highlight";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CodeSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box py={4}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Box style={{ borderRadius: 4 }} p={2} bgcolor="#19171c">
              <Box
                sx={{
                  flexGrow: 1,
                  color: "gainsboro",
                  bgcolor: "#19171c",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons
                  aria-label="visible arrows tabs example"
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      "&.Mui-disabled": { opacity: 0.3 },
                    },
                    mb: "-1rem",
                  }}
                >
                  <Tab
                    sx={{
                      color: "GrayText",
                      textTransform: "capitalize",
                    }}
                    label="Nodejs"
                  />
                  <Tab
                    sx={{
                      color: "GrayText",
                      textTransform: "capitalize",
                    }}
                    label="Python"
                  />
                  <Tab
                    sx={{
                      color: "GrayText",
                      textTransform: "capitalize",
                    }}
                    label="Ruby"
                  />
                  <Tab
                    sx={{
                      color: "GrayText",
                      textTransform: "capitalize",
                    }}
                    label="GO"
                  />
                  <Tab
                    sx={{
                      color: "GrayText",
                      textTransform: "capitalize",
                    }}
                    label="Elixir"
                  />
                </Tabs>
              </Box>

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
            </Box>
          </Grid>
          <Grid md={6}>
            <Box p={4}>
              <Typography variant="h4" gutterBottom>
                Build with confidence and boost your business - with just a few
                lines of code
              </Typography>
              <Typography>
                Our SDKs and APIs are tried and true! Choose your preferred code
                language – we'll adapt. Whatever it is you want to build, we’re
                here to make it as easy as possible. Get started in no time with
                our extensive developer documentation and intuitive tutorials!
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
