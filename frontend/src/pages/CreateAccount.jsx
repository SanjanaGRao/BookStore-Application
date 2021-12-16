import React, { useState } from "react";
import img from "../assets/book-store-facade-vector-illustration-260nw-1926317108.jpg";
import userPost from "../service/userIntegration";
import "../styles/userRegistration.css";
import {
  nameValidation,
  emailValidation,
  contactValidation,
  passwordValidation,
} from "../config/validation";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstNameNotValid, setFirstNameNotValid] = useState(false);
  const [lastNameNotValid, setLastNameNotValid] = useState(false);
  const [emailNotValid, setEmailNotValid] = useState(false);
  const [contactNoNotValid, setContactNoNotValid] = useState(false);
  const [passwordNotValid, setPasswordNotValid] = useState(false);
  const [passwordConfirmationNotValid, setPasswordConfirmationNotValid] =
    useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [accountCreated, setAccountCreated] = useState(false);

  let fN = firstName;
  let lN = lastName;
  let eM = email;
  let mobNo = contactNumber;
  let pswd = password;
  const dataToPass = {
    firstName: fN,
    lastName: lN,
    contactNumber: mobNo,
    email: eM,
    password: pswd,
  };

  var handleSubmit = (event) => {
    let error = false;
    event.preventDefault();
    if (!nameValidation.test(firstName)) {
      setFirstNameNotValid(true);
      error = true;
    }
    if (!nameValidation.test(lastName)) {
      setLastNameNotValid(true);
      error = true;
    }
    if (!contactValidation.test(contactNumber)) {
      setContactNoNotValid(true);
      error = true;
    }
    if (!emailValidation.test(email)) {
      setEmailNotValid(true);
      error = true;
    }
    if (!passwordValidation.test(password)) {
      setPasswordNotValid(true);
      error = true;
    }
    if (password !== passwordConfirmation) {
      setPasswordConfirmationNotValid(true);
      error = true;
    }
    if (error) {
      console.log(
        "Account could not be created. Please follow the rules mentioned."
      );
    } else {
      userPost("users", dataToPass)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("firstName", firstName);
            localStorage.setItem("lastName", lastName);
            setAccountCreated(true);
            alert("Account created successfully");
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  const handleClickShowPasswords = () => {
    setShowPassword(!showPassword);
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  return (
    <div className="mainBox">
      <div className="createUser">
        <div className="formCenter">
          <form className="formFields">
            <div className="formField">
              <span className="mainLogo">Bookstore</span>
              <h3>Create an Account</h3>
              <label className="formFieldLabel" htmlFor="name">
                First Name
              </label>
              <input
                required
                type="text"
                id="name"
                className="formFieldInput"
                placeholder="Enter your first name*"
                name="name"
                error={firstNameNotValid}
                helperText={firstNameNotValid ? "Invalid First Name" : ""}
                onChange={(event) => {
                  setFirstName(event.target.value);
                  if (firstNameNotValid) {
                    setFirstNameNotValid(false);
                  }
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
                Last Name
              </label>
              <input
                required
                type="text"
                id="lastName"
                className="formFieldInput"
                placeholder="Enter your last name*"
                name="lastName"
                error={lastNameNotValid}
                helperText={lastNameNotValid ? "Invalid Last Name" : ""}
                onChange={(event) => {
                  setLastName(event.target.value);
                  if (lastNameNotValid) {
                    setLastNameNotValid(false);
                  }
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
                Contact Number
              </label>
              <input
                required
                type="text"
                id="contactNumber"
                className="formFieldInput"
                placeholder="Enter your mobile number*"
                name="name"
                error={contactNoNotValid}
                helperText={contactNoNotValid ? "Invalid Last Name" : ""}
                onChange={(event) => {
                  setContactNumber(event.target.value);
                  if (contactNoNotValid) {
                    setContactNoNotValid(false);
                  }
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                required
                type="email"
                id="email"
                className="formFieldInput"
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
            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password
              </label>
              <input
                required
                type={showPassword ? "text" : "password"}
                id="password"
                className="formFieldInput"
                placeholder="Enter your password*"
                name="password"
                error={passwordNotValid}
                helperText={
                  passwordNotValid
                    ? "Invalid password"
                    : "Use 8 or more characters with a mix of letters, numbers & symbols"
                }
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (passwordNotValid) {
                    setPasswordNotValid(false);
                  }
                }}
              />
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="password">
                Password Confirmation
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="formFieldInput"
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
            <div className="formField">
              <input
                type="checkbox"
                id="showPassword"
                name="showPassword"
                value="Show Password"
                onClick={handleClickShowPasswords}
              />
              <label
                for="showPassword"
                style={{ fontSize: "0.75em", paddingleft: "5px" }}
              >
                {" "}
                Show Passwords{" "}
              </label>
            </div>
            <br />
            <div className="formField">
              <button
                className="formFieldButton"
                type="submit"
                onClick={handleSubmit}
              >
                Sign Up
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/" className="formFieldLink">
                Already have an account? Sign In
              </Link>
            </div>
            {accountCreated ? (window.location = "/") : null}
          </form>
        </div>
        <div class="imgBx" align="right" style={{ paddingRight: "3em" }}>
          <img
            src={img}
            height={350}
            width={300}
            style={{ verticalAlign: "middle" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}