import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IInitialState } from "./interfaces";

const initialState: IInitialState = {
  activeIndex: -1,
};

export const navBarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
      setActiveIndex: (state, action: PayloadAction<number>) => {
        state.activeIndex = action.payload
      }
    }
});

export const { setActiveIndex } = navBarSlice.actions;

export const getActiveIndex = (state: RootState) => state.navbar.activeIndex;

export default navBarSlice.reducer;