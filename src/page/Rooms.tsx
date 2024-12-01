// src/pages/Rooms.tsx
import React from "react";
import RoomsList from "../component/RoomsList";

const Rooms: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Our Rooms</h1>
            <RoomsList />
        </div>
    );
};

export default Rooms;
