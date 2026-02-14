"use client";
import Image from "next/image";
import Link from "next/link";
import { BiPencil, BiPlus } from "react-icons/bi";
import { FaCamera } from "react-icons/fa6";
import { IoIosArrowDown, IoIosMore, IoMdArrowDropdown } from "react-icons/io";
import { users } from "../seed/faker/user";
import OriginalUserPost from "../components/home/post/userpost/post";
import UserSharePost from "../components/home/post/usersharepost/post";
import { useEffect, useState } from "react";

export default function UserProfile() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="max-w-245 mx-auto h-120 ">
          <div
            className="relative w-full  mx-auto mt-14 h-90 rounded-bl-xl rounded-br-xl bg-gray-100"
            style={{
              backgroundImage: "url(" + `/users/5.jpg` + ")",
              backgroundPosition: "top 100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute px-8 z-10 -bottom-36 w-full flex space-x-5 my-5 pb-5 border-b-2 border-b-gray-200">
              <div className="w-42 h-42 rounded-full object-cover relative">
                <Image
                  src={`/users/11.jpg`}
                  alt="profile"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="w-10 h-10 p-2.5 absolute bg-gray-200 rounded-full -right-0.5 -bottom-0.5">
                  <FaCamera className=" w-full h-full   " />
                </div>
              </div>
              <div className="grow flex flex-col space-y-1.5">
                <div className="h-20"></div>
                <p className="text-4xl font-bold">Amanuel Ferede</p>
                <div className="flex justify-between">
                  <p className="text-lg text-zinc-600">3.5k friends</p>
                  <div className="flex space-x-2.5">
                    <button className="flex items-center justify-center py-2 px-3 rounded-lg bg-blue-600">
                      <BiPlus className="text-white" />
                      <span className="text-white font-medium">
                        Add to story
                      </span>
                    </button>

                    <button className="flex items-center justify-center py-2 px-3 rounded-lg bg-gray-200">
                      <BiPencil className="text-black" />
                      <span className="text-black font-medium">
                        Edit profile
                      </span>
                    </button>
                    <button className="p-3 bg-gray-100 rounded-lg">
                      <IoIosArrowDown />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`max-w-245 mx-auto flex justify-between py-2 items-center ${
            scrollPosition > 482.3999938964844 ? "hidden" : "block"
          }`}
        >
          <div className="flex space-x-3 w-full ">
            <div className="px-4 py-3 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              Posts
            </div>
            <div className="px-4 py-3 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              About
            </div>
            <div className="px-4 py-3 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              Friends
            </div>
            <div className="px-4 py-3 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              Photos
            </div>
            <div className="px-4 py-3 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              Reels
            </div>
            <div className="px-4 py-3 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              Check Ins
            </div>
            <div className="px-4 py-3 font-medium flex items-center text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              <span>More</span>
              <IoMdArrowDropdown className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-center p-1.5 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
            <IoIosMore className="w-10 h-10 bg-gray-100 rounded-lg p-1.5" />
          </div>
        </div>

        <div
          className={`bg-white w-full shadow-sm  ${
            scrollPosition > 482.3999938964844
              ? "block fixed top-14 z-29 left-0 right-0"
              : "hidden"
          }`}
        >
          <div className="max-w-245 mx-auto flex justify-between w-full py-2.5">
            <div className="flex items-center space-x-2">
              <Image
                src={`/users/11.jpg`}
                alt="xxx"
                width={0}
                height={0}
                sizes="100vh"
                className="w-10 h-10 object-cover rounded-full"
              />
              <p className="text-xl font-bold">Amanuel Ferede</p>
            </div>
            <div className="flex items-center justify-center p-1.5 font-medium text-center rounded-lg text-zinc-500 hover:bg-gray-200">
              <IoIosMore className="w-10 h-10 bg-gray-100 rounded-lg p-1.5" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-245 mx-auto mt-4">
        <div className="flex space-x-3">
          <div className="w-[40%]">
            <div className="bg-white rounded-xl shadow-sm p-3 mb-4 flex flex-col space-y-4 sticky">
              <p className="text-2xl font-bold">Intro</p>
              <p className="text-center text-[0.98rem]">
                The entire world is imperfect and perhaps there may be some
                limitations beyond this world !
              </p>
              <Link
                href={`#`}
                className="py-2 text-center font-medium rounded-lg block bg-gray-300"
              >
                Edit Bio
              </Link>

              <p>From Bahirdar</p>

              <Link
                href={`#`}
                className="py-2 text-center font-medium rounded-lg block bg-gray-300"
              >
                Edit details
              </Link>

              <Link
                href={`#`}
                className="py-2 text-center font-medium rounded-lg block bg-gray-300"
              >
                Add featured
              </Link>
            </div>
            <div className="px-4 py-3.5 flex justify-between mb-4 bg-white rounded-xl shadow-sm">
              <p className="text-lg font-bold">Photos</p>
              <p className="text-lg">See all photos</p>
            </div>

            <div className="px-4 py-3.5  mb-5 bg-white rounded-xl shadow-sm">
              <div className="flex justify-between">
                <p className="text-xl font-bold">Photos</p>
                <p className="text-xl">See all photos</p>
              </div>
              <p className="text-gray-500 mb-2">3635 freinds</p>
              <div className="grid grid-cols-3 gap-3.5">
                {Array.from(
                  {
                    length: 9,
                  },
                  (el, index) => {
                    return (
                      <div
                        className="w-full h-25 flex flex-col space-y-1.5"
                        key={index}
                      >
                        <Image
                          key={index}
                          src={`/users/${index + 2}.jpg`}
                          alt="xxx"
                          width={0}
                          height={0}
                          sizes="100vh"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <p className="text-sm">{users[index].name}</p>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="w-[60%]">
            <div className="px-3 mb-4 py-3 bg-white rounded-2xl">
              <div className=" flex space-x-2 w-full">
                <Image
                  src={`/users/11.jpg`}
                  alt="xxx"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-11 h-11 object-cover rounded-full"
                />
                <input
                  className="grow h-11 bg-gray-200 rounded-3xl pl-4 focus:outline-none placeholder:text-xl placeholder:text-zinc-600"
                  placeholder="What is on your mind"
                />
              </div>
              <div className="border-b-2 border-b-gray-100 mt-3"></div>
              <div className="mt-2 flex px-4 space-x-2 justify-between">
                <div className="flex space-x-1 items-center justify-center">
                  <Image
                    src={`/add post/video.png`}
                    alt="xxx"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-9 h-9 object-cover "
                  />
                  <p>Live Video</p>
                </div>
                <div className="flex space-x-1 items-center justify-center">
                  <Image
                    src={`/add post/image-gallery.png`}
                    alt="xxx"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-9 h-9 object-cover "
                  />
                  <p>Photos</p>
                </div>
                <div className="flex space-x-1 items-center justify-center">
                  <Image
                    src={`/add post/event.png`}
                    alt="xxx"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-9 h-9 object-cover "
                  />
                  <p>Life Events</p>
                </div>
              </div>
            </div>
            <div className="mb-4 bg-white rounded-2xl">
              <OriginalUserPost />
            </div>

            <div className="mb-4 bg-white rounded-2xl">
              <UserSharePost />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
