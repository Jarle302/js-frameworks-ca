"use client";
import { item } from "@/app/_store/useShopStore";
import { useEffect, useState } from "react";

export const Carousel = ({ posts }: { posts: item[] }) => {
  const [postIndex, setPostIndex] = useState<number>(0);
  const intervalTime = 5000;

  useEffect(() => {
    const intervalId = setInterval(
      () => setPostIndex((prev) => (prev + 1) % posts.length),
      intervalTime
    );
  }, []);
  const { title, image, discountedPrice, price, description } =
    posts[postIndex];

  return (
    <section className="border-4 rounded-md border-zinc-800">
      <div className="absolute z-20 w-[100vw] h-[80vh] bg-zinc-600 opacity-15">
        {" "}
      </div>
      <img
        className="relative z-10 w-[100vw] h-[80vh] object-cover rounded-md"
        src={image.url}
        alt={image.alt}
      />
      <h1 className="absolute text-2xl z-30 top-[60px] text-zinc-200 p-3 bg-zinc-800">
        {title}
      </h1>
      <p className="absolute z-30 top-[33%] text-zinc-200 p-3 bg-zinc-800">
        Now Only{" "}
        <span className="text-green-500 font-bold">{discountedPrice}</span> Save{" "}
        <span className="text-red-500 font-bold">
          {(price - discountedPrice).toFixed(2)}!
        </span>
      </p>
      <p className="absolute z-30 text-zinc-200 p-3 bg-zinc-800 max-w-[320px] top-[453px] right-[5px] h-[80px] flex items-center">
        {description}
      </p>
      <div className="absolute z-30 top-[483px]">
        {posts.map((post, index) => (
          <button
            key={index + post.title}
            className={`w-[50px] h-[50px] ${
              index === postIndex ? "border-2 border-green-300" : ""
            }`}
            onClick={() => setPostIndex(() => index)}>
            <img
              className="object-cover w-full h-full ${}"
              src={post.image.url}
              alt={post.image.alt}
            />
          </button>
        ))}
      </div>
    </section>
  );
};
