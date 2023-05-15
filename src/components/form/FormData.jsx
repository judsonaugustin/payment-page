import React, { useState } from "react";

const FormData = (props) => {
  // Destructuring props
  const { subscriptionData, onPlanSelect } = props;
  //state for storing selected plan
  const [selectedPrice, setSelectedPrice] = useState(null);
  //function for handling plan selection
  const handlePlanSelect = (plan) => {
    setSelectedPrice(plan); //setting the selected plan
    onPlanSelect(plan); //calling the function passed as props
  };
  return (
    <div>
      {subscriptionData.map((data) => (
        <div key={data.id}>
          <div className="relative">
            <div
              className={`absolute top-0 start-0 bg-green-500 text-white text-[10px] font-semibold px-4 rounded-b ml-10 ${
                data.disabled ? "bg-red-500 opacity-100" : ""
              }`}
            >
              <span>{data.badge}</span>
            </div>

            <div
              className={`rounded-lg border-2 border-gray-400  mt-2 ${
                selectedPrice === data ? "border-green-500 bg-green-100" : ""
              } ${data.disabled ? "opacity-50" : ""}`}
            >
              <div className="flex items-center p-2">
                <input
                  className="cursor-pointer"
                  id={data.id}
                  disabled={data.disabled}
                  name="plan"
                  value="12_months_subscription"
                  type="radio"
                  checked={selectedPrice === data}
                  onChange={() => handlePlanSelect(data)}
                />
                <label
                  htmlFor={data.id}
                  className="ml-3 min-w-0 flex-1 text-black text-[14px] font-semibold cursor-pointer"
                >
                  {data.plan}
                </label>
                <div className="text-right">
                  <p className="text-[12px]">
                    Total
                    <span className="text-[14px] font-semibold ml-2">
                      ₹{data.total}
                    </span>
                  </p>
                  <p className="text-[12px]">
                    ₹{data.monthly}
                    <span className="text-[10px]"> /mo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormData;
