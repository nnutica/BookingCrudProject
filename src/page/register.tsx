import React, { useState } from "react";
import { registerUser } from "../services/api";

const Register: React.FC = () => {
    const [form, setForm] = useState({ Name: "", Email: "", phone: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(form);
            setSuccess(true);
        } catch (error) {
            console.error("Error registering user:", error);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {success ? <p>Registration successful!</p> : null}
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Name" onChange={handleChange} required />
                <input type="email" name="Email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
