import ReactionModalBody from "@/app/components/generic/reaction modal/body";
import ReactionModalHeader from "@/app/components/generic/reaction modal/header";
import ReactionModal from "@/app/components/generic/reaction modal/modal";
import Reactors from "@/app/components/generic/reaction modal/reactors";

export default function ReactionModalForThisReply() {
  return (
    <ReactionModal>
      <ReactionModalHeader />
      <ReactionModalBody>
        <Reactors />
      </ReactionModalBody>
    </ReactionModal>
  );
}
