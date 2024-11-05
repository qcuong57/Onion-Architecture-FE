import { Table, ActionIcon } from "@mantine/core";
import { useState, useEffect } from "react";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { deleteAuthorService, getAuthorService } from "../../services/AuthorService";
import styles from "./AuthorTable.module.scss";
import UpdateAuthorForm from "./UpdateAuthorForm";

const AuthorTable = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const data = await getAuthorService();
        setAuthors(data);
      } catch (error) {
        console.error("Error fetching authors:", error);
      }
    };

    fetchAuthors();
  }, []);

  const handleUpdateAuthor = (updatedAuthor) => {
    setAuthors((updatedAuthors) =>
      prevAuthors.map((author) => (author.id === updatedAuthors.id ? updatedAuthors : author))
    );
  };

  const handleEditClick = (author) => {
    setSelectedAuthor(author);
  };

  const handleDeleteClick = async (authorId) => {
    try {
      await deleteAuthorService(authorId); 
      setAuthors((prevAuthors) => prevAuthors.filter((author) => author.id !== authorId));
      console.log("Author deleted:", authorId);
      alert("Author deleted successfully");
    } catch (error) {
      console.error("Error deleting author:", error);
    }
  };

  const rows =
    authors &&
    authors.length > 0 &&
    authors.map((author) => (
      <Table.Tr key={author.id}>
        <Table.Td>{author.name}</Table.Td>
        <Table.Td>
        <ActionIcon variant="filled" radius="xl" title="View" className="mr-2">
          <IconPencil
            size={16}
            style={{ cursor: "pointer", marginRight: 8 }}
            onClick={() => {
              setSelectedAuthor(author);
              setUpdateModalOpen(true);
            }}
          />
        </ActionIcon>
        <ActionIcon variant="filled" radius="xl" title="View" className="mr-2">
          <IconTrash
            size={16}
            style={{ cursor: "pointer" }}
            onClick={() => handleDeleteClick(author.id)}
          />
        </ActionIcon>
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
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

      {updateModalOpen && selectedAuthor && (
        <UpdateAuthorForm
          author={selectedAuthor}
          onClose={() => setUpdateModalOpen(false)}
          onUpdate={handleUpdateAuthor}
        />
      )}

      {selectedAuthor && (
        <UpdateAuthorForm
          author={selectedAuthor}
          onClose={() => setSelectedAuthor(null)}
        />
      )}
    </>
  );
};

export default AuthorTable;
