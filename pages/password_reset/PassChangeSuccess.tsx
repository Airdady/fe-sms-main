import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import "antd/dist/antd.css";
import CMessage from "../../components/Message";

const PassChangeSuccess: NextPage = () => {
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
            mainText="New password set successfully"
            subText="Your new password has been set successfully, you can login using your new password"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default PassChangeSuccess;
