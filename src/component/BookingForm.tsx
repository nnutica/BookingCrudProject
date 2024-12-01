// src/components/BookingForm.tsx
import React, { useState } from "react";

const BookingForm: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [roomId, setRoomId] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // ส่งข้อมูลไปยัง MongoDB
        const response = await fetch("http://localhost:5000/api/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, roomId }),
        });

        if (response.ok) {
            alert("Reservation successful!");
        } else {
            alert("Failed to make reservation.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-xl font-bold mb-4">Book a Room</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">Your Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="room" className="block text-sm font-semibold">Room ID</label>
                <input
                    id="room"
                    type="text"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>
            <button
                type="submit"
                className="w-full p-2 bg-blue-500 text-white rounded"
            >
                Confirm Booking
            </button>
        </form>
    );
};

export default BookingForm;
