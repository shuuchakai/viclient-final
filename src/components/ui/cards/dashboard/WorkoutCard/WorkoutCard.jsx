import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './WorkoutCard.css';

function WorkoutCard() {
    const defaultExercises = [
        {
            muscle: 'pecho', exercises: [
                {
                    name: 'Press de banca',
                    repetitions: 10,
                    sets: 4
                },
                {
                    name: 'Flexiones',
                    repetitions: 15,
                    sets: 3
                },
                {
                    name: 'Aperturas con mancuernas',
                    repetitions: 12,
                    sets: 3
                },
                {
                    name: 'Pull-over',
                    repetitions: 10,
                    sets: 3
                }
            ]
        }
    ];

    const [exercises, setExercises] = useState(defaultExercises);
    const today = new Date();
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const day = days[today.getDay()];

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.example.com/exercises')
            .then(response => {
                if (response.data.length > 0) {
                    setExercises(response.data);
                }
            })
            .catch(error => {
                console.error('Hubo un error al obtener los ejercicios:', error);
            });
    }, []);

    const handleCardClick = () => {
        navigate('/workout');
    };

    return (
        <div className="workout_card">
            <div className="workout_cardHeader">
                <p className="workout_cardHeaderTitle">Rutina</p>
                <p className="workout_cardHeaderSubtitle">Planifica a la perfección tu rutina diaria y lleva un control y progreso del ejercicio que haces</p>
                <Link to="/workouts" className="workout_cardHeaderButton">Crear Rutina</Link>
            </div>
            <div className="workout_cardDetails" onClick={handleCardClick}>
                <p className="workout_cardDetailsTitle">Hoy {day}, te toca {exercises[0].muscle}</p>
                <div className="workout_cardDetailsExercises">
                    {exercises[0].exercises.map((exercise, index) => (
                        <p className="workout_cardDetailsExercises_item" key={index}>
                            {exercise.name} - {exercise.repetitions} repeticiones - {exercise.sets} sets
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkoutCard;