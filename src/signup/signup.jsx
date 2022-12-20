import React from "react";
import { useState } from "react";
import "./signup.css";
const SignUp = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [UserName, setUserName] = useState();

  // const [userName,email,password]=formData;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(Email);
    console.log(UserName);
    console.log(Password);
  };
  return (
    <div>
      <p id="alertsign"></p>
      <fieldset id="sign">
        <legend id="leg">
          <b>Sign Up Form </b>
        </legend>
        <form onSubmit={submitHandler}>
          <br />
          <label htmlFor="firstname">Name :</label>
          <br />
          <input
            type="text"
            id="firstname"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="name"
          />
          <br />

          <label htmlFor="email">Email :</label>
          <br />
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
            placeholder="Email"
          />
          <br />

          <label htmlFor="password">Password :</label>
          <br />
          <div id="input">
            <i
            // onclick="eye()" id="icon" class="fa-solid fa-eye "
            ></i>
            <input
              type="password"
              id="password"
              required
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
          </div>
          <div>
            Already have an account <a href="login.html">Click..</a>
            <br />
            <br />
            <input type="submit" value="Sign Up" />
            <br />
          </div>
        </form>
      </fieldset>
    </div>
  );
};
export default SignUp;
