import React from "react";
import { Button } from "../../components";
import { testImg } from "../../assets";

const Home = () => {
  return (
    <div className=" w-full h-[200vh]  ">
      <div className="bg-primary text-tertiary w-full flex items-center gap-x-3 justify-center p-3">
        <p className="font-semibold">
          Salesforce Innovation Day Broadcast: March 14. Be inspired by local
          Trailblazer from L’Oréal.
        </p>
        <Button
          value="Register Now"
          className="text-white underline font-medium hover:text-green-950"
        />
      </div>
      <div className="p-12 ">
        <h3 className="lg:text-5xl  font-semibold font-sans  text-4xl">
          Try Salesforce Starter Suite
          <br className="hidden lg:block " />
          for free.
        </h3>
        <p className="text-2xl  whitespace-pre-line">
          Unite marketing, sales, and service in a single app. Try Salesforce
          Starter Suite today. There's nothing to install. No credit card
          required.
        </p>
      </div>
    </div>
  );
};

export default Home;
