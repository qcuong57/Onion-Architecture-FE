import axios from "../utils/axiosCustom";

export const loginService = async (user) => {
  try {
    const response = await axios.post("/login", user);
    return response; 
  } catch (error) {
    if (error.response) {
      return error.response;
    }
    throw error;
  }
};
