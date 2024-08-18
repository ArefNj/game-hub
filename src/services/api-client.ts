import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",

  params: {
    key: "b826b2e649b54c52b1873a50b07fb585",
  },
});
