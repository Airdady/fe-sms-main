import { Container, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import AField from "../../components/AField";

export default function Contact() {
  return (
    <Box sx={{ py: 7, bgcolor: "#D3D3D3" }}>
      <Container
        sx={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(/contact.svg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "auto",
          display: "flex",
          alignItems: "center",
          mb: 4,
        }}
        maxWidth="lg"
      >
        <Grid container sx={{ margin: "auto" }} spacing={2} p={3}>
          <Grid
            sx={{ display: "flex", alignItems: "center" }}
            item
            xs={12}
            md={6}
          >
            <Box>
              <Typography color="white" variant="h3" gutterBottom>
                Give us a tap for more information
              </Typography>
              <Typography color="white">
                you have any query and need more information feel free to
                contact our experts by filling this form. our experts will get
                back to you as soon as possible
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography textAlign="center" py={2}>Fill The Contact Form Below</Typography>
                <form>
                  <AField placeHolder="name" />
                  <AField placeHolder="email" />
                  <AField placeHolder="phone number" />
                  <AField component="textarea" placeHolder="Message" />
                </form>
              </CardContent>
              <CardActions sx={{ pt: 0, pb: 3 }}>
                <Button
                  sx={{ ml: "auto", mr: 2 }}
                  variant="contained"
                  size="small"
                  disableElevation
                >
                  Send
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
