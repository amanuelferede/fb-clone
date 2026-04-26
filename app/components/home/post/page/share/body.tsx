import Container from "@/app/components/generic/container";
import Text from "@/app/components/generic/post/text";
import SharedPagePost from "../../shared/grouppost";

export default function Body() {
  return (
    <Container className="w-full">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis modi
        earum odio cumque itaque. Laudantium assumenda dolorem, sed quam quos
        animi qui molestiae ab quisquam doloribus esse neque fugiat vitae!
      </Text>
      <SharedPagePost />
    </Container>
  );
}
