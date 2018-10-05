import React from 'react';

const H = ({ click, text, color }) => (
    <div onClick={click}>
        <h2 style={{ color }}>{text}</h2>
    </div>
    );

export default H;
