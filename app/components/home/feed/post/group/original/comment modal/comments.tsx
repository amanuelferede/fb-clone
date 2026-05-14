"use client";
import { comments } from "@/app/seed/faker/comment";
import Image from "next/image";
export default function Comments() {
  return (
    <div className="pl-7 py-1 w-full">
      {comments.slice(0, 4).map((comment, index) => {
        return (
          <div key={index} className=" mb-10">
            <div className="relative border border-red-600">
              <div className="relative flex space-x-3 -left-3.5 -top-3.5">
                <Image
                  src={`/users/${index + 1}.jpg`}
                  alt="Amanuel Fered"
                  width={0}
                  height={0}
                  sizes="100vh"
                  className="w-8 h-8 rounded-full flex-none object-cover"
                />
                <div className="flex flex-col space-y-0.5">
                  <p className="text-[1rem] font-semibold">Amanuel Ferede</p>
                  <div className="bg-gray-200 py-1.5 px-2 rounded-lg">
                    {comment}
                  </div>
                </div>
              </div>
            </div>
            <div className="h-8 hidden w-25 border relative border-blue-600">
              <p className="bg-red-600 absolute  right-0 z-10 -bottom-1/2">
                4 replies
              </p>
            </div>
            <div className="h-8 w-25 border relative border-blue-600"></div>
            <div className="flex ">
              <div className="w-25 shrink-0 bg-green-600 border border-blue-600"></div>
              <div className="grow bg-yellow-400 relative">
                <div className=" flex space-x-3 relative -top-3.5 -left-3.5">
                  <Image
                    src={`/users/${index + 1}.jpg`}
                    alt="Amanuel Fered"
                    width={0}
                    height={0}
                    sizes="100vh"
                    className="w-8 h-8 rounded-full flex-none object-cover"
                  />
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-[1rem] font-semibold">Amanuel Ferede</p>
                    <div className="bg-gray-200 py-1.5 px-2 rounded-lg">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Corrupti voluptas nesciunt sapiente cupiditate quae porro
                      vitae, debitis alias ratione omnis adipisci veniam sunt
                      quidem aliquam aperiam similique molestias, maxime non!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
