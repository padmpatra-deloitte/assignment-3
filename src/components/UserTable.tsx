import React from "react";
import '../styles/UserTable.scss'
import axios from "axios";

export default function UserTable(props: any) {

    function remove(id: number) {
        axios.delete(`http://localhost:3004/users/${id}/`)
            .then(resp => {
                const users = props.users.filter((user:any) => user.id !== id)
                props.setUser(users)
            }).catch(error => {
                console.log(error);
            });
    }

    return (
        <div className="user-table">
            <table>
                {
                    props.users && props.users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td className="btn-fld"><button>Update</button><button onClick={()=>remove(user.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}