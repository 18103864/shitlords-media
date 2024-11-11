import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cube from './components/Cube';
import Sidebar from './components/Sidebar';
import DropdownMenu from './components/DropdownMenu';

const App = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // Sidebar toggle state
    const [currentFace, setCurrentFace] = useState('front');

    // Toggle sidebar visibility (for mobile only)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Router>
            <div className="app flex">
                {/* Sidebar (only visible on large screens) */}
                <div className={`md:flex ${isSidebarOpen ? 'block' : 'hidden'} md:w-[20%] items-center justify-center`}>
                    <Sidebar setCurrentFace={setCurrentFace} />
                </div>

                {/* Main Content */}
                <div className={`flex-1 my-auto transition-all ${isSidebarOpen ? 'ml-[20%]' : ''}`}>
                    {/* Hamburger Menu (Dropdown on small/medium screens) */}
                    <div className="md:hidden fixed top-4 left-4 z-50">
                        <DropdownMenu 
                            isSidebarOpen={isSidebarOpen}
                            toggleSidebar={toggleSidebar}
                            setCurrentFace={setCurrentFace}
                        />
                    </div>
                    <div className='flex justify-center mb-14'>   
                        <Cube currentFace={currentFace}/>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
