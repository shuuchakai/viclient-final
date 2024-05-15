import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './VerifyEmail.css';

function VerifyEmail() {
    const [inputValues, setInputValues] = useState(Array(6).fill(''));
    const navigate = useNavigate();
    const inputRefs = useRef([]);

    useEffect(() => {
        inputRefs.current = inputRefs.current.slice(0, inputValues.length);
    }, [inputValues]);

    const handleChange = (index) => (event) => {
        if (event.target.value.length > 1) {
            return; // Ignora la entrada si tiene más de un dígito
        }

        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);

        if (event.target.value.length >= 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const verificationCode = inputValues.join('');
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.email) {
            try {
                console.log(user.email, verificationCode)
                const response = await axios.post('https://viserver1-production.up.railway.app/api/users/verify', {
                    email: user.email,
                    code: verificationCode,
                });

                console.log(response.data)

                if (response.data.success) {
                    localStorage.setItem('token', response.data.token);
                    navigate("/questionary");
                }

            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <main className="verify">
            <div className="verify_container">
                <p className="verify_title">Verifica tu correo electrónico</p>
                <p className="verify_subtitle">Hemos enviado un código de 6 dígitos a tu correo. Ingrésalo debajo.</p>
                <form className="verify_subcontainer" onSubmit={handleSubmit}>
                    <div className="verify_inputGroup">
                        {inputValues.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                className="verify_inputGroup_input"
                                value={value}
                                onChange={handleChange(index)}
                                ref={ref => inputRefs.current[index] = ref}
                            />
                        ))}
                    </div>
                    <button className="verify_subcontainerButton" type="submit">Verificar</button>
                </form>
            </div>
        </main>
    );
}

export default VerifyEmail;