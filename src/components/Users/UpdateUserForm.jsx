import { useState } from "react";
import { Modal, TextInput, Button } from "@mantine/core";
import { updateUserService } from "../../services/UserService";

const UpdateUserForm = ({ user, onClose, onUpdate = () => {} }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [phone, setPhone] = useState(user.phone);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = { ...user, name, email, password, phone };

    try {
      await updateUserService(updatedUser);
      onUpdate(updatedUser);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error updating user:", error);
      setError("Failed to updating user. Please try again.");
  }
  };

  return (
    <Modal opened={true} onClose={onClose} title="Update User">
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          required
        />
        <TextInput
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          required
          type="email"
        />
        <TextInput
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          required
          type="password"
        />
        <TextInput
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
          required
        />
        <Button type="submit" mt="md">
          Update User
        </Button>
      </form>
    </Modal>
  );
};

export default UpdateUserForm;
