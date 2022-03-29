import React, { useState } from "react";
import '../styles/UserForm.scss';
import axios from "axios";

export default function UserForm(props: any) {

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        email: '',
    })

    function onSync(e: any) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    function onSubmit(e: any) {
        e.preventDefault();        
        axios.post('http://localhost:3004/users', {
            id: props.length + 1,
            ...form
        }).then(resp => {
            console.log(resp.data);
            
            props.setUser((prev:any) => [...prev, resp.data]);
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <form className="user-form" onSubmit={onSubmit} >
            <input type="text" name="first_name" value={form.first_name} onChange={onSync} placeholder="Enter your first name" />
            <input type="text" name="last_name" value={form.last_name} onChange={onSync} placeholder="Enter your last name" />
            <input type="text" name="email" value={form.email} onChange={onSync} placeholder="Enter your email" />
            <button type="submit">Submit</button>
        </form>
    );
}