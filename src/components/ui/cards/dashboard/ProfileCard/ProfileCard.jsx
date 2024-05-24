import { Link } from 'react-router-dom';

import './ProfileCard.css';

function ProfileCard() {
    const user = JSON.parse(localStorage.getItem('user')) || {
        name: 'Luis Cortés',
        age: 18,
        height: 180,
        weight: 70,
        bmi: 21.6,
        occupation: 'Estudiante',
        goals: ['Perder peso', 'ganar masa muscular'],
        personalInfo: {
            birthday: 'Junio 10, 2003',
            gender: 'Masculino',
            email: 'mlatbc69@gmail.com',
            phone: '1234567890',
        },
        medicalHistory: {
            allergies: 'Ninguna',
            diseases: 'Ninguna',
            medications: 'Ninguna',
            biologicalSex: 'Hombre'
        },
        profileImage: null
    };

    const profileInfoGeneral = `Edad: ${user.age} | Altura: ${user.height} cm | Peso: ${user.weight} kg | BMI: ${user.bmi}`;

    return (
        <div className="profile_card">
            <div className="profile_header">
                <div className="profile_generalInfo">
                    {user.profileImage ? (
                        <img src={user.profileImage} alt="Foto de perfil" className="profile_image" />
                    ) : (
                        <div className="profile_image"></div>
                    )}
                    <div className="profile_info">
                        <p className="profile_infoName">{user.name}</p>
                        <p className="profile_infoGeneral">{profileInfoGeneral}</p>
                        <p className="profile_infoGeneral">Ocupación: {user.occupation}</p>
                        <p className="profile_infoGeneral">Objetivos: {user.goals.join(', ')}</p>
                    </div>
                </div>
                <Link className="profile_button">Editar perfil</Link>
            </div>
            <div className="profile_details">
                <div className="personal_info">
                    <p className="personal_infoTitle">Información personal</p>
                    <p className="personal_infoItem">Fecha de nac: {user.personalInfo.birthday}</p>
                    <p className="personal_infoItem">Género: {user.personalInfo.gender}</p>
                    <p className="personal_infoItem">Correo: {user.personalInfo.email}</p>
                    <p className="personal_infoItem">Teléfono: {user.personalInfo.phone}</p>
                </div>
                <div className="personal_info">
                    <p className="personal_infoTitle">Historial médico</p>
                    <p className="personal_infoItem">Sexo biológico: {user.medicalHistory.biologicalSex}</p>
                    <p className="personal_infoItem">Alergias: {user.medicalHistory.allergies}</p>
                    <p className="personal_infoItem">Enfermedades: {user.medicalHistory.diseases}</p>
                    <p className="personal_infoItem">Medicamentos: {user.medicalHistory.medications}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;