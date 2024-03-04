import React, { useState } from "react";

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div>
      <div className=" font-palanquin text-secondary lg:text-5xl text-3xl capitalize">
        <h1 className="  ">Know what you dealing with</h1>
        <p>Know Who we Are!</p>
      </div>
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 text-primary">
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-one border border-b-0  rounded-t-xl   hover:bg-blue-100 dark:hover:bg-primary gap-3 ${
              activeAccordion === 1 ? "bg-blue-100 dark:bg-gray-800" : ""
            }`}
            onClick={() => toggleAccordion(1)}
            aria-expanded={activeAccordion === 1}
            aria-controls="accordion-color-body-1">
            <span className="text-2xl">What is Joytown?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${
                activeAccordion === 1 ? "rotate-0" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
            activeAccordion === 1 ? "block" : "hidden"
          }`}
          aria-labelledby="accordion-color-heading-1">
          <div className="p-5 border border-b-0 ">
            <p className="mb-2 text-secondary">
              Joytown is your friendly next neighbour gamestop!
            </p>
          </div>
        </div>
        <h2 id="accordion-color-heading-2">
          <button
            type="button"
            className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-one border border-b-0  rounded-t-xl   hover:bg-blue-100 dark:hover:bg-primary gap-3 ${
              activeAccordion === 2 ? "bg-blue-100 dark:bg-gray-800" : ""
            }`}
            onClick={() => toggleAccordion(2)}
            aria-expanded={activeAccordion === 2}
            aria-controls="accordion-color-body-1">
            <span className="text-2xl">What do we sell?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 rotate-180 shrink-0 ${
                activeAccordion === 2 ? "rotate-0" : ""
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-2"
          className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 ${
            activeAccordion === 2 ? "block" : "hidden"
          }`}
          aria-labelledby="accordion-color-heading-1">
          <div className="p-5 border border-b-0 ">
            <p className="mb-2 text-secondary">
              Any games you want any games you like we have it all!
            </p>
          </div>
        </div>

        {/* Repeat the above structure for other accordion items */}
      </div>
    </div>
  );
};

export default Accordion;
