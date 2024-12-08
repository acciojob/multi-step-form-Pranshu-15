import React from "react";

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Step 1: User Details</h2>
          <input
            id="first_name"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            id="last_name"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Car Details</h2>
          <input
            id="model"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />
          <input
            id="car_price"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Payment Info</h2>
          <input
            id="card_info"
            placeholder="Card Info"
            value={formData.card_info}
            onChange={handleChange}
          />
          <input
            id="expiry_date"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>
      )}

      {/* Navigation Buttons */}
      {step > 1 && <button onClick={prevStep}>Previous</button>}
      {step < 3 && <button onClick={nextStep}>Next</button>}
      {step === 3 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  );
};

export default Step;
