import { Group, Title, Button } from "@mantine/core";
import UserTable from "./UserTable";
import AddUserForm from "./UserForm";
import { useState } from "react";

const User = () => {
  const [modalOpened, setModalOpened] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:5174/login";
  };

  return (
    <>
      <Title order={1}>User</Title>
      <div>
        <Group justify="space-between" mb={24}>
          <Button variant="outline" color="red" onClick={handleLogout}>
            Logout
          </Button>
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
