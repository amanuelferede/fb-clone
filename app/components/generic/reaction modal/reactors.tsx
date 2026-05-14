import Reactor from "./reactor";

export default function Reactors() {
  return (
    <>
      {Array.from({ length: 30 }, (el, index) => {
        return <Reactor key={index} index={index} />;
      })}
    </>
  );
}
