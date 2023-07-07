import { createReducer } from "@reduxjs/toolkit";
import { getData } from "../operations/data-operation";

const dataReducer = createReducer(
  {
    data: [],
    response: true,
  },
  {
    [getData.fulfilled]: (state: any, { payload }: any) => {
      state.data = [...state.data, ...payload];
      if (payload.length < 1) state.response = false;
    },
  }
);

export default dataReducer;
