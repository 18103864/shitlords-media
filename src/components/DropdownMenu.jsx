import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ isSidebarOpen, toggleSidebar, setCurrentFace }) => {

    const faces = ['front', 'top', 'right', 'bottom', 'left', 'back'];

    // Map of faces to display text
    const faceTextMap = {
        front: 'HOME',
        top: 'ABOUT',
        right: 'PRICING',
        bottom: 'MEMES',
        left: 'WEBSITES',
        back: 'CONTACT US',
    };


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Toggle dropdown menu visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="dropdown-container relative">
            {/* Hamburger Icon (click to toggle dropdown menu) */}
            <button 
                onClick={toggleDropdown}
                className="text-black p-2 bg-[#b2fd4b] rounded-md "
            >
                ☰
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="dropdown-menu absolute left-0 mt-2 bg-[#b2fd4b] text-black shadow-md rounded-md p-2 z-50">
                    <ul>
                        {faces.map(face => (
                            <Link key={face} onClick={() => setCurrentFace(face)}>
                                <li className="p-2 hover:bg-[#cbf493] hover:text-customBlue cursor-pointer">{faceTextMap[face]} {/* Display text based on face */}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownMenu;

