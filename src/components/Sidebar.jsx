import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ setCurrentFace }) => {
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

    return (
        <div className="relative">
            {/* sidebar */}
            <div className="sidebar w-full flex flex-col space-y-2 p-4">
            {faces.map(face => (
                <Link key={face} onClick={() => setCurrentFace(face)}>
                    <button className='buttoncolors btn btn-outline text-customGreen hover:bg-customGreen hover:text-customBlue btn-block lg:btn-lg md:btn-md sm:btn-sm'>
                        {faceTextMap[face]} {/* Display text based on face */}
                    </button>
                </Link>
            ))}

            </div>
        </div>
    );
};

export default Sidebar;
