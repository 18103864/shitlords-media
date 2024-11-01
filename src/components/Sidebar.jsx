import React from 'react';
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
        back: 'SOCIALS',
    };

    return (
        <div className="sidebar flex flex-col space-y-2 p-4">
            {faces.map(face => (
                <Link key={face} onClick={() => setCurrentFace(face)}>
                    <button className='buttoncolors btn btn-outline text-customGreen btn-block lg:btn-lg md:btn-md sm:btn-sm'>
                        {faceTextMap[face]} {/* Display text based on face */}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
