import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Container,
  Group,
  Text,
  Notification,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { loginService } from "../services/LoginService";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = { Email: username, Password: password };
      const data = await loginService(user); 

      if (data.success) {
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", username);

        setError(null);
        navigate("/admin");
      } else {
        setError(
          data.message || "An unexpected error occurred. Please try again."
        );
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Error in handleSubmit:", err);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        style={{ fontFamily: "Greycliff CF, sans-serif", fontWeight: 900 }}
      >
        Login
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {error && (
          <Notification color="red" onClose={() => setError(null)}>
            {error}
          </Notification>
        )}
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            placeholder="Your username"
            required
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Group position="apart" mt="md">
            <Button type="submit" fullWidth>
              Login
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
