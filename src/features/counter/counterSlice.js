import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 10,
};

export const counterSlice = createSlice({
  name: "calc",
  initialState: initialState,
  reducers: {
    add: (currentstat, action) => {
      const sum = Number(action.payload.name1) + Number(action.payload.name2);
      currentstat.result = sum;
    },
    add2: (currentstat, action) => {
      const sum = Number(action.payload.name1) - Number(action.payload.name2);
      currentstat.result = sum;
    },
    add3: (currentstat, action) => {
      const sum = Number(action.payload.name1) * Number(action.payload.name2);
      currentstat.result = sum;
    },
    add4: (currentstat, action) => {
      const sum = Number(action.payload.name1) / Number(action.payload.name2);
      currentstat.result = sum;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, add2, add3, add4 } = counterSlice.actions;

export default counterSlice.reducer;
