import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RootLayout from "./Layout";

export default function UserList() {
   const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const navigate = useNavigate();

  //get all user data
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  // When user clicks "Delete"
   const openDeleteDialog = (id) => {
    setDeleteUserId(id);
    setShowModal(true);
  };

  
  // Delete API call
  const confirmDelete = async () => {
    try {
      await fetch(`http://localhost:3000/users/${deleteUserId}`, {
        method: "DELETE",
      });

      setShowModal(false);
      fetchUsers(); // refresh list
    } catch (error) {
      console.error("Delete error:", error);
    }
  };
//Edit user
  const handleEdit = (user) => {
    navigate("/a/edit-user", { state: user });
  };

  return (
   
    <div className="container d-flex flex-column justify-content-center align-items-center vh-20">
     
      <h2 className="fw-bold mb-4">Users</h2>

      <div className="w-100" style={{ maxWidth: "600px" }}>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>User Email ID</th>
              <th style={{ width: "120px" }}>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user._id}>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>
                  <td>
                    <span className="text-primary" style={{ cursor: "pointer" }}  onClick={() => handleEdit(user)}>
                      Edit
                    </span>{" "}|{" "}
                    <span className="text-danger" style={{ cursor: "pointer" }} onClick={() => openDeleteDialog(user._id)}>
                      Delete
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-3">
                  No Users Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    


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
              <h6 className="m-0 fw-bold">Confirm User Deletion</h6>
              <button
                className="btn-close"
                onClick={() => setShowModal(false)}
              ></button>
            </div>

            <div className="text-center mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/545/545676.png"
                width="40"
                alt="icon"
              />
              <p className="mt-2 fw-semibold">Are you Sure?</p>
            </div>

            <div className="d-flex justify-content-around">
              <button
                className="btn btn-primary px-4"
                onClick={confirmDelete}
              >
                OK
              </button>

              <button
                className="btn btn-secondary px-4"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}