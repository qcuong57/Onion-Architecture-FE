import React, { useState } from "react";
import { Button, Title } from "@mantine/core";
import UserTable from "./UserTable";
import AddUserForm from "./UserForm";

const User = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Title order={3}>User</Title>
      <Button
        variant="filled"
        color="indigo"
        onClick={() => setModalOpened(true)}
      >
        Create user
      </Button>
      <UserTable />
      <AddUserForm opened={modalOpened} onClose={() => setModalOpened(false)} />
    </>
  );
};

export default User;
