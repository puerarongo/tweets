import axios from "axios";

const BASE_URL = "https://64a681ac096b3f0fcc7feccd.mockapi.io/api/v1/";

const dataFetch = async () => {
  const respone = await axios.get(`${BASE_URL}/tweets`);
  return respone;
};

export default dataFetch;
