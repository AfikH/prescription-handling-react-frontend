import { Outlet } from "react-router-dom";

import NavLinks from "../shared/NavLinks";

const Layout = () => (
    <div className="sidebar-layout">
        <aside className="main-sidebar">
            <nav className="main-sidebar-nav">
                <NavLinks />
            </nav>
        </aside>
        <div className="page">
            <Outlet />
        </div>
    </div>
)

export default Layout;