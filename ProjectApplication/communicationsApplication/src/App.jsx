import React from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import ChatList from "./ChatList";
import UserList from "./UserList";
import DocumentList from "./DocumentList";
import Logout from "./Logout";
import Register from "./Register";
import PageNotFound from "./PageNotFound";
import EditUser from "./EditUser";
import Nav from "./Nav";
import LoginSuccessful from "./LoginSuccessful";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";


import { BrowserRouter, Routes, Route } from 'react-router-dom';



export default class App extends React.Component {
    render() {
        console.log("This is render lifecycle - 2");
            
        return <BrowserRouter>
        <Routes>

          {/* Public pages */}
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
         

          {/* Protected pages with Nav */}
          <Route element={<ProtectedRoute />}>
            <Route path="/a" element={<Nav />}>
             <Route index element={<Home />} />
               <Route path="login-success" element={<LoginSuccessful />} />
              <Route path="chatList" element={<ChatList />} />
              <Route path="users" element={<UserList />} />
              <Route path="edit-user" element={<EditUser />} />
              <Route path="documents" element={<DocumentList />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
        
    }
}