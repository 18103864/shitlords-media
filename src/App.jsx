import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cube from './components/Cube';
import Sidebar from './components/Sidebar';

const App = () => {
    const [currentFace, setCurrentFace] = useState('front');

    return (
        <Router>
            <div className='app'>
                <Sidebar setCurrentFace={setCurrentFace} />
                <Cube currentFace={currentFace} />
            </div>
        </Router>
    );
};

export default App;
