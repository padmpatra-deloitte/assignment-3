import React from "react";
import '../styles/UserForm.scss'

export default function UserForm() {
    return (

        <div className="user-form">
            <input type="text" name="firstName" placeholder="Enter your first name" />
            <input type="text" name="lastName" placeholder="Enter your last name"/>
            <input type="text" name="email"placeholder="Enter your email" />
            <button>Submit</button>
        </div>
    );
}