// Dependencies
import  { FC } from "react";

const images = [
  "/images/40.webp",
  "/images/41.webp",
  "/images/42.webp",
  "/images/13.webp",
  "/images/28.webp",
  "/images/48.webp",
  "/images/30.webp",
  "/images/26.webp",

];

const FollowUS: FC = () => {

  return (
    <>
 
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-4xl mb-5 mt-5 text-center">Follow Us on Instagram</h1>
       
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2" >
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="w-56 h-56 block cursor-pointer  "
                alt="Gallery item"
             
              />
            ))}
          </div>
  
      </div>
    </>
  );
};

export default FollowUS;
