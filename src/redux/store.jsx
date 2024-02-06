import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import stage from "./stageSlice";
import stageClear from "./stageClearSlice";
import elapsedTimer from "./elapsedSlice";

const store = configureStore({
  reducer: {
    stage,
    stageClear,
    elapsedTimer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
