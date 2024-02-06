import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import stage from "./stageSlice";
import stageClear from "./stageClearSlice";
import elapsed from "./elapsedSlice";

const store = configureStore({
  reducer: {
    stage,
    stageClear,
    elapsed,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
