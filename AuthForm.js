import React, { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        {/* Toggle buttons */}
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            SignUp
          </button>
        </div>

        {/* Conditional Rendering */}
        {isLogin ? (
          <div className="form">
            <h2>Login Form</h2>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <a href="#">Forgot password</a>
            <button>Login</button>
            <p>Not a Member?</p>
            <a href="#" onClick={() => setIsLogin(false)}>SignUp</a>
          </div>
        ) : (
          <div className="form">
            <h2>SignUp Form</h2>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <input type="password" placeholder="Confirm password" />
            <button>SignUp</button>
            <p>Already a Member?</p>
            <a href="#" onClick={() => setIsLogin(true)}>Login</a>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
