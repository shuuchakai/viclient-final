import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './Home.css';

function Home() {
    return (
        <>
            <Header />
            <main className="home">
                <div className="home_container">
                    <section className="home_firstSection">
                        <div className="home_containerDescription">
                            <p className="home_containerDescription_title">Transforma minutos en bienestar</p>
                            <p className="home_containerDescription_subtitle">Con Vitatri, el poder de una vida saludable está en tus manos. Diseñado para quienes valoran cada minuto, nuestro software te ofrece planes de dieta y ejercicio personalizados, respaldados por la ciencia y ¡que no te quitan minutos de más!</p>
                            <div className="home_containerDescription_buttons">
                                <Link to="/signup" className="home_containerDescription_buttons_signup">Empieza ahora</Link>
                                <Link to="/products" className="home_containerDescription_buttons_products">Explorar productos</Link>
                            </div>
                        </div>
                        <div className="home_containerImage"></div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home