"use client";
import { useAppDispatch } from "@/app/store/hooks";
import { openCommentModal } from "@/app/store/slices/post";
import { CgClose } from "react-icons/cg";

export default function Header() {
  const dispatch = useAppDispatch();

  const closeModal = () => {
    dispatch(openCommentModal(false));
  };
  return (
    <div className="sticky rounded-tl-xl rounded-tr-xl top-0 left-0 right-0 bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <p>{""}</p>
      <p className="text-xl font-bold">Amanuel Ferede&apos;s Post</p>
      <CgClose
        className="w-8 h-8 p-1.5 cursor-pointer rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={closeModal}
      />
    </div>
  );
}
