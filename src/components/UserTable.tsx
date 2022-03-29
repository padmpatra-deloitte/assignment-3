import React from "react";
import '../styles/UserTable.scss'

export default function UserTable() {
    return(
        <div className="user-table">
            <table>
                
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td className="btn-fld"><button>Update</button><button>Delete</button></td>
                </tr>
                
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td className="btn-fld"><button>Update</button><button>Delete</button></td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Email</td>
                    <td className="btn-fld"><button>Update</button><button>Delete</button></td>
                </tr>
            </table>
        </div>
    );
}