import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import stages from "./stageSlice";
import stageClear from "./stageClearSlice";
import elapsedTimer from "./elapsedSlice";
import imageCombination from "./combinationSlice";

const store = configureStore({
  reducer: {
    stages,
    stageClear,
    elapsedTimer,
    imageCombination,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
