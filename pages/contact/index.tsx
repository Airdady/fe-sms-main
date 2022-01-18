import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Footer from "../../components/Footer";
import Item from "antd/lib/list/Item";
import FolderIcon from "@mui/icons-material/Folder";
import SimpleMap from "./SimpleMap";

import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import AField from "../../components/AField";

const Contact: NextPage = () => {
  return (
    <Box>
      <ResponsiveAppBar />

      <Box
        sx={{
          bgcolor: "#41AACB",
          width: "100vw",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3">Contact Us</Typography>
      </Box>
      <Container>
        <Box sx={{ height: "180vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Box textAlign="center" mb={3}>
                <Typography variant="h6" color="#008BB7">
                  Get in Touch
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Typography variant="h6" ml={2}>
                Leave us a message
              </Typography>
              <form>
                <AField placeHolder="name" />
                <AField placeHolder="email" />
                <AField placeHolder="phone number" />
                <AField component="textarea" placeHolder="Message" />
              </form>
              <Button
                type="primary"
                htmlType="submit"
                className={styles["login-form-button"]}
              >
                Send
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="205 Limestone Rd STE 200C" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="+256200957272" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    <FolderIcon />
                  </ListItemIcon>
                  <ListItemText primary="hello@airdady.com" />
                </ListItem>
              </List>
              <SimpleMap />
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    Main street Hoima - Hoima City Uganda
                    <br />
                    +256200957272
                    <br />
                    Mon-Fri 9am-6pm EAT
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    205 Limestone Rd STE 200C WilmingTon -U.S.A
                    <br />
                    +256200957272
                    <br />
                    Mon-Fri 9am-6pm UTC
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Container>
    </Box>
  );
};

export default Contact;
