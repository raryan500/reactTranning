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

export default class App extends React.Component {
    render() {
        return <div>
            <h1>Inside App Class component</h1>
            <Welcome />
            <Login />
            <Register />
            <LoginSuccessful />
            <RegisterSuccessful />
            <ChatList />
            <UserList />
            <EditUser />
            <DocumentList />
            <Logout />
        </div>
    }
}