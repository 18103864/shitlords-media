import React from 'react';
import Face from './Face';
import FrontPage from '../pages/FrontPage';
import BackPage from '../pages/BackPage';
import LeftPage from '../pages/LeftPage';
import RightPage from '../pages/RightPage';
import TopPage from '../pages/TopPage';
import BottomPage from '../pages/BottomPage';

const Cube = ({ currentFace }) => {
    // Define the rotation based on the current face
    const rotations = {
        // front: 'rotateY(0deg)',
        back: 'rotateY(180deg)',
        left: 'rotateY(90deg)',
        right: 'rotateY(-90deg)',
        top: 'rotateX(-90deg)',
        bottom: 'rotateX(90deg)',
    };

    return (
        <div className="cube-containerr">
            <div className="cubee" style={{ transform: rotations[currentFace] }}>
                <Face face="front" content={<FrontPage />} />
                <Face face="back" content={<BackPage />} />
                <Face face="left" content={<LeftPage />} />
                <Face face="right" content={<RightPage />} />
                <Face face="top" content={<TopPage />} />
                <Face face="bottom" content={<BottomPage />} />
            </div>
        </div>
    );
};

export default Cube;
