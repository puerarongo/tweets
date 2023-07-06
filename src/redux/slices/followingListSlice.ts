import { createSlice } from "@reduxjs/toolkit";
import IInitialState from "../../helpers/interface/initialState.interface";

const initialState: IInitialState = {
  followingList: [],
};

const followingListSlice = createSlice({
  name: "followingList",
  initialState,
  reducers: {
    followerAdd: (state, action) => {
      const item = state.followingList.find((el) => el === action.payload);

      if (!item) {
        state.followingList.push(action.payload);
      } else {
        const filter = state.followingList.filter(
          (el) => el !== action.payload
        );
        state.followingList = filter;
      }
    },
  },
});

export const followingListActions = followingListSlice.actions;

export default followingListSlice.reducer;
