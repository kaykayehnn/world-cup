import axios from "axios";
import { getSession } from "./storage";

const BASE_URL = process.env.BASE_URL || "";

const instance = axios.create({
  baseURL: BASE_URL + "/api",
  transformRequest: [
    function(data, headers) {
      let session = getSession();
      if (session) {
        headers["Authorization"] = `Bearer ${session.token}`;
      }
      return JSON.stringify(data);
    }
  ],
  headers: {
    "Content-Type": "application/json"
  }
});

export default instance;
