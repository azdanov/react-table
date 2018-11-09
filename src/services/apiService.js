import ky from "ky";

const api = ky.extend({ prefixUrl: "https://jsonplaceholder.typicode.com" });

export default {
  get: api.get
};
