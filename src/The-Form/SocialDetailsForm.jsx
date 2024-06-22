import React, { useEffect } from "react";

const SocialDetailsForm = ({ setSteps, steps }) => {
  useEffect(() => {
    const check1Element = document.getElementById("check3");
    check1Element.classList.add("check-active");
    const element2 = document.getElementsByClassName("steps-nav-line");
    element2[1].classList.add("steps-nav-line-active");
  }, []);

  const handleNext = () => {
    setSteps(steps + 1);
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
      </form>
    </div>
  );
};

export default SocialDetailsForm;
