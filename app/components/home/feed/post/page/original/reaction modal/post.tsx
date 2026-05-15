"use client";

import ReactionModalBody from "@/app/components/generic/reaction modal/body";
import ReactionModalHeader from "@/app/components/generic/reaction modal/header";
import ReactionModal from "@/app/components/generic/reaction modal/modal";
import Reactors from "@/app/components/generic/reaction modal/reactors";
import { useAppDispatch } from "@/app/store/hooks";
import { isOpen } from "@/app/store/slices/modal state";
import { openReactionModalForThisPost } from "@/app/store/slices/post/page/origianl";

export default function ReactionModalForThisPost() {
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(isOpen(false));
    dispatch(
      openReactionModalForThisPost({ currentReactionType: "", isOpen: false })
    );
  };
  return (
    <ReactionModal>
      <ReactionModalHeader onClose={onClose} />
      <ReactionModalBody>
        <Reactors />
      </ReactionModalBody>
    </ReactionModal>
  );
}
