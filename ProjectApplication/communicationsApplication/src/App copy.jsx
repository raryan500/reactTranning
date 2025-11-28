import React from "react";
import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import LoginSuccessful from "./LoginSuccessful";
import RegisterSuccessful from "./RegisterSuccessful";
import ChatList from "./ChatList";
import UserList from "./UserList";
import EditUser from "./EditUser";
import DocumentList from "./DocumentList";
import Logout from "./Logout";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";

export default class App extends React.Component {
    render() {
        // return <div>
        //     <h1>Inside App Class component</h1>
        //     <Welcome />
        //     <Login />
        //     <Register />
        //     <LoginSuccessful />
        //     <RegisterSuccessful />
        //     <ChatList />
        //     <UserList />
        //     <EditUser />
        //     <DocumentList />
        //     <Logout />
        // </div>

            console.log("This is render lifecycle - 2");
            
            return <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Nav />}>
                        <Route index element={<Welcome title="Welcome" user="Devender"/>} />
                        <Route path="/chatList" element={<ChatList/>} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/documents" element={<DocumentList />} />
                        <Route path="/logout" element={<Logout />} />
                        <Route path="/link" element={<Login />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        
    }
}