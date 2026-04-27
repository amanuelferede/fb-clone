import Image from "next/image";
import GridCol from "./gridcol";
import GridRow from "./gridrow";
import Colspan7 from "./colspan7";
import Colspan5 from "./colspan5";
import Item2 from "./item2";
import Container from "../../../components/container";
import Item1 from "./item1";
export default function Album1() {
  return (
    <Container>
      <GridCol>
        <Colspan7>
          <Item1>
            <Image
              src={`/users/4.jpg`}
              alt="Amanuel Fered"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </Item1>
        </Colspan7>
        <Colspan5>
          <GridRow>
            <Item2>
              <Image
                src={`/users/5.jpg`}
                alt="Amanuel Fered"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"
              />
            </Item2>
            <Item2>
              <Image
                src={`/users/15.jpg`}
                alt="Amanuel Fered"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"
              />
            </Item2>
            <Item2>
              <Image
                src={`/users/35.jpg`}
                alt="Amanuel Fered"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"
              />
            </Item2>
            <Item2>
              <Image
                src={`/users/25.jpg`}
                alt="Amanuel Fered"
                width={0}
                height={0}
                sizes="100vh"
                className="w-full h-full object-cover"
              />
            </Item2>
          </GridRow>
        </Colspan5>
      </GridCol>
    </Container>
  );
}
