import { createSlice } from "@reduxjs/toolkit";

const twoIllusionSlice = createSlice({
  name: "twoIllusion",
  initialState: {
    isCombined: false,
    isAttached: false,
  },
  reducers: {
    setIsCombined: (state, action) => {
      state.isCombined = action.payload;
    },
    setIsAttached: (state, action) => {
      state.isAttached = action.payload;
    },
    resetIllusions: (state) => {
      state.isCombined = false;
      state.isAttached = false;
    },
  },
});

export const { setIsCombined, setIsAttached, resetIllusions } =
  twoIllusionSlice.actions;
export default twoIllusionSlice.reducer;
