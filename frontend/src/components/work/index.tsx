// Dependencies
import { FC} from "react";


const Work:FC = ()=>{
    return (
        <section className="flex flex-col items-center justify-center gap-12 bg-neutral-950 px-4 py-24 md:flex-row">
          <Copy />
        </section>
      );
}
const Copy = () => (
    <div className="max-w-lg text-center md:text-start flex flex-col items-center justify-center">
      <h2 className="mb-3 text-4xl text-white">Want to work with us?</h2>
      <p className="mb-6 text-sm leading-relaxed text-neutral-400">
      We offer you all the options that suit your needs, ready to serve you
      </p>
      <div><CTAs /></div>

    </div>
  );
  

  const CTAs = () => {
    return (
      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center gap-2  border-2 border-white px-4 py-2 font-semibold text-white transition-colors hover:bg-white hover:text-black">
        
          <span>Get Consultation  </span>
        </button>
        <button className=" border-2 border-indigo-300 bg-indigo-300 px-4 py-2 font-semibold text-black transition-colors hover:border-indigo-600 hover:bg-indigo-600 hover:text-white">
          Contact Us
        </button>
      </div>
    );
  };
        
export default Work; 