// Dependencies
import { FC, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "/images/2.jpg",
  "/images/nn.jpg",
  "/images/2.jpg",
  "/images/nn.jpg",
  "/images/2.jpg",
  "/images/nn.jpg",
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
    console.log("Image clicked:", img, i); // Log the image and index
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
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button onClick={() => imgAction('close')} className="absolute top-10 right-10 text-white text-3xl">X</button>
          <button onClick={() => imgAction('prev-img')} className="absolute left-10 text-white text-3xl">Prev</button>
          <img src={data.img} className="w-auto max-w-[90%] max-h-[90%]" />
          <button onClick={() => imgAction('next-img')} className="absolute right-10 text-white text-3xl">Next</button>
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
                alt={`Gallery item ${i}`}
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
