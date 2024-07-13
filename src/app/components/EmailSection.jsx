import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6buvpcv', 'template_908lvj9', form.current, 'cElW5h2rMNBJczeno')
      .then((result) => {
          console.log(result.text);
          setEmailSubmitted(true);
          setTimeout(() => setEmailSubmitted(false), 3000); // Hide message after 3 seconds
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 gap-4 py-12 mt-32 mb-24 relative bg-white bg-opacity-60 text-[#42325b] rounded-lg shadow-lg px-5 md:px-12">
      <div className="p-5 md:p-12">
        <h5 className="text-3xl font-bold text-[#42325b] my-2">Let's Connect</h5>
        <p className="mb-4 max-w-md text-[#42325b]">
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2">
          <a href="https://github.com/gayathritela" className="text-3xl text-[#42325b] hover:text-black cursor-pointer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gayathiri-elambooranan/" className="text-3xl text-[#7c6a99] hover:text-blue-900 cursor-pointer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="p-8 md:p-12 bg-[#c6b8cacc] rounded-lg shadow-md">
        <form ref={form} className="flex flex-col space-y-6" onSubmit={sendEmail}>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#42325b]">Your email</label>
            <input name="user_email" type="email" id="email" required className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3" placeholder="harry@google.com" />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#42325b]">Subject</label>
            <input name="subject" type="text" id="subject" required className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3" placeholder="Just saying hi" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#42325b]">Message</label>
            <textarea name="message" id="message" required className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg block w-full p-3" placeholder="Let's talk about..." />
          </div>
          <button type="submit" className="bg-[#7c6a99] hover:bg-[#563e7b] text-white font-bold py-3 px-5 rounded-lg w-full transition-colors duration-300">
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-sm font-medium text-[#42325b] mt-2">
              Email submitted successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
