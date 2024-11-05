import { useState } from "react";
import { Modal, TextInput, Button } from "@mantine/core";
import { updateAuthorService } from "../../services/AuthorService";

const UpdateAuthorForm = ({ author, onClose, onUpdate = () => {} }) => {
  const [name, setName] = useState(author.name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedAuthor = { ...author, name };

    try {
      await updateAuthorService(updatedAuthor);
      onUpdate(updatedAuthor);
      onClose();
      window.location.reload(); 
    } catch (error) {
      console.error("Error updating author:", error);
    }
  };

  return (
    <Modal opened={true} onClose={onClose} title="Update Author">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          placeholder="Enter author name"
          value={name}
          onChange={(event) => setName(event.currentTarget.value)}
          required
        />
        <Button type="submit" mt="md">
          Update Author
        </Button>
      </form>
    </Modal>
  );
};

export default UpdateAuthorForm;
