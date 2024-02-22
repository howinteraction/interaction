import { createSlice } from "@reduxjs/toolkit";

const threeIllusionSlice = createSlice({
  name: "threeIllusion",
  initialState: {
    is3DObject: false,
    is3DBridge: false,
  },
  reducers: {
    setIsThreeIllusion: (state, action) => {
      state.is3DObject = action.payload;
    },
    setIsBridgeIllusion: (state, action) => {
      state.is3DBridge = action.payload;
    },
  },
});

export const { setIsThreeIllusion, setIsBridgeIllusion } =
  threeIllusionSlice.actions;
export default threeIllusionSlice.reducer;
