import SigninCard from '../../../components/ui/cards/SigninCard/SigninCard';

import './Signin.css';

function Signin() {
    return (
        <main className="signin">
            <div className="signin_ilustrationContainer"></div>
            <div className="signin_formContainer">
                <p className="signin_formContainer_title">Inicia Sesión</p>
                <p className="signin_formContainer_subtitle">Inicia sesión para continuar</p>
                <SigninCard />
            </div>
        </main>
    )
}

export default Signin;