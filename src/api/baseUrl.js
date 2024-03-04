import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://platform-bqjv.onrender.com/",
});

export default baseUrl;
