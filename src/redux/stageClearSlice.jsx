import { createSlice } from "@reduxjs/toolkit";

const stageClearSlice = createSlice({
  name: "stageClear",
  initialState: {
    isStageCleared: false,
  },
  reducers: {
    setIsStageCleared: (stage, action) => {
      stage.isStageCleared = action.payload;
    },
  },
});

export const { setIsStageCleared } = stageClearSlice.actions;
export default stageClearSlice.reducer;
