import Container from "@/app/components/generic/container";

export default function PostCard({ children }: { children: React.ReactNode }) {
  return (
    <Container className="bg-white shadow-sm rounded-xl mt-3">
      {children}
    </Container>
  );
}
