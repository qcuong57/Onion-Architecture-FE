import { useState } from 'react';
import { Button, Group, Modal, TextInput } from '@mantine/core';

const AddUserForm = ({ opened, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("User created:", { name, email });
  
      setName('');
      setEmail('');
      onClose(); 
    };
  
    return (
      <Modal opened={opened} onClose={onClose} title="Add User">
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Name"
            placeholder="Enter user name"
            required
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <TextInput
            label="Email"
            placeholder="Enter user email"
            required
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
            <TextInput
            label="Password"
            placeholder="Enter user password"
            required
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
            <TextInput
            label="Phone"
            placeholder="Enter user phone"
            required
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <Group position="right" mt="md">
            <Button type="submit" variant="filled" color="indigo">
              Create User
            </Button>
          </Group>
        </form>
      </Modal>
    );
  };
  
  export default AddUserForm;