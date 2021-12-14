import React, { useState } from "react";
import "../styles/userRegistration.css";
import { emailValidation } from "../config/validation";
import userPost from "../service/userIntegration";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [emailNotValid, setEmailNotValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "" || !emailValidation.test(email)) {
      setEmailNotValid(true);
      alert("An error occured.");
    }
    else {
      userPost("users/forgot", {
        email: email,
      });
      alert("Email Successfully Sent.");
    }
  };

  const handleBackButton = () => {
      window.location="/";
  }

  return (
    <div className="mainBoxForget">
      <div className="forget">
        <form className="formFields">
          <div className="formFieldForget" align="center">
            <span className="mainLogo">Bookstore</span>
            <h3>Forgot Password</h3>
          </div>
          <br />
          <div className="formFieldForget" align="center">
            <label className="formFieldLabelForget" htmlFor="email">
              Enter your EMail Address:
            </label>
            <br />
            <input
              required
              type="email"
              id="email"
              className="formFieldInputForget"
              placeholder="Enter your email*"
              name="email"
              error={emailNotValid}
              helperText={
                emailNotValid
                  ? "Invalid Email"
                  : "Your mail can consist of letters, numbers and periods"
              }
              onChange={(event) => {
                setEmail(event.target.value);
                if (emailNotValid) {
                  setEmailNotValid(false);
                }
              }}
            />
          </div>
          <br /><br />
          <div className="buttonss">
          <div className="formFieldForget" align="left">
            <button
              className="formFieldButtonForget"
              type="submit"
              onClick={handleSubmit}
            >
              Next
            </button>
          </div>
          <div className="formFieldForget2" align="right">
            <button
              className="formFieldButtonForget"
              type="button"
              onClick={handleBackButton}
            >
                Back
            </button>
          </div>
        </div>
        </form>
      </div>
      </div>
  );
}