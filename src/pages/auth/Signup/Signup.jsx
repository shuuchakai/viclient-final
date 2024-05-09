import SignupCard from '../../../components/ui/cards/SignupCard/SignupCard';

import './Signup.css';

function Signup() {
    return (
        <main className="signup">
            <div className="signup_formContainer">
                <p className="signup_formContainer_title">Crea una cuenta</p>
                <p className="signup_formContainer_subtitle">Crea una cuenta y empieza a mejorar tu bienestar</p>
                <SignupCard />
            </div>
            <div className="signup_ilustrationContainer"></div>
        </main>
    )
}

export default Signup