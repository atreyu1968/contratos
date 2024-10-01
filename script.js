const scenarios = [
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
    // Puedes agregar más escenarios aquí
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

