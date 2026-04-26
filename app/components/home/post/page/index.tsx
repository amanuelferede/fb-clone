import Container from "@/app/components/generic/container";
import PageSharePost from "./share/post";
import OriginalPagePost from "./original/post";

export default function PagePost() {
  return (
    <Container>
      <OriginalPagePost />
      <PageSharePost />
    </Container>
  );
}
