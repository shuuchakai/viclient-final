import axios from 'axios';
import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SignupInputContainer from '../../inputs/SignupInputContainer/SignupInputContainer';
import FormButtonContainer from '../../buttons/FormButtonContainer/FormButtonContainer';

import './SignupCard.css';

import { API_URL } from '../../../../utils/constants';

import schema from '../../../../utils/schemas/signup.schema';

function SignupCard() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ name: null, email: null, password: null });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (isSubmitting) {
            const registerUser = async () => {
                try {
                    const response = await axios.post(API_URL + '/users/register', { name, email, password });

                    const ifUser = localStorage.getItem('user');

                    if (ifUser) {
                        localStorage.removeItem('user');
                    }

                    localStorage.setItem('user', JSON.stringify(response.data.user));

                    navigate('/verify-email');
                } catch (error) {
                    console.error(error);
                    setError({ api: 'Error al registrarse. Por favor, inténtalo de nuevo.' });
                }
            };

            registerUser();
        }
    }, [isSubmitting]);

    const validateForm = async () => {
        const fields = { name, email, password };
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

        if (Object.keys(errors).length > 0) {
            setError(errors);
        } else {
            setError({ name: null, email: null, password: null }); // Limpia los errores
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
                <SignupInputContainer
                    inputType="text"
                    labelContent="Nombre"
                    inputPlaceholder="Introduce tu nombre completo"
                    inputValue={name}
                    inputOnChange={(event) => setName(event.target.value)}
                    inputError={error.name}
                />
                <SignupInputContainer
                    inputType="text"
                    labelContent="Correo Electrónico"
                    inputPlaceholder="Introduce tu correo electrónico"
                    inputValue={email}
                    inputOnChange={(event) => setEmail(event.target.value)}
                    inputError={error.email}
                />
                <SignupInputContainer
                    inputType="password"
                    labelContent="Contraseña"
                    inputPlaceholder="Introduce tu contraseña"
                    inputValue={password}
                    inputOnChange={(event) => setPassword(event.target.value)}
                    inputError={error.password}
                />
                <FormButtonContainer buttonOnClick={handleSubmit}>Crear Cuenta</FormButtonContainer>
            </form>
            <div className="signup_cardContainer_bottom">
                <p className="signup_cardContainer_bottomTitle">¿Ya tienes una cuenta?</p>
                <Link to="/signin" className="signup_cardContainer_bottomLink">Inicia Sesión</Link>
            </div>
        </div>
    )
};

export default SignupCard;