import { Link, useNavigate, useLocation } from 'react-router-dom';

import './Sidebar.css';

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        navigate('/login');
    };

    const user = JSON.parse(localStorage.getItem('user'));
    const isPremium = user?.isPremium;

    return (
        <main className="sidebar">
            <div className="sidebar_container">
                <div className="sidebar_containerTop">
                    <Link to="/dashboard" className="sidebar_containerLogo">vitatri</Link>
                    <nav className="sidebar_containerItems">
                        <Link to="/dashboard" className={`sidebar_containerItems_item ${location.pathname === '/dashboard' ? 'sidebar_containerItems_itemActive' : ''}`}>Dashboard</Link>
                        <Link to="/tracking" className={`sidebar_containerItems_item ${location.pathname === '/tracking' ? 'sidebar_containerItems_itemActive' : ''}`}>Seguimiento</Link>
                        <Link to="/workout" className={`sidebar_containerItems_item ${location.pathname === '/workout' ? 'sidebar_containerItems_itemActive' : ''}`}>Rutinas</Link>
                        <Link to="/profile" className={`sidebar_containerItems_item ${location.pathname === '/profile' ? 'sidebar_containerItems_itemActive' : ''}`}>Perfil</Link>
                    </nav>
                </div>
                <div className="sidebar_containerBottom">
                    {!isPremium && (
                        <div className="sidebar_containerPremium">
                            <p className="sidebar_containerPremium_title">Actualizar a premium</p>
                            <p className="sidebar_containerPremium_subtitle">Desbloquee todas las funciones y obtenga acceso ilimitado a nuestro equipo de soporte</p>
                            <Link to="/premium" className="sidebar_containerPremium_button">Obtener Premium</Link>
                        </div>
                    )}
                    <p className="sidebar_containerLogout" onClick={handleLogout}>Cerrar Sesión</p>
                </div>
            </div>
        </main>
    )
}

export default Sidebar;