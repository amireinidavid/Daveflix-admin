import axios from "axios";

const Axios = axios.create({
  baseURL: "https://daveflix-admin-nn1d.vercel.app/api",
});

export default Axios;
