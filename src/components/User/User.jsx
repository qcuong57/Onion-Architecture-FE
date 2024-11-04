import { Group, Title, Button, Text } from "@mantine/core";
import UserTable from "./UserTable";
import AddUserForm from "./UserForm";
import { useState, useEffect } from "react";
import styles from "../User/UserTable.module.scss";

const User = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5173/login";
  };

  return (
    <>
      <Title order={1}>User</Title>
      <div>
        <Group justify="space-between" mb={24}>
          <Group justify="space-between" mb={24}>
            <Button
              variant="outline"
              color="red"
              onClick={handleLogout}
              justify=""
            >
              Logout
            </Button>
            <Text>{`Welcome, ${username}!`}</Text>
          </Group>
          <Button
            variant="filled"
            color="indigo"
            onClick={() => setModalOpened(true)}
          >
            Create user
          </Button>
          <UserTable />
          <AddUserForm
            opened={modalOpened}
            onClose={() => setModalOpened(false)}
          />
        </Group>
      </div>
    </>
  );
};

export default User;
