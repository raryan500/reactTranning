import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "./Layout";

export default function Login() {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (response.ok) {
       // alert("Login successful!");
        localStorage.setItem("logedinUser", "true");
         localStorage.setItem("userName", data.data.fullName);
        //navigate("/a");
        navigate("/a/login-success", {state: {
          fullName: data.data.fullName,
          email: data.data.email,
        } });
      } else {
        alert(data.message || "Login failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <RootLayout>
    {/* <div className="container d-flex flex-column justify-content-center align-items-center vh-100"> */}

      
      <h2 className="fw-bold mb-4">Login</h2>

      <div className="w-100" style={{ maxWidth: "350px" }}>
        
        
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input
            type="email"
            className="form-control"
           onChange={(e) => setEmail(e.target.value)}
          />
        </div>

      
        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>
          <input
            type="password"
            className="form-control"
             onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       
        <div className="text-center">
          <button className="btn btn-info px-5 fw-bold" onClick={handleLogin}>Login</button>
        </div>
      </div>
    {/* </div> */}
    </RootLayout>
  );
}
