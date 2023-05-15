import React from "react";
import Navbar from "../components/header/Navbar";
import Form from "../components/form/Form";
import Features from "../components/features/Features";

const Payment = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#080C14] to-[#2C3548]">
        <div className="lg:h-screen h-full">
          <Navbar />
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="w-full lg:flex sm:block gap-4">
              <div className="lg:w-2/3 sm:w-3/4 w-[90%] mx-auto">
                <Features />
              </div>
              <div className="lg:w-1/3 sm:w-3/4 w-[90%] mx-auto">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
