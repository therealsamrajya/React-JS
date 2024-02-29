import React from "react";

const plans = [
  {
    name: "Standard Plan",
    features: [
      "Access to 2 games per day",
      "No Premium Guides",
      "Integration help",
    ],
    cost: "4/month",
  },
  {
    name: "Premium Plan",
    features: [
      "Access to 5 games per day",
      " Premium Guides",
      "Integration help",
      "Early Access",
      "Exclusive NewsLetter",
    ],
    cost: "10/month",
  },
  {
    name: "Ultra Plan",
    features: [
      "Access to 7 games per day",
      " Premium Guides",
      "Integration help",
      "Early Access",
      "Exclusive NewsLetter",
    ],
    cost: "12/month",
  },
];

const PlanCard = ({ plan }) => {
  return (
    <div className="w-full max-w-sm p-4 bg-primary border border-gray-200 rounded-lg shadow sm:p-8 mx-auto sm:w-full ">
      <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {plan.name}
      </h5>
      <div className="flex items-baseline text-gray-900 dark:text-white">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">
          {plan.cost}
        </span>
        <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
          /month
        </span>
      </div>
      <ul role="list" className="flex-grow space-y-5 my-7">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">
          Choose plan
        </button>
      </div>
    </div>
  );
};

const PlanCards = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-start">
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PlanCards;
