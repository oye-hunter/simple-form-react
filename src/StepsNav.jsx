import React from "react";
import "./StepsNav.css";

const StepsNav = () => {
  return (
    <div className="steps-nav-main-container">
      <div className="steps-nav-container">
        <div className="steps-nav-checkmark">
          <div id="check1" className="check" />
        </div>
        <div className="steps-nav-name">Personal Details</div>
        <div className="steps-nav-line"></div>
      </div>
      <div className="steps-nav-container">
        <div className="steps-nav-checkmark">
          <div id="check2" className="check" />
        </div>
        <div className="steps-nav-name">Academics Details</div>
        <div className="steps-nav-line"></div>
      </div>
      <div className="steps-nav-container">
        <div className="steps-nav-checkmark">
          <div id="check3" className="check" />
        </div>
        <div className="steps-nav-name">Social Details</div>
        <div className="steps-nav-line"></div>
      </div>
      <div className="steps-nav-container">
        <div className="steps-nav-checkmark">
          <div id="check4" className="check" />
        </div>
        <div className="steps-nav-name">Professional Details</div>
      </div>
    </div>
  );
};

export default StepsNav;
