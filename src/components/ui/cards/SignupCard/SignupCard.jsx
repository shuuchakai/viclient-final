import axios from 'axios';
import * as yup from 'yup';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SignupInputContainer from '../../inputs/SignupInputContainer/SignupInputContainer';
import FormButtonContainer from '../../buttons/FormButtonContainer/FormButtonContainer';

import './SignupCard.css';

function SignupCard() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ name: null, email: null, password: null });

    const navigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().min(2, 'El nombre es requerido.').required('El nombre es requerido.'),
        email: yup.string().min(2, "El correo electrónico es requerido.").matches(/\S+@(gmail|hotmail|outlook)\.(com|es)$/, 'El correo electrónico no es válido.').required('El correo electrónico es requerido.'),
        password: yup.string().min(8, "La contraseña es requerida.").max(20).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\\+])[A-Za-z\d@$!%*?&\\+]{8,20}$/, 'La contraseña debe tener entre 8 y 20 caracteres, una letra mayúscula, una minúscula y un número.').required('La contraseña es requerida.'),
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        const fields = ['name', 'email', 'password'];
        let errors = {};

        for (const field of fields) {
            try {
                await schema.validateAt(field, { [field]: eval(field) });
            } catch (error) {
                if (error instanceof yup.ValidationError) {
                    errors[field] = error.message;
                }
            }
        }

        if (Object.keys(errors).length > 0) {
            setError(errors);
        } else {
            try {
                const response = await axios.post(`https://viserver1-production.up.railway.app/api/users/register`, { name, email, password });

                const ifUser = localStorage.getItem('user');
                console.log(ifUser);

                if (ifUser) {
                    localStorage.removeItem('user');
                }

                localStorage.setItem('user', JSON.stringify(response.data.user));

                console.log(response.data);
                navigate('/verify-email');
            } catch (error) {
                console.error(error);
            }
        }
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