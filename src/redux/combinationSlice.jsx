import { createSlice } from "@reduxjs/toolkit";

const imageCombinationSlice = createSlice({
  name: "imageCombination",
  initialState: {
    isCombined: false,
  },
  reducers: {
    setIsCombined: (state, action) => {
      state.isCombined = action.payload;
    },
  },
});

export const { setIsCombined } = imageCombinationSlice.actions;
export default imageCombinationSlice.reducer;
