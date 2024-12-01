// src/pages/Booking.tsx
import React from "react";
import BookingForm from "../component/BookingForm";

const Booking: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Make a Reservation</h1>
            <BookingForm />
        </div>
    );
};

export default Booking;
