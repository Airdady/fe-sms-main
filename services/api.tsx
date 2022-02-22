import axios from "axios";

const baseURL = "https://api.sms.airdady.com/auth/";

const api = axios.create({
  baseURL,
});

export default api;
