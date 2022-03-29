import React from "react";
import '../styles/UserTable.scss'

export default function UserTable(props: any) {
    return (
        <div className="user-table">
            <table>
                {
                    props.users && props.users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td className="btn-fld"><button>Update</button><button>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}