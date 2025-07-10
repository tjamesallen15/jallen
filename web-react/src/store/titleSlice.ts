import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: 'title',
  initialState: {
    value: 'Jallen'
  },
  reducers: {
    changeTitle: (state, action) => {
      state.value = action.payload
    }
  }
});

export const {changeTitle} = titleSlice.actions;
export default titleSlice.reducer;