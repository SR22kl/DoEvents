"use client";
import { createBooking } from "@/lib/actions/booking.action";
import { useState } from "react";
import posthog from "posthog-js";

const BookEvent = ({ eventId, slug }: { eventId: string; slug: string }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { success } = await createBooking({ eventId, slug, email });

    if (success) {
      setSubmitted(true);
      posthog.capture("Event Booked", { eventId, slug, email });
    } else {
      console.error("Booking failed");
      posthog.captureException("Booking failed", { eventId, slug, email });
    }
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
