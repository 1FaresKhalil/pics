import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZmOabg-_9Kjl1D_euMpSCCC5ZXVCbkLFA_RiZj89ZQg",
  },
});
