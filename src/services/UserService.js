import axios from "../utils/axiosCustom";

export const getUserService = async () => {
  try {
    const response = await axios.get("/users");
    return response;
  } catch (error) {
    throw error;
  }
};

export const createUserService = async (user) => {
  try {
    const response = await axios.post("/users", user);
    return response;
  } catch (error) {
    throw error;}
};

export const updateUserService = async (user) => {
  try {
    const response = await axios.put(`/users/${user.id}`, user);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteUserService = async (userId) => {
  try {
    const response = await axios.delete(`/users/${userId}`);
    return response;
  } catch (error) {
    throw error;
  }
};



