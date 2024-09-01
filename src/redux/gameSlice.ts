import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux";
import { INITIALSTRING, STARTINGNUMBER } from "./constants";
import { IGameState } from "../type";

const initialState: IGameState = {
  startNum: STARTINGNUMBER,
  notice: INITIALSTRING,
};

export const gamingSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateNotice: (state: IGameState, action: PayloadAction<string>) => {
      state.notice = action.payload;
    },
    updateStartNumber: (state: IGameState, action: PayloadAction<number>) => {
      state.startNum = action.payload;
    },
  },
});

export const { updateNotice, updateStartNumber } = gamingSlice.actions;

export const selectNotice = (state: RootState) => state.game.notice;
export const selectStartNumber = (state: RootState) => state.game.startNum;

export const gamingReducer = gamingSlice.reducer;
