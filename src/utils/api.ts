import axios from "axios";

const api = axios.create({
  baseURL: "https://cris.seplag.pe.gov.br/",
});

export default api;
