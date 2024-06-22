import React, { useEffect } from "react";

const AcademicDetailsForm = ({ setSteps, steps }) => {
  useEffect(() => {
    const check1Element = document.getElementById("check2");
    check1Element.classList.add("check-active");
    const element2 = document.getElementsByClassName("steps-nav-line");
    element2[0].classList.add("steps-nav-line-active");
  }, []);

  const handleNext = () => {
    setSteps(steps + 1);
  };
  return (
    <div className="main-container">
      <form onSubmit={handleNext}>
        <div className="form">
          <label>Institute Name</label>
          <br />
          <input
            className="input-field"
            type="text"
            placeholder="Enter your institute name"
            required
          />
          <br />
          <label>Field of Study</label>
          <br />
          <input
            className="input-field"
            type="text"
            placeholder="Enter your field of study"
            required
          />
          <br />
          <label htmlFor="">Year of Study</label>
          <br />
          <input
            className="input-field"
            type="text"
            placeholder="Enter your year of study"
            required
          />
          <br />
          <label htmlFor="">Choose Region</label>
          <br />
          <input className="input-field input-last" type="text" required />
          <br />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default AcademicDetailsForm;
