import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  player1: {
    name: '',
    isYourTurn: true,
    victories: 0,
  },
  player2: {
    name: '',
    isYourTurn: false,
    victories: 0,
  },
  matrix: {
    A1: 0,
    A2: 0,
    A3: 0,
    B1: 0,
    B2: 0,
    B3: 0,
    C1: 0,
    C2: 0,
    C3: 0,
  },
  gameNumber: 0,
};

export const trisSlice = createSlice({
  name: 'tris',
  initialState,
  reducers: {
    savePlayer1: (state, action) => {
      state.player1.name = action.payload;
    },
    savePlayer2: (state, action) => {
      state.player2.name = action.payload;
    },
    addVictoryP1: (state) => {
      state.player1.victories++;
    },
    addVictoryP2: (state) => {
      state.player2.victories++;
    },
    reset: (state) => {
      return initialState;
    },
    changeTurn: (state) => {
      state.player1.isYourTurn = !state.player1.isYourTurn;
      state.player2.isYourTurn = !state.player2.isYourTurn;
    },
    setMatrixValue: (state, action) => {
      state.matrix[action.payload.id] = action.payload.value;
    },
    resetMatrix: (state) => {
      state.matrix = {
        A1: 0,
        A2: 0,
        A3: 0,
        B1: 0,
        B2: 0,
        B3: 0,
        C1: 0,
        C2: 0,
        C3: 0,
      };
      state.gameNumber++;
    },
  },
});

export const {
  savePlayer1,
  savePlayer2,
  reset,
  changeTurn,
  setMatrixValue,
  setGameEndTrue,
  resetMatrix,
  addVictoryP1,
  addVictoryP2,
} = trisSlice.actions;

export default trisSlice.reducer;
