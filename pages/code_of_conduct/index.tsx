import type { NextPage } from "next";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Footer from "../../components/Footer";

const CodeOfConduct: NextPage = () => {
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
          justifyContent:'center',
        }}
      >
        <Typography variant="h3">Code Of Conduct</Typography>
      </Box>
      <Box sx={{ height: "150vh" }}></Box>
      <Footer />
    </Box>
  );
};

export default CodeOfConduct;
