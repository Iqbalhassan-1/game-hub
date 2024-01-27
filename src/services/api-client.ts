import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "36b55160f08c485c97a4bed6abdaa248",
  },
});
