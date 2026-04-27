import GridCol from "./gridcol";
import GridRow from "./gridrow";
import Image from "next/image";
import RowSpan7 from "./rowspan7";
import RowSpan5 from "./rowspan5";
import Item1 from "./item1";
export default function Album2() {
  return (
    <GridRow>
      <RowSpan7>
        <Item1>
          <Image
            src={`/users/12.jpg`}
            alt="Amanuel Fered"
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-full object-cover"
          />
        </Item1>
      </RowSpan7>
      <RowSpan5>
        <GridCol>
          <Item1>
            <Image
              src={`/users/35.jpg`}
              alt="Amanuel Fered"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </Item1>
          <Item1>
            <Image
              src={`/users/15.jpg`}
              alt="Amanuel Fered"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </Item1>
          <Item1>
            <Image
              src={`/users/5.jpg`}
              alt="Amanuel Fered"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </Item1>
          <Item1>
            <Image
              src={`/users/25.jpg`}
              alt="Amanuel Fered"
              width={0}
              height={0}
              sizes="100vh"
              className="w-full h-full object-cover"
            />
          </Item1>
        </GridCol>
      </RowSpan5>
    </GridRow>
  );
}
