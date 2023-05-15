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
          <div className="flex items-center rounded-lg border-2 border-black p-2 mt-2">
            <input
              id={data.id}
              disabled={data.disabled}
              name="plan"
              value="12_months_subscription"
              type="radio"
              className="h-4 w-4 border-2 border-red text-indigo-600 focus:ring-green"
              checked={selectedPrice === data}
              onChange={() => handlePlanSelect(data)}
            />
            <label
              htmlFor={data.id}
              className="ml-3 min-w-0 flex-1 text-black text-[14px] font-semibold"
            >
              {data.plan}
            </label>
            <div className="text-right">
              <p className="text-[12px]">
                Total
                <span className="text-[14px] font-semibold">₹{data.total}</span>
              </p>
              <p className="text-[12px]">
                ₹{data.monthly}
                <span className="text-[10px]"> /mo</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FormData;
