import React from 'react';

const Face = ({ face, content }) => {
    return (
        <div className={`face ${face}`}>
            {content}
        </div>
    );
};

export default Face;
