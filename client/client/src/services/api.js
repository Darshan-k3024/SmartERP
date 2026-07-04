import axios from "axios";

const API = axios.create({
  baseURL: "https://smarterp-pvj9.onrender.com//api",
});

export default API;
