"use client";

import { useAppSelector } from "@/app/store/hooks";
import { useEffect } from "react";

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isModalOpen = useAppSelector((state) => state.modalState.isOpen);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isModalOpen]);
  return <>{children}</>;
}
