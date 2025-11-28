import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "./Layout";

export default function Register() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      console.log("Registration Response:", data);

      if (response.ok) {
       // alert("Login successful!");
        navigate("/a/users");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };
    

    return (
         <RootLayout>
        {/* <div className="container d-flex flex-column justify-content-center align-items-center vh-100"> */}
            <h2 className="fw-bold mb-4">Register</h2>

            <div className="w-100" style={{ maxWidth: "350px" }}>

                {/* Full Name */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        className="form-control"
                        value={user.fullName}
                        onChange={handleChange}
                    />
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={user.password}
                        onChange={handleChange}
                    />
                </div>


                <div className="mb-4">
                    <label className="form-label fw-semibold">Confirm Password</label>
                    <input type="password" name="confirmPassword" className="form-control" value={user.confirmPassword} onChange={handleChange} />
                </div>


                <div className="text-center">
                    <button className="btn btn btn-info px-5 fw-bold" onClick={handleRegister}>
                        Register
                    </button>
                </div>
            </div>
        {/* </div> */}
        </RootLayout>
    );
}
