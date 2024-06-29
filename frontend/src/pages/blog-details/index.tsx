import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../blog/index";
import { FaFacebookF } from "react-icons/fa";
import Blog from "@/components/blog";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((post) => post.id === parseInt(id || "", 10));

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 text-center mt-36">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.imgUrl} alt="" className="w-full h-[90vh] rounded-lg mb-4" />
      <p className="text-gray-800">{post.description}</p>

      <div className="max-w-4xl mx-auto p-4 ">
        <ul className="flex flex-row  gap-8 w-auto h-auto items-center justify-center">
          <li className=" w-20 h-12 bg-black  place-content-center flex items-center cursor-pointer rounded-lg">
            <FaFacebookF />
          </li>
          <li className=" w-20 h-12 bg-black  place-content-center flex items-center cursor-pointer rounded-lg">
            <FaFacebookF />
          </li>
          <li className=" w-20 h-12 bg-black  place-content-center flex items-center cursor-pointer rounded-lg">
            <FaFacebookF />
          </li>
          <li className=" w-20 h-12 bg-black  place-content-center flex items-center cursor-pointer rounded-lg">
            <FaFacebookF />
          </li>
          <li className=" w-20 h-12 bg-black  place-content-center flex items-center cursor-pointer rounded-lg">
            <FaFacebookF />
          </li>
        </ul>
      </div>
      <div className=" max-w-6xl mx-auto  ">
        <h1 className="text-4xl my-10"> articals </h1>
        <Blog />
      </div>
      <div className="flex max-w-5xl mx-auto justify-center mt-10">
        <form action="" className="flex flex-col items-end">
          <label htmlFor="" className="
          "> name </label>
          <input className="border-2 border-black w-screen max-w-3xl h-10 " name="name" type="text" />
          <label htmlFor=""> Email </label>
          <input className="border-2 border-black w-screen max-w-3xl h-10 " name="name" type="text" />
          <label htmlFor=""> comment </label>
          <input className="border-2 border-black w-screen max-w-3xl h-40" name="name" type="text" />
        </form>
      </div>
    </div>
  );
};

export default Details;
