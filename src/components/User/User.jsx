import { Group, Title, Button } from "@mantine/core";
import Search from "../../components/Search/Search";
import UserTable from "./UserTable";
import AddUserForm from "./UserForm";
import { useState } from "react";

const User = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Title order={1}>User</Title>
      <div>
        <Group justify="space-between" mb={24}>
          <Search placeholder="Search user" />
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
