import React from "react";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
            ],
        }


    }
    componentDidMount() {
        const users = [
            { id: 1, name: "Rahul Pandey", email: "rahulpandey@gmail.com" },
            { id: 2, name: "Anne Hunter", email: "annehunter@mail.com" },
            { id: 3, name: "Jale Boser", email: "jale@yahoo.com" }
        ];

        localStorage.setItem("usersList", JSON.stringify(users));

        const storedUsers = localStorage.getItem("usersList") || "[]";
        this.setState({
            users: JSON.parse(storedUsers)
        });
    }
    render() {
        return (
            <div>
                <h1>User list from API call</h1>
                <table border="1" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}