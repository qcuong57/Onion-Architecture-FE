import axios from "../utils/axiosCustom";

export const getAuthorService = async () => {
  try {
    const response = await axios.get("/authors");
    return response;
  } catch (error) {
    throw error;
  }
};
export const createAuthorService = async (author) => {
  try {
    const response = await axios.post("/authors", author);
    return response;
  } catch (error) {
    throw error;
  }
};
export const updateAuthorService = async (author) => {
  try {
    const response = await axios.put(`/authors/${author.id}`, author);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteAuthorService = async (authorId) => {
  try {
    const response = await axios.delete(`/authors/${authorId}`);
    return response;
  } catch (error) {
    throw error;
  }
};
