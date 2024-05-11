import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/fbender/tutorial-real-world-vue3",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getEvents(perPage, currentPage) {
    return apiClient.get("/events?_limit=" + perPage + "&_page=" + currentPage);
  },
  getEvent(id) {
    return apiClient.get("/events/" + id);
  },
};
