import React, { useEffect } from "react";

const ProfessionalDetailsForm = ({ setSteps, steps }) => {
  useEffect(() => {
    const check1Element = document.getElementById("check4");
    check1Element.classList.add("check-active");
    const element2 = document.getElementsByClassName("steps-nav-line");
    element2[2].classList.add("steps-nav-line-active");
  }, []);

  const handleNext = () => {
    setSteps(steps + 1);
  };

  return (
    <div className="main-container">
      <form onSubmit={handleNext}>
        <div className="form">
          <label className="checkbox-head">Select Your Best Skills</label>
          <br />
          <div className="checkbox-container">
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Leadership</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Communication</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Teamwork</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Problem Solving</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Creativity</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Technical Skills</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Management</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Flexibility</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Time Management</label>
            </div>
            <div>
              <input type="checkbox" className="input-checkbox" />
              <label className="label-checkbox">Leadership</label>
            </div>
          </div>
        </div>
        <button type="">Submit</button>
      </form>
    </div>
  );
};

export default ProfessionalDetailsForm;
