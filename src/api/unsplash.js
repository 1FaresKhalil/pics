import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID oraDr1fdN7n5sLXHzmeA-gwTqLnbWuB89urbPRlhbgk",
  },
});
