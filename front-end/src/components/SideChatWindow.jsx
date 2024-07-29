import React from "react";

export const SideChatWindow = () => {
    return (
        <div className="d-flex flex-column vh-100 bg-dark text-white p-3" style={{ minWidth: '250px' }}>
            <div className="sidebar-heading">My Website</div>
            <div className="list-group list-group-flush">
                <a href="#home" className="list-group-item list-group-item-action bg-dark text-white">Home</a>
                <a href="#services" className="list-group-item list-group-item-action bg-dark text-white">Services</a>
                <a href="#clients" className="list-group-item list-group-item-action bg-dark text-white">Clients</a>
                <a href="#contact" className="list-group-item list-group-item-action bg-dark text-white">Contact</a>
            </div>
        </div>
    );
};
