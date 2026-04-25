"use client";

import { useAppSelector } from "@/app/store/hooks";
import { useEffect } from "react";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAddPostModalOpened = useAppSelector((state) => state.addPost.isOpen);
  const isCommentModalOpend = useAppSelector(
    (state) => state.post.isCommentModalOpen
  );
  const isReactModalOPened = useAppSelector(
    (state) => state.post.isReactionModalOpen
  );

  useEffect(() => {
    if (isAddPostModalOpened || isCommentModalOpend || isReactModalOPened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isAddPostModalOpened, isCommentModalOpend, isReactModalOPened]);
  return <>{children}</>;
}
