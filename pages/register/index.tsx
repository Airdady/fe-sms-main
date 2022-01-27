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
import { useState } from "react";
import {useRouter} from "next/router";

const Login: NextPage = () => {

  const router = useRouter();

  const onFinish = async (values: any) => {
    let username = values.username;
    let company = values.company;
    let email = values.email;
    let password = values.password;
    
    console.log("Received values of form: ", values);

        await fetch('https://api.sms.airdady.com/auth', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username,
                company,
                email,
                password
            })
        });
        
        await router.push('/login');
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
            <Typography variant="h6">Register</Typography>
            <Typography variant="body2">
            Please create your account to get access
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
              name="username"
              rules={[
                { required: true, message: "Please input username!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
               
              />
            </Form.Item>

            <Form.Item
              name="company"
              rules={[
                { required: true, message: "Please input company!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Company"
                
              />
            </Form.Item>

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

            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles["login-form-button"]}
              >
                Register
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
