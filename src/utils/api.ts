import axios from "axios";

const api = axios.create({
  baseURL: "https://api.crisapp.tk",
});

export default api;
