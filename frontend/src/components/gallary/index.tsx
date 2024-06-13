// Dependencies
import  { FC, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
  "/images/2.jpg",
];

const Gallery: FC = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img: string, i: number) => {
    setData({ img, i });
  };

  const imgAction = (action: string) => {
    let i = data.i;
    if (action === 'next-img' && i < images.length - 1) {
      setData({ img: images[i + 1], i: i + 1 });
    } else if (action === 'prev-img' && i > 0) {
      setData({ img: images[i - 1], i: i - 1 });
    } else if (action === 'close') {
      setData({ img: '', i: 0 });
    }
  };

  return (
    <>
      {data.img && (
        <div className="w-[100%] h-[100vh] bg-black fixed flex justify-center items-center overflow-hidden">
          <button onClick={() => imgAction('close')} className="absolute top-10 right-10 text-white">X</button>
          <button onClick={() => imgAction('prev-img')} className="absolute left-10 text-white">Prev</button>
          <img src={data.img} className="w-auto max-w-[90%] max-h-[90%]" />
          <button onClick={() => imgAction('next-img')} className="absolute right-10 text-white">Next</button>
        </div>
      )}
      <div className="p-3">
        <h1 className="text-5xl mb-5 text-center">Our Gallery</h1>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4 }}
        >
          <Masonry gutter="5px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="w-auto block cursor-pointer"
                alt="Gallery item"
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Gallery;
