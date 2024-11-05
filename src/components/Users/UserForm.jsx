import { useState } from 'react';
import { Button, Group, Modal, TextInput } from '@mantine/core';
import { createUserService } from '../../services/UserService';

const AddUserForm = ({ opened, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      const user = { name, email, password, phone };
      try {
          const response = await createUserService(user);
          console.log("User created successfully:", response.data);

          setName('');
          setEmail('');
          setPassword('');
          setPhone('');
          onClose();
          window.location.reload();
      } catch (error) {
          console.error("Error creating user:", error);
          setError("Failed to create user. Please try again.");
      }
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
                  type='email'
                  onChange={(event) => setEmail(event.currentTarget.value)}
              />
              <TextInput
                  label="Password"
                  placeholder="Enter user password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.currentTarget.value)}
              />
              <TextInput
                  label="Phone"
                  placeholder="Enter user phone"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.currentTarget.value)}
              />
              {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
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