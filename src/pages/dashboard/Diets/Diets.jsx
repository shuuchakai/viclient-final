import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import axios from 'axios';

import Sidebar from '../../../components/ui/sidebar/Sidebar';

import './Diets.css';

function Diets() {
    const testIngredient = {
        "name": "Chicken Breast",
        "portion": "100g",
        "nutritional_values": {
            "calories": {
                "amount": 165,
                "unit": "kcal"
            },
            "proteins": {
                "amount": 31,
                "unit": "g"
            },
            "carbohydrates": {
                "amount": 0,
                "unit": "g"
            },
            "fats": {
                "amount": 3.6,
                "unit": "g"
            },
            "image": "https://example.com/images/chicken_breast.jpg"
        }
    };

    const [ingredients, setIngredients] = useState([testIngredient]);
    const [selectedIngredient, setSelectedIngredient] = useState(null);
    const [addedIngredients, setAddedIngredients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/ingredient/get')
            .then(response => {
                console.log(response.data.ingredients)
                if (response.data.ingredients.length === 0) {
                    setIngredients([testIngredient]);
                } else {
                    setIngredients(response.data.ingredients);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const handleClearIngredients = () => {
        setAddedIngredients([]);
    }

    const handleRemoveIngredient = (index) => {
        const newAddedIngredients = [...addedIngredients];
        newAddedIngredients.splice(index, 1);
        setAddedIngredients(newAddedIngredients);
    }

    const handleCardClick = (ingredient) => {
        setSelectedIngredient(ingredient);
    }

    const handleCloseModal = () => {
        setSelectedIngredient(null);
    }

    const handleAddIngredient = () => {
        setAddedIngredients([...addedIngredients, selectedIngredient]);
        setSelectedIngredient(null);
    }

    return (
        <>
            <Sidebar />
            <main className="diets">
                <div className="diets_left">
                    <div className="diets_leftHeader">
                        <CiSearch
                            opacity={0.5}
                            size="30px"
                        />
                        <input className="diets_leftHeader_input" type="text" placeholder="Busca ingredientes" />
                    </div>
                    <div className="diets_leftContent">
                        {ingredients.map((ingredient) => (
                            <div className="diets_leftContent_card" key={ingredient.name} onClick={() => handleCardClick(ingredient)}>
                                <img className="diets_leftContent_cardImage" src={ingredient.image} alt={ingredient.name} />
                                <p className="diets_leftContent_cardTitle">{ingredient.name}</p>
                                <p className="diets_leftContent_cardSubtitle">{ingredient.portion}, {ingredient.nutritional_values.calories.amount} {ingredient.nutritional_values.calories.unit}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {addedIngredients.length > 0 && (
                    <div className="diets_right">
                        <div className="diets_rightSelected">
                            <div className="diets_rightSelected_header">
                                <p className="diets_rightSelected_headerTitle">Ingredientes Seleccionados</p>
                                <button className="diets_rightSelected_headerButton" onClick={handleClearIngredients}>Limpiar</button>
                            </div>
                            <div className="diets_rightSelected_content">
                                {addedIngredients.map((ingredient, index) => (
                                    <div className="diets_rightSelected_card" key={index}>
                                        <div className="diets_rightSelected_cardLeft">
                                            <img className="diets_rightSelected_cardImage" src={ingredient.image} alt={ingredient.name} />
                                            <div className="diets_rightSelected_cardNutri">
                                                <p className="diets_rightSelected_cardTitle">{ingredient.name}</p>
                                                <p className="diets_rightSelected_cardSubtitle">{ingredient.portion}, {ingredient.nutritional_values.calories.amount} {ingredient.nutritional_values.calories.unit}</p>
                                            </div>
                                        </div>
                                        <p className="diets_rightSelected_cardButton" onClick={() => handleRemoveIngredient(index)}>Eliminar</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </main>
            {selectedIngredient && (
                <div className="diets_modal">
                    <div className="modal_content">
                        <div className="diets_modalHeader">
                            <p className="diets_modalTitle">{selectedIngredient.name}</p>
                            <p className="diets_modalPortion">Porción: {selectedIngredient.portion}</p>
                        </div>
                        <div className="diets_modalItems">
                            <p className="diets_modalItem">Calorías: {selectedIngredient.nutritional_values.calories.amount} {selectedIngredient.nutritional_values.calories.unit}</p>
                            <p className="diets_modalItem">Proteínas: {selectedIngredient.nutritional_values.proteins.amount} {selectedIngredient.nutritional_values.proteins.unit}</p>
                            <p className="diets_modalItem">Carbohidratos: {selectedIngredient.nutritional_values.carbohydrates.amount} {selectedIngredient.nutritional_values.carbohydrates.unit}</p>
                            <p className="diets_modalItem">Grasas: {selectedIngredient.nutritional_values.fats.amount} {selectedIngredient.nutritional_values.fats.unit}</p>
                        </div>
                        <div className="diets_modalButtons">
                            <button className="diets_leftContent_cardButton" onClick={handleCloseModal}>Cerrar</button>
                            <button className="diets_leftContent_cardButton" onClick={handleAddIngredient}>Agregar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Diets;