import { Table } from "@mantine/core";
import styles from "../User/UserTable.module.scss";
import { useState, useEffect } from "react";
import { getUserService } from "../../services/UserService";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import UpdateUserForm from "./UpdateUserForm";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserService();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUpdateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteClick = async (userId) => {
    try {
      await deleteUserService(userId); 
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      console.log("User deleted:", userId);
      
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const rows =
    users &&
    users.length > 0 &&
    users.map((user) => (
      <Table.Tr key={user.id}>
        <Table.Td>{user.name}</Table.Td>
        <Table.Td>{user.email}</Table.Td>
        <Table.Td>{user.password}</Table.Td>
        <Table.Td>{user.phone}</Table.Td>
        <Table.Td>
          <IconEdit
            size={16}
            style={{ cursor: "pointer", marginRight: 8 }}
            onClick={() => {
              setSelectedUser(user);
              setUpdateModalOpen(true);
            }}
          />
          <IconTrash
            size={16}
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteClick(user.id)}
          />
        </Table.Td>{" "}
      </Table.Tr>
    ));

  return (
    <>
      <Table
        highlightOnHover
        horizontalSpacing="xl"
        className={styles.userTable}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Password</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      {updateModalOpen && selectedUser && (
        <UpdateUserForm
          user={selectedUser}
          onClose={() => setUpdateModalOpen(false)}
          onUpdate={handleUpdateUser}
        />
      )}

      {selectedUser && (
        <UpdateUserForm
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};

export default UserTable;
