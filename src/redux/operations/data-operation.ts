import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "../../helpers/urlPath";

export const getData: any = createAsyncThunk(
  "data/getData",
  async (page: number = 1) => {
    try {
      const request = await axios.get(
        `${BASE_URL}/tweets?completed=false&page=${page}&limit=3`
      );
      //console.log("request", request.data);
      return request.data;
    } catch (err) {
      return console.log(err);
    }
  }
);
