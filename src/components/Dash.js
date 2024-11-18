import React from 'react';
import "./Dash.css"

const Dash = ({ toggleSidePanel }) => {
    return (
        <div className="Dash-Header">
            <div className="Title" onClick={toggleSidePanel}>
                <img id="logo" src="My_Logo.png" alt="Logo" />
                <h2 id="my-name">Wen Ting Song</h2>
            </div>
        </div>
    );
}

export default Dash;