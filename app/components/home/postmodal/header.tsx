import { CgClose } from "react-icons/cg";
import Text from "./components/header/text";
import { openAddPostModal } from "@/app/store/slices/addpost";
import { useAppDispatch } from "@/app/store/hooks";
import Container from "./components/header/container";
export default function ModalHeader() {
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(openAddPostModal(false));
  };

  return (
    <Container>
      <Text>{""}</Text>
      <Text>Create a post</Text>
      <CgClose
        className="w-8 rounded-full h-8 p-1 text-zinc-600 cursor-pointer bg-gray-200 hover:bg-gray-300"
        onClick={openModal}
      />
    </Container>
  );
}
