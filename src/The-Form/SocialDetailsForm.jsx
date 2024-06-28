import React, { useEffect } from "react";

const SocialDetailsForm = ({ setSteps, steps }) => {
  useEffect(() => {
    const check1Element = document.getElementById("check3");
    check1Element.classList.add("check-active");
    const element2 = document.getElementsByClassName("steps-nav-line");
    element2[1].classList.add("steps-nav-line-active");


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
          <label>Facebook Link</label>
          <br />
          <input className="input-field" type="url" placeholder="Optional" />
          <br />
          <label>Instagram Link</label>
          <br />
          <input className="input-field" type="url" placeholder="Optional" />
          <br />
          <label>LinkedIn Link</label>
          <br />
          <input
            className="input-field input-last"
            type="url"
            placeholder="Optional"
          />
          <br />
        </div>
        <button type="submit">Next</button>
        <button type="submit" onClick={handleBack}>Back</button>
      </form>
    </div>
  );
};

export default SocialDetailsForm;
