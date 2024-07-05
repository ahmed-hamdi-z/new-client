import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_tc9dusc",
          "template_4qrvjnp",
          form.current,
          "OT9OR1z7XDM1I2qYe"
        )
        .then(
          () => {
            alert("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };
  return (
    <div className="  mx-auto xl:w-2/4 md:w-2/4 w-2/3 mt-52 ">
      <div className="w-full flex flex-col justify-center items-center ">
        <form className="w-full  " ref={form} onSubmit={sendEmail}>
          <label className="mb-1 inline-block text-sm font-medium">Name</label>
          <input
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
            type="text"
            name="user_name"
          />
          <label className="mb-1 inline-block text-sm font-medium">
            Phone Numder
          </label>
          <input
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
            type="number"
            name="user_number"
            placeholder="number"
          />
          <label className=" mb-1 inline-block text-sm font-medium">
            Email
          </label>
          <input
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600"
            type="email"
            name="user_email"
          />

          <h3 className="my-3 ml-3 font-bold"> Request Type*</h3>
          <div className="grid grid-cols-2 gap-y-4 mt-4  ">
            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300">
                Quotation
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300">
                Visit
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full text-sm font-medium text-gray-900 dark:text-gray-300">
                Talk to Customer Service
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300">
                Consultation{" "}
              </label>
            </div>
          </div>
          <h3 className="my-3 ml-3 font-bold"> Preferred Time To Contact*</h3>
          <div className="grid grid-cols-2 gap-y-4  mt-4  ">
            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300">
                07:00 AM - 12:00 PM
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300">
                08:00 PM - 10:00 PM
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300">
                12:00 PM - 4:00 PM
              </label>
            </div>

            <div className="flex gap-2 justify-center items-center">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="w-full  text-sm font-medium text-gray-900 dark:text-gray-300">
                04:00 PM - 08:00 PM
              </label>
            </div>
          </div>
          <label className="my-3 ml-3 inline-block text-sm font-bold">
          Notes With The Request
          </label>
          <textarea
            className="w-full rounded border-[1px] border-slate-300 px-2.5 py-1.5 focus:outline-indigo-600 h-40 placeholder:text-ellipsis"
            name="message"
          />
          <input
            className="mt-3 w-full  rounded bg-indigo-600 px-4 py-2 text-center font-medium text-white transition-colors hover:bg-indigo-700"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};
export default Contact;
