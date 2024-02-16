import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import stages from "./stageSlice";
import stageClear from "./stageClearSlice";
import elapsedTimer from "./elapsedSlice";

const store = configureStore({
  reducer: {
    stages,
    stageClear,
    elapsedTimer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
