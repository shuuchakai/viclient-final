import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import steps from '../../../utils/steps';
import { API_URL } from '../../../utils/constants';

import './Questionary.css';

function Questionary() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [currentIdea, setCurrentIdea] = useState(null);

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.id)

    useEffect(() => {
        if (steps[step].idea) {
            setCurrentIdea(steps[step].idea[Math.floor(Math.random() * steps[step].idea.length)]);
        }
    }, [step]);

    const handleNext = () => {
        setStep(prevStep => prevStep + 1);
    };

    const handleBack = () => {
        setStep(prevStep => prevStep - 1);
    };

    const handleAnswer = (question) => (event) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [question]: event.target.value }));
    };

    const handleIdeaClick = () => {
        if (steps[step].idea) {
            setCurrentIdea(steps[step].idea[Math.floor(Math.random() * steps[step].idea.length)]);
        }
    };

    const handleSubmit = async () => {
        const response = await axios.post(API_URL + "/profile/create", { ...answers, user_id: user.id })

        console.log(response);

        navigate('/dashboard')
    };

    return (
        <main className="questionary">
            <p className="questionary_title">Ayúdanos a personalizar  <span>tu perfil</span>.</p>
            <p className="questionary_subtitle">Es importante para nosotros tener un amplio conocimiento en tu información médica y personal, con esto, podemos generar el perfil perfecto para ti.</p>
            <div className="questionary_container">
                {step < steps.length && (
                    <div className="questionary_inputContainer">
                        <p className="questionary_inputContainer_title">{steps[step].question}</p>
                        {steps[step].answerType === 'select' && (
                            <select className="questionary_inputContainer_select" onChange={handleAnswer(steps[step].answerKey)} value={answers[steps[step].answerKey] || ''}>
                                <option className="questionary_inputContainer_option" value="">Selecciona...</option>
                                {steps[step].options.map((option, index) => (
                                    <option className="questionary_inputContainer_option" key={index} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        )}
                        {steps[step].answerType === 'text' && (
                            <input
                                placeholder={steps[step].placeholder || ''}
                                className="questionary_inputContainer_input"
                                type="text"
                                onChange={handleAnswer(steps[step].answerKey)}
                                value={answers[steps[step].answerKey] || ''}
                            />
                        )}
                        {steps[step].answerType === 'date' && (
                            <input
                                className="questionary_inputContainer_input"
                                type="date"
                                onChange={handleAnswer(steps[step].answerKey)}
                                value={answers[steps[step].answerKey] || ''}
                            />
                        )}
                    </div>
                )}
                <div className="questionary_inputContainer_buttons">
                    {step > 0 && <button className="questionary_inputContainer_button" onClick={handleBack}>Anterior</button>}
                    {step < steps.length - 1 ? (
                        <button className="questionary_inputContainer_button" onClick={handleNext}>Siguiente</button>
                    ) : (
                        <button className="questionary_inputContainer_button" onClick={handleSubmit}>Enviar</button>
                    )}
                </div>
                {steps[step].idea && (
                    <div className="questionary_idea" onClick={handleIdeaClick}>
                        <p className="questionary_ideaItem">
                            {currentIdea || steps[step].idea[Math.floor(Math.random() * steps[step].idea.length)]}
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Questionary;