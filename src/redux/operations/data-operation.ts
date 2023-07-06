import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../helpers/urlPath";

export const getData: any = createAsyncThunk("data/getData", async () => {
  try {
    const request = await axios.get(`${BASE_URL}/tweets`);
    return request.data;
  } catch (err) {
    return console.log(err);
  }
});
