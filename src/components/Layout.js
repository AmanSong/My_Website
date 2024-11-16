import { Outlet } from "react-router-dom";
import Dash from "./Dash";
import SidePanel from "./SidePanel";

const Layout = () => {
    return(
        <>
            <Dash></Dash>
            <SidePanel></SidePanel>
            <Outlet></Outlet>
        </>
    )
}

export default Layout