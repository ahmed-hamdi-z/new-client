import { Link } from "react-router-dom";
const CARD_WIDTH = 350;
const MARGIN = 20;

const Blog = () => {
  return (
    <>

      <div className="flex flex-col items-center mt-36 ">
        <h1 className=" relative text-5xl mb-20 text-black">Blog </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto mb-10">
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </div>
      </div>
    </>
  );
};

export const Post = ({ id, imgUrl, title, description }: PostType) => {
  return (
    <>
      <Link
        to={`/details/${id}`}
        key={id}
        className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
        style={{
          width: CARD_WIDTH,
          marginRight: MARGIN,
        }}
      >
        <img
          src={imgUrl}
          className="mb- h-[200px] w-full rounded-lg object-cover"
          alt={`An image for a fake blog post titled ${title}`}
        />
        <p className="mt-2 text-lg font-medium">{title}</p>
        <p className="text-sm mt-2 text-neutral-500">{description}</p>
      </Link>
    </>
  );
};

export default Blog;

export type PostType = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

export const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/images/5.webp",
   
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/images/9.webp",
   
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/images/15.webp",
   
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "/images/16.webp",
   
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/images/22.webp",
   
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/images/45.webp",
   
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 7,
    imgUrl: "/images/47.webp",
   
    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];