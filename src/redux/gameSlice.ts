import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../redux";
import { INITIALSTRING, STARTINGNUMBER } from "./constants";

interface IGameState {
  startNum: number;
  notice: string;
}

const initialState: IGameState = {
  startNum: STARTINGNUMBER,
  notice: INITIALSTRING,
};

export const gamingSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateNotice: (state, action: PayloadAction<string>) => {
      console.log(state.startNum);
      state.notice = action.payload;
    },
  },
});

// type incrementType = typeof gamingSlice.actions.updateNotice.type;

export const { updateNotice } = gamingSlice.actions;

export const selectNotice = (state: RootState) => state.game.notice;
export const selectStartNumber = (state: RootState) => state.game.startNum;

export const gamingReducer = gamingSlice.reducer;
