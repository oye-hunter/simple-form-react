import React, { useEffect } from "react";
import "./Form.css";

const PersonalDetailsForm = ({ setSteps, steps }) => {
  useEffect(() => {
    const element1 = document.getElementById("check1");
    element1.classList.add("check-active");
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    const whatsapp = document.getElementById("whatsapp").value;
    const isPakistaniNumber = /^((\+92)|(0))3[0-9]{2}-?[0-9]{7}$/.test(
      whatsapp
    );

    if (!isPakistaniNumber) {
      alert("Please enter a valid Pakistani WhatsApp number.");
      return;
    } else {
      setSteps(steps + 1);
    }
  };
  return (
    <div className="main-container">
      <form onSubmit={handleNext}>
        <div
          className="form form1"
          style={{ paddingBottom: "20px", paddingTop: "20px" }}
        >
          <div className="apply-for">
            <label style={{ marginRight: "25px" }}>Apply For</label>
          </div>
          <div className="apply-for">
            <input
              className="input-radio"
              type="radio"
              name="apply-for"
              id=""
              required
            />
            <label className="label-radio">Director</label>
          </div>
          <div className="apply-for">
            <input
              className="input-radio"
              type="radio"
              name="apply-for"
              id=""
            />
            <label className="label-radio">Ambassador</label>
          </div>
        </div>
        <div className="form">
          <label htmlFor="">First Name</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="firstName"
            placeholder="Enter your first name"
            required
          />
          <br />
          <label htmlFor="">Email</label>
          <br />
          <input
            className="input-field"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <label htmlFor="">WhatsApp Number</label>
          <br />
          <input
            className="input-field"
            type="text"
            name="whatsapp"
            placeholder="Enter your WhatsApp number"
            id="whatsapp"
            required
          />
          <br />
          <div className="form2">
            <div>
              <label style={{ marginRight: "30px" }}>Gender</label>
            </div>
            <div>
              <input
                className="input-radio"
                type="radio"
                name="gender"
                required
              />
              <label className="label-radio">Male</label>
            </div>
            <div>
              <input className="input-radio" type="radio" name="gender" />
              <label className="label-radio">Female</label>
            </div>
            <div>
              <input className="input-radio" type="radio" name="gender" />
              <label className="label-radio">Others</label>
            </div>
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
