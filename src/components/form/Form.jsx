import React, { useState } from "react";
import { redClock, razor } from "../../assets";
import FormData from "./FormData";
//data for subscription plans (data stored as json file)
import subscriptionData from "../../data.json";

const Form = () => {
  // State for storing the selected plan
  const [selectedPrice, setSelectedPrice] = useState(null);
  // State for storing the discount price
  const [discountPrice, setDiscountPrice] = useState(0);
  // Function for handling plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPrice(plan);
    // Calculate the discount based on the selected plan
    const discount = 18500 - plan.total;
    // Set the discount price
    setDiscountPrice(discount > 0 ? discount : 0);
  };

  return (
    <>
      <div className="w-full lg:mt-10 mt-[100px]  bg-white rounded-lg p-4">
        <div className="flex justify-around mb-2">
          <div className="text-center">
            <button className="py-1 px-3 text-white rounded-full bg-[#0096FF]">
              1
            </button>
            <p>Sign Up</p>
          </div>
          <div className="text-center">
            <button className="py-1 px-3 text-white rounded-full bg-[#0096FF]">
              2
            </button>
            <p>Subscribe</p>
          </div>
        </div>
        <h3 className="text-center font-semibold mb-2">
          Select your subcription plan
        </h3>

        <FormData
          subscriptionData={subscriptionData.subscription}
          onPlanSelect={handlePlanSelect}
        />
        <hr className="my-4" />
        <div className="flex items-center justify-between mx-4">
          <p className="text-[14px] font-normal">subscription fee</p>
          <span className="text-[14px] font-medium">₹18500</span>
        </div>
        <div className="rounded-lg border-2 border-red-500 bg-red-200 py-2 px-4 my-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-[14px] text-red-500">
              Limited time offer
            </p>
            <span className="text-[14px] font-semibold">-₹{discountPrice}</span>
          </div>
          <div className="flex">
            <img className="w-4 h-4" src={redClock} alt="" />
            <p className="font-normal text-[14px] text-red-500 ml-2">
              Offer valid till 25th March 2023
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mx-4">
          <p className="text-[14px] font-normal">
            <span className="font-semibold">Total</span> (incl. of 18% GST)
          </p>
          <span className="text-[22px] font-bold">
            ₹{selectedPrice ? selectedPrice.total : "0"}
          </span>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 py-2">
          <button className="w-full px-[20px] py-[10px] border-2 border-red-500 font-bold text-[14px] text-red-500">
            CANCEL
          </button>
          <button className="w-full px-[20px] py-[10px] bg-[#47BA68] border-2 border-[#47BA68] font-bold text-[14px] text-white">
            PROCEED TO PAY
          </button>
        </div>
        <img src={razor} alt="payment" />
      </div>
    </>
  );
};

export default Form;
