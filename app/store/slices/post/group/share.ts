import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type OpenReactionModalPayLoad = {
  isOpen: boolean;
  currentReactionType: string;
};
interface ToGroupSharePostState {
  post: {
    commentModalState: {
      isOpen: boolean;
    };
    reactionModalState: {
      isOpen: boolean;
      currentReactionType: string;
    };
  };
  comment: {
    reactionModalState: {
      isOpen: boolean;
      currentReactionType: string;
    };
  };
  reply: {
    reactionModalState: {
      isOpen: boolean;
      currentReactionType: string;
    };
  };
  replyReply: {
    reactionModalState: {
      isOpen: boolean;
      currentReactionType: string;
    };
  };
}

const initialState: ToGroupSharePostState = {
  post: {
    commentModalState: {
      isOpen: false,
    },
    reactionModalState: {
      isOpen: false,
      currentReactionType: "",
    },
  },
  comment: {
    reactionModalState: {
      isOpen: false,
      currentReactionType: "",
    },
  },
  reply: {
    reactionModalState: {
      isOpen: false,
      currentReactionType: "",
    },
  },
  replyReply: {
    reactionModalState: {
      isOpen: false,
      currentReactionType: "",
    },
  },
};

export const toGroupSharePostSlice = createSlice({
  name: "toGroupSharePostSlice",
  initialState,
  reducers: {
    openCommentModalForThisPost: (state, action: PayloadAction<boolean>) => {
      state.post.commentModalState.isOpen = action.payload;
    },

    openReactionModalForThisPost: (
      state,
      action: PayloadAction<OpenReactionModalPayLoad>
    ) => {
      state.post.reactionModalState = action.payload;
    },
    openReactionModalForThisComment: (
      state,
      action: PayloadAction<OpenReactionModalPayLoad>
    ) => {
      state.comment.reactionModalState = action.payload;
    },
    openReactionModalForThisReply: (
      state,
      action: PayloadAction<OpenReactionModalPayLoad>
    ) => {
      state.reply.reactionModalState = action.payload;
    },
    openReactionModalForThisReplyReply: (
      state,
      action: PayloadAction<OpenReactionModalPayLoad>
    ) => {
      state.replyReply.reactionModalState = action.payload;
    },
  },
});

export const {
  openCommentModalForThisPost,
  openReactionModalForThisPost,
  openReactionModalForThisComment,
  openReactionModalForThisReply,
  openReactionModalForThisReplyReply,
} = toGroupSharePostSlice.actions;

export default toGroupSharePostSlice.reducer;
