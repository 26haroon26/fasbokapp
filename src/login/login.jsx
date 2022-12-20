import React, { useState } from "react";
import "../signup/signup.css";
const Login = () => {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const LoginSubmit = (e) => {e.preventDefault(); console.log(Email,Password);};
  return (
    <div>
      <p id="alertlogin"></p>
      <fieldset>
        <legend>Login Form</legend>
        <form onSubmit={LoginSubmit}>
          <label htmlFor="login_email">Email:</label>
          <br />
          <input
            type="email"
            id="login_email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Email"
          />
          <br />
          <label htmlFor="login_password">Password :</label>
          <br />
          <input
            type="password"
            id="login_password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="password"
          />
          <br />
          <br />
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      </fieldset>
    </div>
  );
};
export default Login;
