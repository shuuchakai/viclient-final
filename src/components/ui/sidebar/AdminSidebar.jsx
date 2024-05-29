import { Link, useLocation } from 'react-router-dom';

import './Sidebar.css';

function AdminSidebar() {
    const location = useLocation();

    return (
        <main className="sidebar">
            <div className="sidebar_container">
                <div className="sidebar_containerTop">
                    <Link to="/admin/dashboard" className="sidebar_containerLogo">vitatri</Link>
                    <nav className="sidebar_containerItems">
                        <Link to="/admin/dashboard" className={`sidebar_containerItems_item ${location.pathname === '/admin/dashboard' ? 'sidebar_containerItems_itemActive' : ''}`}>Dashboard</Link>
                        <Link to="/admin/ingredients" className={`sidebar_containerItems_item ${location.pathname === '/admin/ingredients' ? 'sidebar_containerItems_itemActive' : ''}`}>Ingredientes</Link>
                    </nav>
                </div>
                <div className="sidebar_containerBottom">
                    <p className="sidebar_containerLogout">Cerrar Sesión</p>
                </div>
            </div>
        </main>
    )
}

export default AdminSidebar;