import React from 'react';
import "./SidePanel.css"
import { useNavigate } from 'react-router-dom';

const SidePanel = ({ className }) => {

    const navigate = useNavigate()

    const Navigate = (value) => {
        if(value === "About") {
            navigate('/')
        }
        if(value === "Education") {
            navigate('/education')
        }
    }

    const content = (
        <div>
            <div className="SidePanel-Button" onClick={() => Navigate("About")}>
                ABOUT
            </div>
            <div className="SidePanel-Button" onClick={() => Navigate("Education")}>
                EDUCATION
            </div>
            <div className="SidePanel-Button">
                CV
            </div>
            <div className="SidePanel-Button">
                PROJECTS
            </div>
        </div>
    )

    return (
        <aside className={className}>
            {content}
        </aside>
    );
}

export default SidePanel;
