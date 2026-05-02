import FeedClient from "./feed client";
export default async function InitialFeed() {
  await new Promise<null>((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 5000);
  });
  return <FeedClient />;
}
