import axios from "axios";

const url = "http://localhost:3003/user";

export const getuser = async (id) => {
  return await axios.get(`${url}`);
};
