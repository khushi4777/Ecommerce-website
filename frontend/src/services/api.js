import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-website-9jn8.onrender.com/api",
});

export default API;