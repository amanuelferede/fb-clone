import PageSharePost from "./share/post";
import OriginalPagePost from "./original/post";
import Container from "@/app/components/generic/container";

export default function PagePost() {
  return (
    <Container>
      <OriginalPagePost />
      <PageSharePost />
    </Container>
  );
}
