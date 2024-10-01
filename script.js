const scenarios = [
    // Escenario 1
    {
        title: "Escenario 1",
        description: "La empresa 'TecnoSoft' está experimentando un aumento inesperado en la demanda de sus productos debido a un evento tecnológico internacional. Necesitan contratar personal adicional durante cuatro meses para cubrir este pico de trabajo. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: true },
            { text: "Contrato formativo para la obtención de práctica profesional", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal por circunstancias de la producción, adecuado para incrementos ocasionales e imprevisibles de la producción."
    },
    // Escenario 2
    {
        title: "Escenario 2",
        description: "Una empresa necesita cubrir un puesto debido a una baja por maternidad de una de sus empleadas, por un período de 16 semanas. ¿Qué tipo de contrato es el más adecuado?",
        options: [
            { text: "Contrato de interinidad (sustitución)", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo en alternancia", correct: false },
            { text: "Contrato temporal por obra o servicio", correct: false }
        ],
        feedback: "La opción correcta es el Contrato de interinidad (sustitución), utilizado para sustituir a trabajadores con derecho a reserva de puesto de trabajo."
    },
    // Escenario 3
    {
        title: "Escenario 3",
        description: "Una compañía quiere contratar a un joven recién graduado sin experiencia laboral para formarlo durante un año mientras trabaja. ¿Qué tipo de contrato deberían ofrecerle?",
        options: [
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato a tiempo parcial", correct: false }
        ],
        feedback: "La opción correcta es el Contrato formativo en alternancia, que combina formación y trabajo remunerado para adquirir experiencia profesional."
    },
    // Escenario 4
    {
        title: "Escenario 4",
        description: "La empresa 'Verano Sol' opera hoteles que solo abren durante la temporada de verano. Necesitan contratar personal que trabaje cada año durante estos meses. ¿Qué tipo de contrato es el más adecuado?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato indefinido ordinario", correct: false },
            { text: "Contrato de obra o servicio", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, ideal para trabajos de naturaleza estacional o actividades que no se repiten en fechas ciertas."
    },
    // Escenario 5
    {
        title: "Escenario 5",
        description: "Una empresa de construcción contrata a un albañil para un proyecto específico de edificación que durará aproximadamente un año. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato por obra o servicio determinado", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal estructural, que tras la reforma laboral, engloba situaciones antes cubiertas por el contrato por obra o servicio."
    },
    // Escenario 6
    {
        title: "Escenario 6",
        description: "Una empresa necesita reducir la jornada laboral de un empleado por mutuo acuerdo. ¿Qué tipo de contrato o modificación contractual deben realizar?",
        options: [
            { text: "Contrato a tiempo parcial", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es modificar el contrato a un Contrato a tiempo parcial, ajustando la jornada laboral según lo acordado."
    },
    // Escenario 7
    {
        title: "Escenario 7",
        description: "Una empresa contrata a un trabajador para realizar prácticas profesionales relacionadas con sus estudios durante seis meses. ¿Qué tipo de contrato deben utilizar?",
        options: [
            { text: "Contrato formativo para la obtención de práctica profesional", correct: true },
            { text: "Contrato formativo en alternancia", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato formativo para la obtención de práctica profesional, destinado a titulados que buscan adquirir experiencia."
    },
    // Escenario 8
    {
        title: "Escenario 8",
        description: "Una tienda minorista necesita personal adicional durante la campaña de Navidad debido al aumento de ventas. ¿Qué tipo de contrato es más apropiado?",
        options: [
            { text: "Contrato temporal por circunstancias previsibles de la producción", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal por circunstancias previsibles de la producción, adecuado para incrementos esperados de actividad."
    },
    // Escenario 9
    {
        title: "Escenario 9",
        description: "Una empresa ha contratado a un trabajador con un contrato temporal que ha superado la duración máxima permitida. ¿Qué ocurre con este contrato?",
        options: [
            { text: "Se transforma en contrato indefinido automáticamente", correct: true },
            { text: "Debe renovarse el contrato temporal", correct: false },
            { text: "El trabajador debe ser despedido", correct: false },
            { text: "No ocurre nada, puede continuar temporalmente", correct: false }
        ],
        feedback: "La opción correcta es que el contrato se transforma en indefinido automáticamente al superar la duración máxima legal."
    },
    // Escenario 10
    {
        title: "Escenario 10",
        description: "Una empresa desea contratar a un trabajador extranjero no comunitario que necesita permiso de trabajo. ¿Qué tipo de contrato deben utilizar?",
        options: [
            { text: "Contrato indefinido ordinario", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato indefinido ordinario, siempre que se cumplan los requisitos legales de extranjería y permiso de trabajo."
    },
    // Escenario 11
    {
        title: "Escenario 11",
        description: "Un restaurante necesita contratar a camareros adicionales para cubrir los fines de semana debido al aumento de clientes en esos días. ¿Qué tipo de contrato es más adecuado?",
        options: [
            { text: "Contrato a tiempo parcial", correct: true },
            { text: "Contrato indefinido a jornada completa", correct: false },
            { text: "Contrato temporal por obra o servicio", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato a tiempo parcial, permitiendo ajustar la jornada a los días de mayor actividad."
    },
    // Escenario 12
    {
        title: "Escenario 12",
        description: "Una empresa de eventos contrata a personal para un festival que se realiza una vez al año en fechas determinadas. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, ideal para actividades que se repiten en fechas ciertas cada año."
    },
    // Escenario 13
    {
        title: "Escenario 13",
        description: "Una empresa desea fomentar el empleo estable y contrata a un trabajador sin límite de tiempo. ¿Qué tipo de contrato deben utilizar?",
        options: [
            { text: "Contrato indefinido ordinario", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato indefinido ordinario, que promueve la estabilidad laboral."
    },
    // Escenario 14
    {
        title: "Escenario 14",
        description: "Un centro educativo contrata a un profesor para impartir clases durante un curso académico específico. ¿Qué tipo de contrato es más apropiado?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por obra o servicio", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, ya que la actividad se repite cíclicamente en periodos determinados."
    },
    // Escenario 15
    {
        title: "Escenario 15",
        description: "Una empresa necesita sustituir a un empleado que ha solicitado excedencia por cuidado de hijos durante un año. ¿Qué tipo de contrato deben realizar?",
        options: [
            { text: "Contrato de interinidad (sustitución)", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato de interinidad, para sustituir a un trabajador con derecho a reserva de puesto."
    },
    // Escenario 16
    {
        title: "Escenario 16",
        description: "Una empresa agrícola requiere trabajadores para la cosecha que se realiza una vez al año sin fecha fija. ¿Qué contrato es más adecuado?",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, para actividades estacionales que no se repiten en fechas ciertas."
    },
    // Escenario 17
    {
        title: "Escenario 17",
        description: "Una empresa contrata a un trabajador para desarrollar un proyecto de investigación cuya duración exacta es incierta pero estimada en dos años. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal estructural, adecuado para situaciones de duración incierta pero temporal."
    },
    // Escenario 18
    {
        title: "Escenario 18",
        description: "Una empresa de tecnología quiere contratar a un estudiante para que trabaje medio tiempo mientras termina sus estudios universitarios. ¿Qué tipo de contrato es apropiado?",
        options: [
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato formativo en alternancia, que combina formación y trabajo para estudiantes."
    },
    // Escenario 19
    {
        title: "Escenario 19",
        description: "Una empresa necesita cubrir un puesto vacante definitivamente, pero quiere establecer un periodo de prueba de seis meses. ¿Qué contrato deben utilizar?",
        options: [
            { text: "Contrato indefinido ordinario con periodo de prueba", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato indefinido ordinario estableciendo un periodo de prueba según lo permitido por la ley."
    },
    // Escenario 20
    {
        title: "Escenario 20",
        description: "Una empresa ha detectado fraude en la contratación temporal, utilizando contratos temporales en puestos que deberían ser indefinidos. ¿Qué consecuencias legales puede enfrentar?",
        options: [
            { text: "Transformación de los contratos en indefinidos y posibles sanciones", correct: true },
            { text: "Despido de los trabajadores temporales sin consecuencias", correct: false },
            { text: "No ocurre nada mientras los contratos estén vigentes", correct: false },
            { text: "La empresa puede renovar los contratos temporales indefinidamente", correct: false }
        ],
        feedback: "La opción correcta es que los contratos se transforman en indefinidos y la empresa puede enfrentar sanciones por fraude en la contratación."
    }
];

let currentScenario = 0;

function loadScenario(index) {
    const scenario = scenarios[index];
    document.getElementById('scenario-title').innerText = scenario.title;
    document.getElementById('scenario-description').innerText = scenario.description;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';

    scenario.options.forEach((option, i) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.innerText = option.text;
        button.onclick = () => selectOption(option.correct, scenario.feedback);
        li.appendChild(button);
        optionsList.appendChild(li);
    });

    document.getElementById('feedback').innerText = '';
    document.getElementById('next-button').style.display = 'none';
}

function selectOption(isCorrect, feedback) {
    if (isCorrect) {
        document.getElementById('feedback').innerText = '¡Correcto! ' + feedback;
    } else {
        document.getElementById('feedback').innerText = 'Incorrecto. ' + feedback;
    }
    document.getElementById('next-button').style.display = 'block';

    // Deshabilitar botones después de seleccionar una opción
    const buttons = document.querySelectorAll('#options-list button');
    buttons.forEach(button => button.disabled = true);
}

function nextScenario() {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        loadScenario(currentScenario);
    } else {
        document.getElementById('game-container').innerHTML = '<h2>¡Has completado todos los escenarios!</h2>';
    }
}

// Cargar el primer escenario al iniciar
window.onload = () => {
    loadScenario(currentScenario);
};
