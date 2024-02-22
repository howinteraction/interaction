import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import stages from "./stageSlice";
import stageClear from "./stageClearSlice";
import elapsedTimer from "./elapsedSlice";
import imageCombination from "./combinationSlice";
import threeIllusion from "./threeIllusionSlice";

const store = configureStore({
  reducer: {
    stages,
    stageClear,
    elapsedTimer,
    imageCombination,
    threeIllusion,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
