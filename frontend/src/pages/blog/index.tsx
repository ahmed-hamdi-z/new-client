import SwipeCarousel from "@/components/carousel";

const CARD_WIDTH = 350;
const MARGIN = 20;

const Blog = () => {
  return (
    <>
      <div className="h-96 ">
        <SwipeCarousel />
      </div>

      <div className="flex flex-col items-center mt-4 ">
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

const Post = ({ imgUrl, title, description }: PostType) => {
  return (
    <div
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
    </div>
  );
};

export default Blog;

type PostType = {
  id: number;
  imgUrl: string;

  title: string;
  description: string;
};

const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/images/nn.jpg",

    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/images/nn.jpg",

    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/images/nn.jpg",

    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "/images/nn.jpg",

    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/images/nn.jpg",

    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/images/nn.jpg",

    title: "Lorem ipsum dolor sit amet ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
];
