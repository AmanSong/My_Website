import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = ({ className }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const Navigate = (value) => {
        navigate(value);
    }

    return (
        <div className={`SidePanel ${className}`}>
            <div 
                className={`SidePanel-Button ${location.pathname === "/" ? "selected" : ""}`} 
                onClick={() => Navigate("/")}
            >
                ABOUT
            </div>
            <div 
                className={`SidePanel-Button ${location.pathname === "/education" ? "selected" : ""}`} 
                onClick={() => Navigate("/education")}
            >
                EDUCATION
            </div>
            <div 
                className={`SidePanel-Button ${location.pathname === "/cv" ? "selected" : ""}`} 
                onClick={() => Navigate("/cv")}
            >
                CV
            </div>
            <div 
                className={`SidePanel-Button ${location.pathname === "/projects" ? "selected" : ""}`} 
                onClick={() => Navigate("/projects")}
            >
                PROJECTS
            </div>
        </div>
    );
}

export default SidePanel;
