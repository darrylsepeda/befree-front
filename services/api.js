import axios from "axios";

const api = axios.create({
  baseURL: "https://befree-api-market.herokuapp.com"
});

export default api;
