import axios from "axios";

const baseURL = "http://localhost:4040/";
export default {
  postCard(url = baseURL + "postcards/") {
    return {
      fetchAll: () => axios.get(url),
      fetchById: (id) => axios.get(url + id),
      create: (newRecord) => axios.get(url, newRecord),
      update: (id, updateRecord) => axios.get(url + id, updateRecord),
      delete: (id) => axios.get(url + id),
    };
  },
};
