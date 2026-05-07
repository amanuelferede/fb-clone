import { Suspense } from "react";
import AddPost from "./components/home/addpost/addpost";
import Contacts from "./components/home/contacts/contacts";
import SideBar from "./components/home/sidebar";
import StorySkeleton from "./components/home/skeletons/story";

import TopBar from "./components/navbar";
import Stories from "./components/home/story/stories";
import FeedSkeleton from "./components/home/skeletons/feed";
import InitialFeed from "./components/home/initial feed";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="font-sans min-h-screen flex space-x-20 bg-gray-100">
        <SideBar />
        <div className="md:w-[45%]   md:ml-[27.5%] md:mr-[27.5%] mr-0 ml-0 w-full pt-18 mb-3">
          <AddPost />
          <Suspense fallback={<StorySkeleton />}>
            <Stories />
          </Suspense>
          <Suspense fallback={<FeedSkeleton />}>
            <InitialFeed />
          </Suspense>
        </div>
        <Contacts />
      </div>
    </>
  );
}
