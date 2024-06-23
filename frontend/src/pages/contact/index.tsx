import { motion } from "framer-motion";


 const Contact = () => {
  return (
    <section className="flex flex-col justify-center bg-slate-50 md:grid-cols-[1fr,_400px] lg:grid-cols-[1fr,_600px]  mt-16">
      <Form />
    </section>
  );
};

const Form = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      transition={{
        staggerChildren: 0.05,
      }}
      viewport={{ once: true }}
      className="flex items-center justify-center pb-4 pt-20 md:py-20"
    >
      <div className="mx-auto my-auto max-w-lg px-4 md:pr-0">
        <motion.h1
        
          className="mb-3 text-center text-4xl font-semibold"
        >
          Want to work with us?
        </motion.h1>

        <form onSubmit={(e) => e.preventDefault()} className="w-full">
          <motion.div  className="mb-2 w-full">
            <label
              htmlFor="password-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Name<span className="text-red-600">*</span>
            </label>
            <input
              id="name-input"
              type="text"
              placeholder="Enter your Name"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div  className="mb-2 w-full">
            <label
              htmlFor="email-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Email<span className="text-red-600">*</span>
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
              required
            />
          </motion.div>

          <motion.div  className="mb-4 w-full">
            <label
              htmlFor="Mobile-number-input"
              className="mb-1 inline-block text-sm font-medium"
            >
              Mobile Number<span className="text-red-600">*</span>
            </label>
            <input
              id="Mobile-number-input"
              type="number"
              placeholder="Enter mobile number"
              className="w-full rounded border-[1px] border-slate-300  py-1.5 focus:outline-indigo-600"
              required
            />

            <label
              htmlFor="message-input "
              className="mb-1 inline-block text-sm font-medium mt-2"
            >
               Message<span className="text-red-600">*</span>
            </label>
            <input
              id="message"
              type="text"
              placeholder="Enter Your Message"
              className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600 h-40 placeholder:text-ellipsis"
              required
            />
          </motion.div>

          <motion.div
           className="mb-4 flex flex-col w-full items-start justify-between "
          >
             <h1 className="my-3"> request type </h1>
            <div className="grid grid-cols-4 gap-x-16 gap-y-3">
            
            <input
              type="checkbox"
              id="terms-checkbox"
              className=" accent-indigo-600 "
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              lable name
            </label>
            <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4  accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs ">
              lable name
            </label>
             <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4  accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              lable name
            </label> <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4  accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              lable name
            </label>    
            </div>
           
          </motion.div>


          <motion.div
           className="mb-4 flex flex-col w-full items-start justify-between "
          >
             <h1 className="my-3"> request type </h1>
            <div className="grid grid-cols-4 gap-x-16 gap-y-3">
            
            <input
              type="checkbox"
              id="terms-checkbox"
              className=" accent-indigo-600 "
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              lable name
            </label>
            <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4  accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs ">
              lable name
            </label>
             <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4  accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              lable name
            </label> <input
              type="checkbox"
              id="terms-checkbox"
              className="h-4  accent-indigo-600"
              required
            />
            <label htmlFor="terms-checkbox" className="text-xs">
              lable name
            </label>    
            </div>
           
          </motion.div>
          <motion.button
            
            whileTap={{
              scale: 0.985,
            }}
            type="submit"
            className="mb-1.5 w-full rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Send
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};


export default Contact;