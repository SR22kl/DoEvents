"use client";
import { useState } from "react";

const BookEvent = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };
  return (
    <>
      <div id="book-event">
        {submitted ? (
          <p>Thank you for booking!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email Address</label>
              <input
                className="w-full border border-gray-600 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-teal-400"
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              className="transition-all duration-300 ease-in-out bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default BookEvent;
