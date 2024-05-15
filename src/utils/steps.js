const ageOptions = Array.from({ length: 86 }, (_, i) => i + 14);

const steps = [
    {
        question: '¿Qué edad tienes?',
        answerType: 'select',
        answerKey: 'age',
        options: ageOptions.map(age => ({ value: age, label: age })),
        idea: [
            'Con la edad, el metabolismo tiende a desacelerar, lo que significa que necesitamos consumir menos calorías y priorizar alimentos nutritivos para mantener un peso saludable.',
            'A medida que envejecemos, la absorción de ciertos nutrientes, como el calcio y la vitamina D, puede volverse menos eficiente, lo que hace importante incluir fuentes ricas en estos nutrientes en nuestra dieta.',
            'La pérdida de masa muscular es común con la edad, pero el ejercicio de resistencia regular puede ayudar a contrarrestar este efecto y mantener la fuerza y la funcionalidad.',
            'El envejecimiento puede aumentar el riesgo de deshidratación, por lo que es crucial mantenerse hidratado y consumir suficientes líquidos a lo largo del día.',
            'La flexibilidad y la movilidad pueden disminuir con la edad, pero actividades como el yoga y el estiramiento regular pueden ayudar a mantener la flexibilidad y prevenir lesiones.'
        ]
    },
    {
        question: '¿Cuál es tu género?',
        answerType: 'select',
        answerKey: 'gender',
        options: [
            { value: 'male', label: 'Masculino' },
            { value: 'female', label: 'Femenino' },
            { value: 'no-binary', label: 'No binario' },
            { value: 'transfemenine', label: 'Transfemenino' },
            { value: 'transmasculine', label: 'Transmasculino' },
            { value: 'genderqueer', label: 'Genderqueer' },
            { value: 'idk', label: 'No lo sé' },
            { value: 'pnts', label: 'Prefiero no decirlo' }
        ],
        idea: [
            'El género juega un rol muy importante al momento de crear tu identidad personal, siéntete libre de elegir la opción que mejor te represente.'
        ]
    },
    {
        question: '¿Cuál es tu sexo biológico?',
        answerType: 'select',
        answerKey: 'biologicalSex',
        options: [
            { value: 'men', label: 'Hombre' },
            { value: 'women', label: 'Mujer' }
        ],
        idea: [
            'Las mujeres tienden a experimentar cambios hormonales más significativos durante la menopausia, lo que puede influir en la distribución de grasa corporal y el metabolismo, requiriendo ajustes en la dieta y el ejercicio.',
            'Los hombres tienden a tener una mayor masa muscular y una tasa metabólica basal más alta en comparación con las mujeres, lo que puede afectar las necesidades calóricas y los requerimientos nutricionales a medida que envejecen.',
            'Las mujeres tienen un mayor riesgo de deficiencia de hierro, especialmente después de la menopausia, por lo que es importante consumir fuentes ricas en hierro y vitamina C para mejorar su absorción.',
            'Los hombres mayores tienen una tendencia a enfrentar un mayor riesgo de enfermedades cardíacas, lo que destaca la importancia de una dieta baja en grasas saturadas y rica en frutas, verduras y grasas saludables.',
            'Las diferencias hormonales entre hombres y mujeres pueden influir en la respuesta al ejercicio y la forma en que el cuerpo responde al entrenamiento de fuerza y ​​resistencia con el envejecimiento. Adaptar el programa de ejercicio según el género puede optimizar los resultados.'
        ]
    },
    {
        question: '¿Tienes alguna alergia?',
        answerType: 'text',
        answerKey: 'allergy',
        placeholder: 'Escribe aquí tus alergias',
        idea: [
            'Las alergias alimentarias pueden manifestarse a cualquier edad, pero los cambios en la dieta y el estilo de vida a lo largo de los años pueden influir en la sensibilidad a ciertos alimentos.',
            'A medida que envejecemos, es posible desarrollar nuevas alergias alimentarias o experimentar cambios en la severidad de las alergias existentes, lo que subraya la importancia de estar atento a las reacciones adversas a los alimentos.',
            'La actividad física regular puede ayudar a fortalecer el sistema inmunológico y reducir la inflamación, lo que puede ser beneficioso para algunas personas con alergias alérgicas.',
            'Algunas alergias, como la alergia al polen, pueden empeorar con el tiempo debido a la exposición repetida a los alérgenos, lo que puede requerir ajustes en la dieta y el estilo de vida para manejar los síntomas.',
            'Las alergias alimentarias pueden afectar la capacidad de una persona para mantener una dieta equilibrada y variada, por lo que es importante buscar orientación de un profesional de la salud, como un dietista registrado, para garantizar una nutrición adecuada.'
        ]
    },
    {
        question: '¿Cuánto pesas (en kg)?',
        answerType: 'select',
        options: Array.from({ length: 100 }, (_, i) => i + 30).map(weight => ({ value: weight, label: weight })),
        answerKey: 'weight',
        placeholder: 'Escribe aquí tu peso',
        idea: [
            'La dieta y el ejercicio son factores clave que influyen en el peso corporal de una persona, pero también pueden estar influenciados por factores genéticos y ambientales.',
            'Una dieta equilibrada que incluya una variedad de alimentos nutritivos, junto con un nivel adecuado de actividad física, puede ayudar a mantener un peso saludable.',
            'El metabolismo basal, que representa la energía que el cuerpo necesita en reposo, puede variar entre individuos y puede influir en la facilidad para mantener, ganar o perder peso.',
            'Las dietas extremadamente restrictivas o los patrones de ejercicio excesivos pueden ser perjudiciales para la salud y pueden llevar a problemas como la malnutrición, la fatiga y los trastornos alimentarios.',
            'El peso corporal puede fluctuar a lo largo de la vida debido a cambios hormonales, cambios en el estilo de vida, eventos de vida significativos y condiciones de salud subyacentes, por lo que es importante adoptar un enfoque holístico para la gestión del peso.'
        ]
    },
    {
        question: '¿Cuánto mides (en cm)?',
        answerType: 'select',
        options: Array.from({ length: 100 }, (_, i) => i + 100).map(height => ({ value: height, label: height })),
        answerKey: 'height',
        placeholder: 'Escribe aquí tu altura',
        idea: [
            'La genética juega un papel importante en determinar la altura de una persona, pero la nutrición durante la infancia y la adolescencia también puede influir significativamente en el crecimiento.',
            'Una dieta rica en nutrientes esenciales como proteínas, calcio, vitamina D y zinc puede favorecer un crecimiento óptimo durante los años de crecimiento.',
            'El ejercicio regular, especialmente el ejercicio de peso-bearing como correr o levantar pesas, puede estimular la liberación de hormonas de crecimiento y contribuir al desarrollo de huesos fuertes y una postura saludable.',
            'La malnutrición, ya sea por deficiencia o exceso de nutrientes, puede afectar negativamente el crecimiento y la estatura final de una persona.',
            'Si bien la altura tiende a estabilizarse en la edad adulta, mantener un estilo de vida saludable que incluya una dieta equilibrada y ejercicio regular puede ayudar a mantener la salud ósea y postural a lo largo de la vida.'
        ]
    },
    {
        question: '¿Cuántas veces haces ejercicio a la semana?',
        answerType: 'select',
        answerKey: 'exerciseFrequency',
        options: [
            { value: '1', label: '1 vez a la semana' },
            { value: '2', label: '2 veces a la semana' },
            { value: '3', label: '3 veces a la semana' },
            { value: '4', label: '4 veces a la semana' },
            { value: '5', label: '5 veces a la semana' },
            { value: '6', label: '6 veces a la semana' },
            { value: '7', label: 'Todos los días' },
        ],
        idea: [
            'El ejercicio regular puede ayudar a mantener un peso saludable, mejorar la salud del corazón, aumentar la energía y mejorar el estado de ánimo.',
            'Es importante encontrar un equilibrio entre el ejercicio y el descanso. Demasiado ejercicio sin suficiente descanso puede llevar a lesiones y agotamiento.',
            'La variedad en tu rutina de ejercicios puede ayudar a mantener tu interés y motivación, y también puede ayudar a trabajar diferentes grupos de músculos.',
            'Si eres nuevo en el ejercicio, es una buena idea comenzar lentamente y aumentar gradualmente la frecuencia y la intensidad de tus entrenamientos.',
            'Recuerda que cualquier cantidad de ejercicio es mejor que nada. Incluso pequeñas cantidades de actividad física pueden tener beneficios para la salud.'
        ]
    },
    {
        question: '¿Tienes alguna enfermedad crónica?',
        answerType: 'text',
        answerKey: 'disease',
        placeholder: 'Escribe aquí tus enfermedades',
        idea: [
            'Las enfermedades crónicas, como la diabetes, la hipertensión y las enfermedades cardíacas, pueden requerir un manejo cuidadoso a través de la dieta, el ejercicio y la medicación.',
            'El manejo de las enfermedades crónicas puede requerir la colaboración de un equipo de atención médica, que puede incluir médicos, enfermeras, dietistas y otros profesionales de la salud.',
            'El seguimiento regular de la enfermedad y el cumplimiento del plan de tratamiento son fundamentales para controlar los síntomas y prevenir complicaciones a largo plazo.',
            'Las enfermedades crónicas pueden afectar la calidad de vida y la capacidad de realizar actividades diarias, por lo que es importante buscar apoyo emocional y social cuando sea necesario.',
            'Las enfermedades crónicas pueden requerir ajustes en la dieta y el estilo de vida, así como la toma de medicamentos según las indicaciones del médico para mantener la salud y prevenir complicaciones.'
        ]
    }
];

export default steps;