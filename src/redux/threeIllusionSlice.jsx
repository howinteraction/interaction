import { createSlice } from "@reduxjs/toolkit";

const threeIllusionSlice = createSlice({
  name: "threeIllusion",
  initialState: {
    is3DObject: false,
    is3DBridge: false,
  },
  reducers: {
    setIsObjectIllusion: (state, action) => {
      state.is3DObject = action.payload;
    },
    setIsBridgeIllusion: (state, action) => {
      state.is3DBridge = action.payload;
    },
    resetIllusions: (state) => {
      state.is3DObject = false;
      state.is3DBridge = false;
    },
  },
});

export const { setIsObjectIllusion, setIsBridgeIllusion, resetIllusions } =
  threeIllusionSlice.actions;
export default threeIllusionSlice.reducer;
