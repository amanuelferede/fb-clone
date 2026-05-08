"use client";
import { comments } from "@/app/seed/faker/comment";
import Image from "next/image";
export default function Comments() {
  return (
    <div className="pl-7 py-1 w-full">
      {comments.slice(0, 4).map((comment, index) => {
        return (
          <div key={index} className=" mb-3">
            <div className="relative">
              <div className="relative flex space-x-3">
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
                  <div className="bg-gray-50">{comment}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
