import { createReducer } from "@reduxjs/toolkit";
import filterUniqueObjects from "../../helpers/filterUniqueObjects";
import { getData } from "../operations/data-operation";

const dataReducer = createReducer(
  {
    data: [],
    response: true,
  },
  {
    [getData.fulfilled]: (state: any, { payload }: any) => {
      if (payload.length < 1) state.response = false;
      else {
        const newArr = filterUniqueObjects([...state.data, ...payload]);
        state.data = [...newArr];
      }
    },
  }
);

export default dataReducer;
