"use client";
import { users } from "@/app/seed/faker/user";
import Image from "next/image";
import ModalContainer from "./modal container";
import Header from "./header";
import Reactor from "./reactor";
export default function ReactionModal() {
  return (
    <ModalContainer>
      <Header />
      <div className="flex flex-col space-y-4 p-3 max-h-105 overflow-y-auto">
        {Array.from({ length: 30 }, (el, index) => {
          return <Reactor key={index} index={index} />;
        })}
      </div>
    </ModalContainer>
  );
}
