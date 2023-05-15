import React from "react";
import Navbar from "../components/header/Navbar";
import Form from "../components/form/Form";
// import { bgImg } from "../assets";
import Features from "../components/features/Features";

const Payment = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#080C14] to-[#2C3548]">
        <div
          className="h-screen"
          // style={{
          //   backgroundImage: `url(${bgImg})`,
          //   backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          <Navbar />
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="w-full lg:flex sm:block gap-4">
              <div className="w-2/3">
                <Features />
              </div>
              <div className="w-1/3">
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
