"use client";
import { useAppDispatch } from "@/app/store/hooks";
import { setUploadedMedias } from "@/app/store/slices/addpost";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";
export default function Footer() {
  const dispatch = useAppDispatch();

  const input = useRef<HTMLInputElement>(null);
  const showFileChooser = () => {
    input.current?.click();
  };
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (window.FileReader) {
      const files = e.target.files;

      if (files) {
        let id: number;
        for (const x in files) {
          id = 0;
          const file = files[x];

          if (file) {
            const fr = new FileReader();
            fr.onloadend = () => {
              dispatch(
                setUploadedMedias({
                  id: id++,
                  url: fr.result as string,
                  type: file.type,
                })
              );
            };
            try {
              fr.readAsDataURL(file);
            } catch {}
          }
        }
      }
      //console.log(files![0]);
    } else {
      alert("file reader not supported");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between space-x-2 my-2 py-3 px-4 rounded-xl border-2 border-gray-200">
        <p className="font-semibold">Add to your post</p>
        <div className="flex space-x-4 cursor-pointer">
          <input
            ref={input}
            name="photos"
            multiple
            type="file"
            onChange={onChangeFile}
            className="relative hidden"
          ></input>
          <Image
            onClick={showFileChooser}
            src={`/add post/image-gallery.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9 p-1 hover:bg-gray-100 cursor-pointer"
          />
          <Image
            src={`/add post/friend.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9 p-1 hover:bg-gray-100 "
          />
          <Image
            src={`/add post/smiling-face.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9 p-1 hover:bg-gray-100 "
          />

          <Image
            src={`/add post/placeholder.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9 p-1 hover:bg-gray-100 "
          />
          <Image
            src={`/add post/gif.png`}
            alt="User"
            width={0}
            height={0}
            sizes="100vh"
            className="w-9 h-9 p-1 hover:bg-gray-100 "
          />
        </div>
      </div>
      <button className=" block w-full py-2 px-3 bg-blue-600 text-white rounded-md text-center">
        Post
      </button>
    </div>
  );
}
