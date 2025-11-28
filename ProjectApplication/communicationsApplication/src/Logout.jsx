import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "./Layout";

export default function Logout() {
  const navigate = useNavigate();
  const [showModal,setShowModal] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("logedinUser"); // remove login flag
   localStorage.removeItem("userName");
    setShowModal(false)
    navigate("/"); // go to Welcome or Login
  };

  const handleCancel = () => {
    navigate(-1); // go back to previous page
  };

  return (<>
   {/* <RootLayout></RootLayout> */}
     
      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ background: "rgba(116, 105, 240, 0.5)" }}
        >
          <div
            className="bg-white p-3 rounded shadow"
            style={{ width: "300px", border: "1px solid black" }}
          >
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="m-0 fw-bold">Confirm Logout</h6>
              <button className="btn-close" onClick={handleCancel}></button>
            </div>

            <div className="text-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png"
                width="40"
                alt="logout-icon"
              />
              <p className="mt-2 fw-semibold">Are you sure?</p>
            </div>

            <div className="d-flex justify-content-around">
              <button className="btn btn-primary px-4" onClick={handleLogout}>
                OK
              </button>

              <button className="btn btn-secondary px-4" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
