import { React, useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-10" data-aos = "zoom-in">
      <h1 className="text-4xl font-bold text-center text-black">Contact</h1>
      <p className="text-center pb-8 pt-3 capitalize">
        Having some offer? contact me here
      </p>
      <form
        action="https://getform.io/f/fdffb3b4-c59f-4061-9a1c-c6f97ded3aa0"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-200"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-200"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py2">
          <label className="uppercase text-sm py-2">E-mail</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-200"
            type="email"
            name="email"
            id=""
          />
        </div>
        <div className="flex flex-col py2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-200"
            type="text"
            name="subject"
            id=""
          />
        </div>
        <div className="flex flex-col py2">
          <label className="uppercase text-sm py-2">Messege</label>
          <textarea
            className="border-2 rounded-lg p-3 flex border-gray-200"
            rows="10"
            name="messege"
            id=""
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-gray-100 mt-4 w-full p-4 rounded-lg font-bold"
        >
          Send Messege
        </button>
      </form>
    </div>
  );
};

export default Contact;
