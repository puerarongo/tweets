import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducer from "./reducers/data-reducer";
import followingListSlice from "./slices/followingListSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const followingListPersistConfig = {
  key: "rootfollowingList",
  storage,
  whitelist: ["followingList"],
};

export const store = configureStore({
  reducer: {
    data: dataReducer,
    followingList: persistReducer(
      followingListPersistConfig,
      followingListSlice
    ),
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
