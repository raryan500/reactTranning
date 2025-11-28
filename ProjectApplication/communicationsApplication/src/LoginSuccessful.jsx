

import React from "react";
import { useLocation } from "react-router-dom";
import FireworksContainer from "./FireworksContainer";
import RootLayout from "./Layout";



export default function LoginSuccessful() {
  const { state } = useLocation();

  return (
    
     <RootLayout>
         <FireworksContainer />
    <div className="container text-center mt-5">
        
      <h2>Login Successful</h2>

<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Image" width="200" />

      <h3>Welcome, {state?.fullName}</h3>
      <p>Email: {state?.email}</p>
    </div>
    </RootLayout>
  );
}
