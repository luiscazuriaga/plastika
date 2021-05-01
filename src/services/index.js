import axios from "axios";

const api = axios.create({
  baseURL: "https://cozinha-social-production.herokuapp.com",
});

export default api;
