"use client";

import ModalHeader from "./header";
import Body from "./components/body/modalbody";
import Container from "../../generic/container";

export default function PostModal() {
  return (
    <Container className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-gray-300/25">
      <Container className="max-w-125 mx-auto mt-10 bg-white rounded-xl shadow-xl">
        <ModalHeader />
        <Body />
      </Container>
    </Container>
  );
}
