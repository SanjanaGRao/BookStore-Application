import React, { useState } from "react";
import "../styles/userRegistration.css";
import { passwordValidation } from "../config/validation";
import userPost from "../service/userIntegration";
import { useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [passwordNotValid, setPasswordNotValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordConfirmationNotValid, setPasswordConfirmationNotValid] =
    React.useState(false);
  const { token } = useParams();

  const handleClickShowPasswords = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === "" || !passwordValidation.test(password)) {
      setPasswordNotValid(true);
    }
    if (password !== passwordConfirmation) {
      setPasswordConfirmationNotValid(true);
      alert("Password Mismatch.");
    } else {
      userPost(`users/${window.location.pathname}`, {
        password: password,
        token: token,
      });
      alert("Password Reset Successful.");
      window.location = "/";
    }
  };

  return (
    <div className="mainBoxReset">
      <div className="reset">
        <div className="formCenter">
          <form className="formFields">
            <div className="formFieldReset" align="center">
              <span className="mainLogo">Bookstore</span>
              <h3>Reset your Password</h3>
            </div>
            <div className="formFieldReset" align="center">
              <label className="formFieldLabelReset" htmlFor="password">
                Enter your new Password:
              </label>
              <br />
              <TextField
                required
                type={showPassword ? "text" : "password"}
                id="password"
                variant="standard"
                className="formFieldInputReset"
                placeholder="Enter your password*"
                name="password"
                error={passwordNotValid}
                helperText={
                  passwordNotValid
                    ? "Invalid password"
                    : ""
                }
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (passwordNotValid) {
                    setPasswordNotValid(false);
                  }
                }}
              />
            </div>
            <br />
            <div className="formFieldReset" align="center">
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                variant="standard"
                className="formFieldInputReset"
                placeholder="Re-type your password*"
                name="confirmPassword"
                error={passwordConfirmationNotValid}
                helperText={
                  passwordConfirmationNotValid ? "Password does not match" : ""
                }
                onChange={(event) => {
                  setPasswordConfirmation(event.target.value);
                  if (passwordConfirmationNotValid) {
                    setPasswordConfirmationNotValid(false);
                  }
                }}
              />
            </div>
            <br />
            <div className="formFieldReset" align="center">
              <input
                type="checkbox"
                id="showPassword"
                name="showPassword"
                value="Show Password"
                onClick={handleClickShowPasswords}
              />
              <label
                for="showPassword"
                style={{ fontSize: "10px", paddingleft: "5px" }}
              >
                {" "}
                Show Passwords{" "}
              </label>
            </div>
            <br />
            <div className="formFieldReset" align="center">
              <button
                className="formFieldButton"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <br /> <br />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
