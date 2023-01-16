import React from "react";
import { Form } from "react-router-dom";

const LoginPage = () => {
  return (
      <form className="login">
        <h1>Login</h1>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" placeholder="username"></input>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="password"></input>
        <button>Login</button>
      </form>
    
  );
};

export default LoginPage;
