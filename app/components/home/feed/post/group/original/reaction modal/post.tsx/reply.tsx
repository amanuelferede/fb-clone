"use client";

import ReactionModalBody from "@/app/components/generic/reaction modal/body";
import ReactionModalHeader from "@/app/components/generic/reaction modal/header";
import ReactionModal from "@/app/components/generic/reaction modal/modal";
import Reactors from "@/app/components/generic/reaction modal/reactors";
import { useAppDispatch } from "@/app/store/hooks";
import { openReactionModalForThisReply } from "@/app/store/slices/post/group/origianl";

export default function ReactionModalForThisReply() {
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(
      openReactionModalForThisReply({ currentReactionType: "", isOpen: true })
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
