import React, { useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 gap-4 py-12 mt-32 mb-24 relative bg-white bg-opacity-60 text-[#42325b] rounded-lg shadow-lg px-5 md:px-12"
    >
      <div className="p-5 md:p-12">
        <h5 className="text-3xl font-bold text-[#42325b] my-2">
          Let's Connect
        </h5>
        <p className="mb-4 max-w-md text-[#42325b]">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2">
          <Link href="https://github.com/gayathritela" className="text-3xl text-[#42325b] hover:text-black cursor-pointer">
            <FaGithub />
          </Link>
          <Link href="https://www.linkedin.com/in/gayathiri-elambooranan/" className="text-3xl text-[#7c6a99] hover:text-blue-900 cursor-pointer">
            <FaLinkedin />
          </Link>
        </div>
      </div>
      
      <div className="p-8 md:p-12 bg-[#c6b8cacc] rounded-lg shadow-md">
        {emailSubmitted ? (
          <p className="text-purple-800 text-lg">
            Email sent successfully! I'll get back to you soon.
          </p>
        ) : (
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#42325b]">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3"
                placeholder="harry@google.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#42325b]">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3"
                placeholder="Just saying hi"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#42325b]">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3"
                placeholder="Let's talk about..."
              />
            </div>
            
            <button
              type="submit"
              className="bg-[#7c6a99] hover:bg-[#563e7b] text-white font-bold py-3 px-5 rounded-lg w-full transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
