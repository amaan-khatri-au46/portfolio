import { createSlice } from "@reduxjs/toolkit";
export const SLICE_NAME = "folioDetail";

export interface FolioDetailState {
  loading: boolean;
  isRotating: boolean;
  currentStage: number;
  isPlayingMusic: boolean;
  birdPostion: any;
  birdScale: any;
  theme: string;
}

const initialState: FolioDetailState = {
  loading: false,
  isRotating: false,
  currentStage: 1,
  isPlayingMusic: false,
  birdPostion: [-5, 2, 1],
  birdScale: [0.003, 0.003, 0.003],
  theme: "light-theme",
};

const folioListSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setsetIsRotating: (state, action) => {
      state.isRotating = action.payload;
    },
    setCurrentStage: (state, action) => {
      state.currentStage = action.payload;
    },
    setIsPlayingMusic: (state, action) => {
      state.isPlayingMusic = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const {
  setTheme,
  setLoading,
  setsetIsRotating,
  setCurrentStage,
  setIsPlayingMusic,
} = folioListSlice.actions;

export default folioListSlice.reducer;
