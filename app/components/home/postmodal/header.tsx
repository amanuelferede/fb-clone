import { CgClose } from "react-icons/cg";
import { openAddPostModal } from "@/app/store/slices/addpost";
import { useAppDispatch } from "@/app/store/hooks";
export default function Header() {
  const dispatch = useAppDispatch();
  const openModal = () => {
    dispatch(openAddPostModal(false));
  };

  return (
    <div className="sticky top-0 left-0 right-0 items-center justify-between p-3 border-b border-b-gray-100 flex space-x-2.5">
      <p> </p>
      <p className="font-semibold text-lg">Create a post</p>
      <CgClose
        className="w-8 rounded-full h-8 p-1 text-zinc-600 cursor-pointer bg-gray-200 hover:bg-gray-300"
        onClick={openModal}
      />
    </div>
  );
}
