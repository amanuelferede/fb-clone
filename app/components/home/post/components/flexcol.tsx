import Container from "@/app/components/generic/container";

export default function FlexCol({ children }: { children: React.ReactNode }) {
  return <Container className="flex flex-col">{children}</Container>;
}
