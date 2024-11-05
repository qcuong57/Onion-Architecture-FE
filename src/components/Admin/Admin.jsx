import { Group, Title, Button, Text } from "@mantine/core";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../Users/User";
import Author from "../Authors/Author";

const Admin = () => {
  const [username, setUsername] = useState("");
  const nagative = useNavigate();
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    nagative("/login");
  };

  return (
    <>
      <Title order={1}>Admin</Title>
      <div>
        <Group justify="space-between" mb={24}>
          <Group justify="space-between" mb={24}>
            <Button variant="outline" color="red" onClick={handleLogout}>
              Logout
            </Button>
            <Text>{`Welcome, ${username}!`}</Text>
          </Group>
        </Group>
        <User />
        <Author />
      </div>
    </>
  );
};

export default Admin;
