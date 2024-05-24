import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './MealPlanner.css';

function MealPlanner() {
    const [meals, setMeals] = useState([
        { name: 'Desayuno', recipe: 'Agrega un desayuno dando click' },
        { name: 'Almuerzo', recipe: 'Agrega un almuerzo dando click' },
        { name: 'Cena', recipe: 'Agrega una cena dando click' },
        { name: 'Snack', recipe: 'Agrega un snack dando click' }
    ]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://api.example.com/meals')
            .then(response => {
                if (response.data.length > 0) {
                    setMeals(response.data);
                }
            })
            .catch(error => {
                console.error('Hubo un error al obtener las comidas:', error);
            });
    }, []);

    const handleCardClick = () => {
        navigate('/diets');
    };

    return (
        <div className="planner">
            <div className="planner_header">
                <p className="planner_headerTitle">Dieta</p>
                <p className="planner_headerSubtitle">Planifica tu dieta, encuentra recetas y genera una lista de compra</p>
                <Link to="/diets" className="planner_headerButton">Crear Dieta</Link>
            </div>
            <div className="planner_details">
                {meals.map((meal, index) => (
                    <div key={index} className="planner_detailsCard" onClick={handleCardClick}>
                        <p className="planner_detailsCardTitle">{meal.name}</p>
                        <p className="planner_detailsCardSubtitle">{meal.recipe}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MealPlanner;