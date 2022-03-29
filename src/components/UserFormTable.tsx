import React,{useState,useEffect} from "react";
import UserForm from "./UserForm";
import '../styles/UserFormTable.scss'
import UserTable from "./UserTable";

export default function UserFormTable() {
    return(
        <div className="user-form-table">
            <UserForm/>
            <UserTable/>
        </div>
    );
}