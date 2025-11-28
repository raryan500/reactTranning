import React from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "./Layout";

export default function Welcome() {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <RootLayout>
    {/* <div className="container d-flex flex-column justify-content-center align-items-center vh-100"
   > */}
      <h2 className="fw-bold mb-5">Welcome to Chatting App</h2>

      <div className="text-center mb-5">
        <h5 className="mb-3">Existing Users</h5>

        <button className="btn btn-info px-5 fw-bold" onClick={goToLogin}>
          Login
        </button>
      </div>

      <div className="text-center mb-5">
        <h5 className="mb-3">New Users</h5>

        <button className="btn btn-info px-5 fw-bold" onClick={goToRegister}>
          Register
        </button>
      </div>
    {/* </div> */}
    </RootLayout>
  );
}
