"use client";

import ModalHeader from "./header";
import Body from "./components/body/modalbody";
import Container from "./components/container";

export default function PostModal() {
  return (
    <Container>
      <ModalHeader />
      <Body />
    </Container>
  );
}
