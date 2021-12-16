import React from "react";
import img from "../assets/book-store-facade-vector-illustration-260nw-1926317108.jpg";
import "../styles/userRegistration.css";
import { Link, Redirect } from "react-router-dom";
import userPost from "../service/userIntegration";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailNotValid, setEmailNotValid] = React.useState(false);
  const [passwordNotValid, setPasswordNotValid] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  let Em = email;
  let Pwd = password;
  const datas = { email: Em, password: Pwd };

  const handleSubmit = (event) => {
    let error = false;
    event.preventDefault();
    if (email === "") {
      setEmailNotValid(true);
      error = true;
    }
    if (password === "") {
      setPasswordNotValid(true);
      error = true;
    }
    if (error) {
      console.log("Cannot Log In.");
      alert("Login Unsuccessful.");
    } else {
      console.log(datas);
      userPost("users/login", datas)
        .then((res) => {
          if (res.data.status === 200) {
            localStorage.setItem("emailAvatar", email);
            setSuccess(true);
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  const handleClickShowPasswords = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mainBoxLogin">
      <div className="login">
        <div className="formCenter">
          <form className="formFields">
            <div className="formField">
              <span className="mainLogo">Bookstore</span>
              <h3>Sign In to your Account</h3>
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                E-Mail Address
              </label>
              <input
                required
                type="email"
                id="email"
                className="formFieldInputLogin"
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
                className="formFieldInputLogin"
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
                style={{ fontSize: "10px", paddingleft: "5px" }}
              >
                {" "}
                Show Password{" "}
              </label>
              <Link
                to="/forgot"
                className="formField"
                style={{ fontSize: "10px", paddingLeft: "5em", color: "blue" }}
              >
                Forgot Password?
              </Link>
            </div>
            <br />
            <div className="formField" align="center">
              <button
                className="formFieldButton"
                type="submit"
                onClick={handleSubmit}
              >
                Sign In
              </button>
              <br /> <br />
              <Link to="/create" className="formFieldLink">
                New here? Create an account
              </Link>
            </div>
            {success ? <Redirect to="/dashboard" /> : null}
          </form>
        </div>
        <div class="imgBx" align="right" style={{ paddingLeft: "2em" }}>
          <img
            src={img}
            height={300}
            width={250}
            style={{ verticalAlign: "middle" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
