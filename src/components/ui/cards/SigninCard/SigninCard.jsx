import axios from 'axios';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SigninInputContainer from '../../inputs/SigninInputContainer/SigninInputContainer';
import FormButtonContainer from '../../buttons/FormButtonContainer/FormButtonContainer';

import './SigninCard.css';

import { API_URL } from '../../../../utils/constants';

import schema from '../../../../utils/schemas/signin.schema';

function SigninCard() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: null, password: null });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (isSubmitting) {
            const loginUser = async () => {
                try {
                    const response = await axios.post(API_URL + '/users/login', { email, password });

                    const ifUser = localStorage.getItem('user');

                    if (ifUser) {
                        localStorage.removeItem('user');
                    }

                    localStorage.setItem('user', JSON.stringify(response.data.user));

                    navigate('/verify-email');
                } catch (error) {
                    console.error(error);
                    setError({ api: 'Error al iniciar sesión. Por favor, inténtalo de nuevo.' });
                }
            };

            loginUser();
        }
    }, [isSubmitting]);

    const validateForm = async () => {
        const fields = { email, password };
        let errors = {};

        for (const field in fields) {
            try {
                await schema.validateAt(field, { [field]: fields[field] });
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    errors[field] = error.message;
                }
            }
        }

        setError(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        validateForm();
    };

    return (
        <div className="signup_cardContainer">
            <form className="signup_cardContainer_form" onSubmit={handleSubmit}>
                <SigninInputContainer
                    labelContent={"Correo Electrónico"}
                    inputType="email"
                    inputPlaceholder="Introduce tu correo electrónico"
                    inputValue={email}
                    inputOnChange={(event) => setEmail(event.target.value)}
                    inputError={error.email}
                />
                <SigninInputContainer
                    labelContent={"Contraseña"}
                    inputType="password"
                    inputPlaceholder="Introduce tu contraseña"
                    inputValue={password}
                    inputOnChange={(event) => setPassword(event.target.value)}
                    inputError={error.password}
                />
                <FormButtonContainer
                    buttonOnClick={validateForm}
                    children={"Iniciar Sesión"}
                />
            </form>
            <div className="signup_cardContainer_bottom">
                <p className="signup_cardContainer_bottomTitle">¿No tienes una cuenta aún?</p>
                <Link to="/signup" className="signup_cardContainer_bottomLink">Crea una</Link>
            </div>
        </div>
    )
}

export default SigninCard