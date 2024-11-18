import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Dash from "./Dash";
import SidePanel from "./SidePanel";
import './Layout.css';

const Layout = () => {
    const [sidePanelOpen, setSidePanelOpen] = useState(false);

    const toggleSidePanel = () => {
        setSidePanelOpen(!sidePanelOpen);
    }

    return (
        <>
            <Dash toggleSidePanel={toggleSidePanel} />
            <SidePanel className={`Side-Panel ${sidePanelOpen ? 'open' : ''}`} />
            <div className={`content ${sidePanelOpen ? 'shifted' : ''}`}>
                <Outlet />
            </div>
        </>
    );
}

export default Layout;
