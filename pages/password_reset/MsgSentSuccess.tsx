import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "antd/dist/antd.css";
import CMessage from "../../components/Message";

const MsgSentSuccess: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Box>
      <Container fixed>
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CMessage
            mainText="Password Reset instructions Sent"
            subText="Your password reset instructions have been sent to rswaib@gmail.com"
            direction="/password_reset/NewPassword"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MsgSentSuccess;
