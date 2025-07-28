import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch, useSelector } from "react-redux";
import { authenticatorSlice } from "./states/authenticatorSlice";
import { authenticationApiSlice } from "./api/authenticationApiSlice";
import { applicationApiSlice } from "./api/applicationApiSlice";
import { workApiSlice } from "./api/workApiSlice";

const sliceReducers = combineSlices(
  authenticatorSlice,
  authenticationApiSlice,
  applicationApiSlice,
  workApiSlice
);

export type AppState = ReturnType<typeof sliceReducers>;

export const makeStore = () => {
  const config = configureStore({
    reducer: sliceReducers,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(authenticationApiSlice.middleware)
        .concat(applicationApiSlice.middleware)
        .concat(workApiSlice.middleware);
    },
  });
  setupListeners(config.dispatch);
  return config;
};

export const store = makeStore();

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<AppState>();
