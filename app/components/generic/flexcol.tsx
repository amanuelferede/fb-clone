import { getSpacingY } from "@/app/csss-mapping/spacing/space-y";
import { IntegerValueType } from "@/app/csss-mapping/types/values/integer-values-t";

export default function FlexCol({
  children,
  spaceY,
}: {
  children: React.ReactNode;
  spaceY?: IntegerValueType;
}) {
  const _spaceY = getSpacingY(spaceY) ? getSpacingY(spaceY) : "";
  return <div className={` flex flex-col ${_spaceY}`}>{children}</div>;
}
