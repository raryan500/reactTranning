import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function Nav() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);
  }, []);

  return (
    <>
      <nav
        className="d-flex justify-content-between align-items-center p-3"
        style={{ backgroundColor: "#fcba03", fontWeight: "bold" }}
      >
        {/* Left Links */}
        <div>
          <Link to="/a">Home</Link> |
          <Link to="/a/chatList"> Group Chat</Link> |
          <Link to="/a/users"> Manage Users</Link> |
          <Link to="/a/documents"> Manage Documents</Link> |
          <Link to="/a/logout"> Logout</Link>
        </div>

        {/* Right side user info  */}
        <div className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User Icon"
            width="35"
            height="35"
            className="me-2"
          />
          <span>{userName || "User"}</span>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
