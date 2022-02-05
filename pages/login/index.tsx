import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import styles from "./login.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
import PlainAppBar from "../../components/PlainAppBar";

const Login: NextPage = () => {

  const router = useRouter();

  const onFinish = async(values: any) => {
    console.log("Received values of form: ", values);

    let email = values.email;
    let password = values.password;

    await fetch('https://api.sms.airdady.com/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });

        await router.push('/');

  };

  return (
    <Container fixed>
      <PlainAppBar />
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
            <Typography variant="h6">LOGIN</Typography>
            <Typography variant="body2">
              welcome back please login to get access
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
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="email"
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
            <Form.Item style={{ display: "flex" }}>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles["login-form-button"]}
              >
                Log in
              </Button>
              <Link href="/register">
              register now!
              </Link>
              
            </Form.Item>
          </Form>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
