import Container from "@/app/components/generic/container";

export default function FlexRow({ children }: { children: React.ReactNode }) {
  return (
    <Container className="flex space-x-3 px-3 pt-3 pb-1.5">
      {children}
    </Container>
  );
}
