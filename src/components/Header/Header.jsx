import { Link } from 'react-router-dom';

import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header_container">
                <div className="header_containerLinks">
                    <Link to="/" className="header_containerLogo_text">vitatri</Link>
                    <Link to="/products" className="header_containerLinks_text">Productos</Link>
                    <Link to="/about" className="header_containerLinks_text">Nosotros</Link>
                    <Link to="/blog" className="header_containerLinks_text">Blog</Link>
                    <Link to="/contact" className="header_containerLinks_text">Contacto</Link>
                </div>
                <div className="header_containerButtons">
                    <Link to="/signup" className="header_containerButtons_signup">Crear Cuenta</Link>
                    <Link to="/signin" className="header_containerButtons_signin">Iniciar Sesión</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;