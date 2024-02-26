import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import stages from "./stageSlice";
import stageClear from "./stageClearSlice";
import elapsedTimer from "./elapsedSlice";
import twoIllusion from "./twoIllusionSlice";
import threeIllusion from "./threeIllusionSlice";

const store = configureStore({
  reducer: {
    stages,
    stageClear,
    elapsedTimer,
    twoIllusion,
    threeIllusion,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
