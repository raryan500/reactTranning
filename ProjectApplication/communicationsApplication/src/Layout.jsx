import React from "react";

export default function RootLayout({ children }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/beautiful-illustration-with-smoke-colorful-background_265989-17893.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "40px",
          borderRadius: "20px",
          background: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
