import React, { useState, useEffect } from "react";
import UserForm from "./UserForm";
import '../styles/UserFormTable.scss'
import UserTable from "./UserTable";
import axios from "axios";

export default function UserFormTable() {
    const [users, setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3004/users').then(resp => {
            console.log(resp.data);
        }).catch(error => {
            console.log(error);
        });

    },[])

    return (
        <div className="user-form-table">
            <UserForm />
            <UserTable />
        </div>
    );
}