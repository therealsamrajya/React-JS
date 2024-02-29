import React from "react";
import { testimonials1 } from "../assets/assets";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: testimonials1,
      feedback: "This is a wonderful product. I highly recommend it.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: testimonials1,
      feedback: "I am really impressed with the quality of this product.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: testimonials1,
      feedback: "Great customer service and fast delivery.",
    },
  ];

  return (
    <section className="p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-secondary uppercase">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-primary p-4 rounded-md shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg text-second font-bold text-center mb-2">
                {testimonial.name}
              </h3>
              <p className="text-second text-center">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
