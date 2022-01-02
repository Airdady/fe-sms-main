import type { NextPage } from "next";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ResponsiveAppBar from "../../components/AppBar";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Footer from "../../components/Footer";
import "antd/dist/antd.css";
import styles from "./login.module.css";

const Login: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Container fixed>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Box textAlign="center" mb={3}>
            <Typography variant="h6">Password Reset</Typography>
            <Typography variant="body2">
            Please Enter the email you used to register 
            </Typography>
          </Box>
          <Form
            name="normal_login"
            style={{ maxWidth: 380, margin: "auto" }}
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles["login-form-button"]}
              >
                Send Reset Instructions
              </Button>
              Or <a href="">Login now!</a>
            </Form.Item>
          </Form>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
