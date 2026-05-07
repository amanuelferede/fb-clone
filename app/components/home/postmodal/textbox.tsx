"use client";
import { ChangeEvent } from "react";
import { BiSmile } from "react-icons/bi";

export default function TextBox({
  onChangePostContent,
  postContent,
  uploadedMediasLength,
}: {
  onChangePostContent: (e: ChangeEvent<HTMLTextAreaElement, Element>) => void;
  postContent: string;
  uploadedMediasLength: number;
}) {
  return (
    <div className="relative">
      <BiSmile className="w-8 h-8 text-zinc-400 absolute right-2 top-2" />
      <textarea
        className={`${
          postContent.length < 150 && uploadedMediasLength === 0
            ? "text-2xl"
            : ""
        } block py-3 resize-none focus:outline-none w-full field-sizing-content ${
          uploadedMediasLength > 0 ? "min-h-10" : "min-h-24 "
        }`}
        name="post-content"
        placeholder="What on your mind, Amanuel?"
        onChange={onChangePostContent}
        value={postContent}
      />
    </div>
  );
}
