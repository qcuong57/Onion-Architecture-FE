import { useState } from 'react';
import { Button, Group, Modal, TextInput } from '@mantine/core';
import { createAuthorService } from '../../services/AuthorService';

const AddAuthorForm = ({ opened, onClose }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      const user = { name };
      try {
          const response = await createAuthorService(user);
          console.log("Author created successfully:", response.data);

          setName('');
          onClose();
          window.location.reload();
      } catch (error) {
          console.error("Error creating author:", error);
          setError("Failed to create author. Please try again.");
      }
  };

  return (
      <Modal opened={opened} onClose={onClose} title="Add Author">
          <form onSubmit={handleSubmit}>
              <TextInput
                  label="Name"
                  placeholder="Enter user name"
                  required
                  value={name}
                  onChange={(event) => setName(event.currentTarget.value)}
              />
              {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
              <Group position="right" mt="md">
                  <Button type="submit" variant="filled" color="indigo">
                      Create Author
                  </Button>
              </Group>
          </form>
      </Modal>
  );
};

export default AddAuthorForm;