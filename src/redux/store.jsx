import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import tutorial from "./tutorialSlice";

const store = configureStore({
  reducer: {
    tutorial,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
