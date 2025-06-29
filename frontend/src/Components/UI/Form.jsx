import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMailData({ ...mailData, [name]: value });
  };

  const handleSendClick = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/send-mail', mailData); // Ensure correct URL
      console.log(response);
      toast.success("Mail Sent Successfully", {
        position: 'top-center'
      });
    } catch (error) {
      toast.error("Error Occurred while Sending Email", {
        position: 'top-center'
      });
      console.log("Error occurred", error);
    }
  };

  return (
    <>
      <ToastContainer />

      <form method='post' onSubmit={handleSendClick} className='bg-gray-100 p-6 shadow-2xl rounded-md '>
        <h3 className='text-2xl font-bold mb-2'>Send Message</h3>
        <div >
          <label className='font-semibold'>Name:</label><br />
          <input
            type="text"
            name="name"
            className='bg-gray-300 w-full py-1.5 rounded-sm'
            value={mailData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div ><label
          className='font-semibold'>Email:</label><br />
          <input
            type="email"
            name="email"
            className='bg-gray-300 w-full py-1.5'
            value={mailData.email}
            onChange={handleChange}
            required
          /></div>
        <br />

        <div >
          <label className='font-semibold'>Subject:</label><br />
          <input
            type="text"
            name="subject"
            className='bg-gray-300 w-full py-1.5'
            value={mailData.subject}
            onChange={handleChange}
            required
          />
        </div><br />

        <div >
          <label className='font-semibold'>Message:</label><br />
          <textarea
            name="message"
            className='bg-gray-300 w-full py-1.5'
            value={mailData.message}

            onChange={handleChange}
            required
          />
        </div><br />

        <button type="submit"
          className="w-full inline-block bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm md:text-base font-semibold transition duration-300 hover:bg-blue-700 hover:shadow-lg "
        >
          Send
        </button>
      </form>

    </>
  );
};
