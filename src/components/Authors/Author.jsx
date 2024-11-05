import React, { useState } from "react";
import { Button, Title } from "@mantine/core";
import AuthorTable from "./AuthorTable";
import AddAuthorForm from "./AuthorForm";

const Author = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <>
      <Title order={3}>Author</Title>
      <Button
        variant="filled"
        color="indigo"
        onClick={() => setModalOpened(true)}
      >
        Create author
      </Button>
        <AuthorTable />
        <AddAuthorForm opened={modalOpened} onClose={() => setModalOpened(false)} />
    </>
  );
};

export default Author;
