"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiCommentEdit, BiLogOut, BiMoon, BiSearch } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { FiHelpCircle } from "react-icons/fi";
import { HiBars3 } from "react-icons/hi2";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { PiPlus } from "react-icons/pi";
import { SlSettings } from "react-icons/sl";

export default function TopBar() {
  const [shouldShowProfileSettings, setShouldProfileSettings] =
    useState<boolean>(false);

  const showProfileSettings = () => {
    setShouldProfileSettings(!shouldShowProfileSettings);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 shadow-sm bg-white md:flex hidden items-center justify-between py-1 px-3">
        <div className="flex items-center space-x-2">
          <Link href={`/`}>
            <Image
              alt="Facebook"
              src={"/topbar/communication.png"}
              width={39}
              height={39}
            />
          </Link>
          <div className="p-2 flex grow items-center space-x-1.5 bg-gray-200 rounded-4xl">
            <CgSearch className="w-5 h-5 text-zinc-500" />
            <input
              type="text"
              className="grow border-none focus:outline-none"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        <div className="md:flex items-center space-x-6 hidden">
          <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
            <Image
              alt="home"
              src={"/topbar/home.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-9 h-9"
            />
          </div>
          <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
            <Image
              alt="home"
              src={"/topbar/reel.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-9 h-9"
            />
          </div>
          <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
            <Image
              alt="home"
              src={"/topbar/marketplace.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-9 h-9"
            />
          </div>
          <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
            <Image
              alt="home"
              src={"/topbar/groups.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-9 h-9"
            />
          </div>
          <div className="px-10 py-1.5 text-center justify-center hover:bg-gray-100 rounded-lg">
            <Image
              alt="home"
              src={"/topbar/game.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-9 h-9"
            />
          </div>
        </div>

        <div className="md:flex items-center space-x-2 flex">
          <div className=" p-1 w-10 h-10  rounded-full bg-zinc-200 flex items-center justify-center">
            <Image
              alt="home"
              src={"/topbar/menu.png"}
              width={0}
              height={0}
              sizes="100vh"
              className="w-10 h-10 object-contain p-1.5"
            />
          </div>
          <div className=" p-1.5  rounded-full bg-zinc-200 flex items-center justify-center">
            <Image
              alt="home"
              src={"/topbar/messenger.png"}
              width={0}
              height={0}
              sizes="100vh"
              className=" w-7 h-7 object-cover rounded-full"
            />
          </div>

          <div className=" p-1 w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center">
            <Image
              alt="home"
              src={"/topbar/bell.png"}
              width={0}
              height={0}
              sizes="100vh"
              className=" w-10 h-10 object-cover p-1.5"
            />
          </div>

          <div className="w-10 h-10 relative rounded-full">
            <div onClick={showProfileSettings} className="cursor-pointer">
              <Image
                alt="home"
                src={"/users/11.jpg"}
                width={0}
                height={0}
                sizes="100vh"
                className=" w-10 h-10 object-cover rounded-full"
              />
              <IoIosArrowDropdownCircle className="w-4 h-4 bg-white rounded-full text-gray-500 stroke-1 stroke-black absolute bottom-0 -right-0.5" />
            </div>
            {shouldShowProfileSettings && (
              <div className="w-90 h-auto shadow-lg rounded-2xl bg-white absolute top-full border-t border-t-gray-100 right-3">
                <div className="m-3  ">
                  <div className="shadow-lg rounded-xl p-3">
                    <Link href={`/ziamanuel`}>
                      <div className=" flex items-center space-x-2.5 mb-3 pb-3 border-b border-b-gray-300">
                        <Image
                          alt="Facebook"
                          src={`/users/11.jpg`}
                          width={0}
                          height={0}
                          sizes="100vh"
                          className="object-cover w-9 h-9 rounded-full"
                        />
                        <p className="font-semibold">Amanuel Ferede</p>
                      </div>
                    </Link>

                    <Link
                      href={`#`}
                      className=" rounded-lg py-2 bg-gray-200 flex items-center justify-center space-x-0.5"
                    >
                      <Image
                        alt="Facebook"
                        src={`/add post/group.png`}
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="object-cover w-4 h-4"
                      />
                      <p>See all profiles</p>
                    </Link>
                  </div>
                  <div className="p-3 pt-3.5">
                    <div className="flex flex-col space-y-2">
                      <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                        <SlSettings className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                        <p className="font-semibold">Settings and privacy</p>
                      </div>

                      <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                        <FiHelpCircle className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                        <p className="font-semibold">Help and support</p>
                      </div>

                      <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                        <BiMoon className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                        <p className="font-semibold">
                          Dispaly and accessiblity{" "}
                        </p>
                      </div>

                      <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                        <BiCommentEdit className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                        <p className="font-semibold">Give feedback </p>
                      </div>

                      <div className="flex space-x-3 cursor-pointer items-center  py-2 hover:bg-gray-200">
                        <BiLogOut className="w-10 h-10 p-2 bg-gray-200 rounded-full " />
                        <p className="font-semibold">Log out </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 shadow-sm bg-white flex flex-col space-y-1">
        <div className="  flex items-center justify-between py-1 px-3">
          <p className="font-mono text-blue-600 text-2xl font-bold">Facebook</p>
          <div className="flex items-center space-x-3">
            <PiPlus className="p-2 rounded-full bg-gray-200 w-10 h-10" />
            <BiSearch className="p-2 rounded-full bg-gray-200 w-10 h-10" />
            <HiBars3 className="p-2 rounded-full bg-gray-200 w-10 h-10" />
          </div>
        </div>
        <div className="flex py-5 items-center justify-around space-x-3">
          <Image
            alt="Facebook"
            src={"/topbar/home.png"}
            width={25}
            height={25}
          />
          <Image
            alt="Facebook"
            src={"/topbar/mobile/friends.png"}
            width={25}
            height={25}
          />
          <Image
            alt="Facebook"
            src={"/topbar/mobile/messenger.png"}
            width={25}
            height={25}
          />

          <Image
            alt="Facebook"
            src={"/topbar/mobile/video.png"}
            width={25}
            height={25}
          />
          <Image
            alt="Facebook"
            src={"/topbar/mobile/notification.png"}
            width={25}
            height={25}
          />
          <Image
            alt="Facebook"
            src={"/topbar/mobile/marketplace.png"}
            width={25}
            height={25}
          />
        </div>
      </div>
    </>
  );
}
