"use client";
import ReactionModalBody from "@/app/components/generic/reaction modal/body";
import ReactionModalHeader from "@/app/components/generic/reaction modal/header";
import ReactionModal from "@/app/components/generic/reaction modal/modal";
import Reactors from "@/app/components/generic/reaction modal/reactors";
import { useAppDispatch } from "@/app/store/hooks";
import { openReactionModalForThisComment } from "@/app/store/slices/post/user/share";

export default function ReactionModalForThisComment() {
  const dispatch = useAppDispatch();
  const onClose = () => {
    dispatch(
      openReactionModalForThisComment({
        currentReactionType: "",
        isOpen: false,
      })
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
