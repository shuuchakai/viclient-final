import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

import './ProgressCard.css';

ChartJS.register(
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const chartColors = {
    backgroundColor: 'rgb(75, 192, 192)',
    borderColor: 'rgba(75, 192, 192, 0.2)'
};

Modal.setAppElement('#root');

function ProgressCard() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [newWeight, setNewWeight] = useState('');
    const [data, setData] = useState({
        labels: ['2024-01-01', '2024-02-01', '2024-03-01', '2024-04-01',],
        datasets: [
            {
                label: 'Peso',
                data: [65, 59, 80, 81, 56],
                fill: false,
                backgroundColor: chartColors.backgroundColor,
                borderColor: chartColors.borderColor,
            },
        ],
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                type: 'linear',
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleWeightChange = (e) => {
        setNewWeight(e.target.value);
    };

    const handleWeightSubmit = () => {
        const newLabels = [...data.labels, data.labels.length + 1];
        const newData = [...data.datasets[0].data, Number(newWeight)];
        setData({
            ...data,
            labels: newLabels,
            datasets: [
                {
                    ...data.datasets[0],
                    data: newData
                }
            ]
        });
        setNewWeight('');
        closeModal();
        toast.success('Peso actualizado con éxito!');
    };

    return (
        <div className="progress_card">
            <div className="progress_cardHeader">
                <p className="progress_cardHeaderTitle">Progreso</p>
                <p className="progress_cardHeaderSubtitle">Monitorea tu peso, metas y avances en tu entrenamiento</p>
                <button onClick={openModal} className="progress_cardHeaderButton">Actualizar progreso</button>
            </div>
            <div className="progress_details">
                <Line data={data} options={options} />
            </div>
            <Modal
                className="progress_modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Actualizar Peso"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px',
                        top: '50%',
                        left: '50%',
                        marginLeft: '100px',
                        right: 'auto',
                        bottom: 'auto',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'var(--light-color)',
                        borderRadius: '10px',
                        border: '1px solid var(--accent-color-1)',
                        boxShadow: ' rgba(82, 182, 154, 0.5) 0px 2px 8px 0px',
                        padding: '20px',
                        width: '600px',
                        height: '200px'
                    }
                }}
            >
                <p className="progress_cardHeaderTitle">Actualizar Peso</p>
                <input
                    style={
                        {
                            fontWeight: '600',
                            width: '100%',
                            textAlign: 'center',
                        }
                    }
                    className="signup_inputContainer_input" type="number" value={newWeight} onChange={handleWeightChange} />
                <button className="signup_buttonContainer" onClick={handleWeightSubmit}>Guardar</button>
            </Modal>
        </div>
    );
}

export default ProgressCard;