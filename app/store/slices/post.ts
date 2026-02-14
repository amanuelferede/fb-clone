import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  isCommentModalOpen: boolean;
  isReactionModalOpen: boolean;
}

const initialState: PostState = {
  isCommentModalOpen: false,
  isReactionModalOpen: false,
};

export const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    openCommentModal: (state, action: PayloadAction<boolean>) => {
      state.isCommentModalOpen = action.payload;
    },

openReactionModal: (state, action: PayloadAction<boolean>) => {
      state.isReactionModalOpen = action.payload;
    },

    
    
  },
});

export const {
openCommentModal,
openReactionModal
} = postSlice.actions;

export default postSlice.reducer;
