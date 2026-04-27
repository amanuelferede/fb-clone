import GridCol from "./gridcol";
import GridRow from "./gridrow";
import Image from "next/image";
import RowSpan7 from "./rowspan7";
import RowSpan5 from "./rowspan5";
export default function Album2() {
  return (
    <GridRow>
      <RowSpan7>
        <Image
          src={`/users/4.jpg`}
          alt="Amanuel Fered"
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-full object-cover"
        />
      </RowSpan7>
      <RowSpan5>
        <GridCol>
          <Image
            src={`/users/9.jpg`}
            alt="Amanuel Fered"
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-full object-cover"
          />
          <Image
            src={`/users/2.jpg`}
            alt="Amanuel Fered"
            width={0}
            height={0}
            sizes="100vh"
            className="w-full h-full object-cover"
          />
        </GridCol>
      </RowSpan5>
    </GridRow>
  );
}
