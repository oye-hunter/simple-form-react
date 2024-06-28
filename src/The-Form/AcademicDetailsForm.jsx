import React, { useEffect } from "react";

const AcademicDetailsForm = ({ setSteps, steps }) => {
  useEffect(() => {
    const element1 = document.getElementById("check2");
    element1.classList.add("check-active");

    const element2 = document.getElementsByClassName("steps-nav-line");
    element2[0].classList.add("steps-nav-line-active");

    const element3 = document.getElementById("check3");
    if(element3.classList.contains("check-active")){
      element3.classList.remove("check-active");
    }

    const element4 = document.getElementsByClassName("steps-nav-line");
    if(element4[1].classList.contains("steps-nav-line-active")){
    element4[1].classList.remove("steps-nav-line-active");
    }

    const element5 = document.getElementById("check4");
    if(element5.classList.contains("check-active")){
      element5.classList.remove("check-active");
    }

    const element6 = document.getElementsByClassName("steps-nav-line");
    if(element6[2].classList.contains("steps-nav-line-active")){
    element6[2].classList.remove("steps-nav-line-active");
    }
  }, []);

  const handleNext = () => {
    setSteps(steps + 1);
  };
  const handleBack = () => {
    setSteps(steps - 1);
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
        <button type="submit" onClick={handleBack}>Back</button>
      </form>
    </div>
  );
};

export default AcademicDetailsForm;
