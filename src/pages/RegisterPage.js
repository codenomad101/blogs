import React from "react";

const RegisterPage = () => {
  return (
      <form className="register">
        <h1>Register</h1>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" placeholder="username"></input>
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" placeholder="password"></input>
        <button>Register</button>
      </form>
  );
};

export default RegisterPage;
