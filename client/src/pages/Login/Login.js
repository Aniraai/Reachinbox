import React from "react";
import "./Login.css";
import Button from "../../components/Button/Button";
import logo from "../../assets/images/logo.png";
import googleIcon from "../../assets/images/google-icon.png";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const handleSuccess = (response) => {
    console.log("Login Successful:", response);
    localStorage.setItem("user", JSON.stringify(response));
    window.location.href = "/onebox"; // Ensure the path is lowercase and matches your route
  };

  const handleFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <img src={logo} alt="ReachInbox Logo" className="logo" />
      </header>
      <div className="login-box">
        <h2>Create a new account</h2>
        <GoogleOAuthProvider clientId="906484773858-jqa7h24eds1cn46u9qeicsk5102cp2tn.apps.googleusercontent.com">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleFailure}
            render={(renderProps) => (
              <button
                className="google-signup-btn"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <img src={googleIcon} alt="Google Icon" />
                Sign Up with Google
              </button>
            )}
          />
        </GoogleOAuthProvider>
        <br />
        <Button>Create an Account</Button>

        <p>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
      <footer className="login-footer">
        &copy; 2023 ReachInbox. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
