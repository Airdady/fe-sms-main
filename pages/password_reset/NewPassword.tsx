import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import PlainAppBar from "../../components/PlainAppBar";
import Typography from "@mui/material/Typography";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import styles from "./login.module.css";
import { useRouter } from "next/router";

const NewPass: NextPage = () => {
  const router = useRouter();

  const onFinish = async (values: any) => {
    console.log("Received values of form: ", values);
    await router.push("/password_reset/PassChangeSuccess");
  };

  return (
    <Box>
      <PlainAppBar />
      <Container fixed>
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box textAlign="center" mb={3}>
              <Typography variant="h6">Enter New Password</Typography>
              <Typography variant="body2">
                Please Enter your new password to continue
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
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  size="large"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <a className={styles["login-form-forgot"]} href="">
                  Back to Login
                </a>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={styles["login-form-button"]}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NewPass;
