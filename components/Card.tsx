import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Card({ mainText, subText, svgname }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 405,
        background: "#ffffff",
        width: 375,
        height: 200,
        padding: 0.2,
        pt: 1.3,
        border: "#ffffff",
      }}
    >
      <Image
        src={svgname}
        alt="convenient illustration"
        width={520}
        height={520}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component="div"
          sx={{ fontSize: "27", fontWeight: "400", pt: 1.3 }}
        >
          {mainText}
        </Typography>

        <Typography
          component="div"
          sx={{
            fontSize: "18",
            fontWeight: "300",
            fontFamily: "poppins",
            pl: 3,
            pr: 3,
            pb: 0.3,
          }}
        >
          <p align="center">{subText}</p>
        </Typography>
      </Box>
    </Box>
  );
}
