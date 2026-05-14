import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const ModalStateSlice = createSlice({
  name: "ModalStateSlice",
  initialState,
  reducers: {
    isOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
  },
});

export const { isOpen } = ModalStateSlice.actions;

export default ModalStateSlice.reducer;
