const scenarios = [
    // Escenario 1
    {
        title: "Escenario 1",
        description: "La empresa 'TecnoSoft' está experimentando un aumento inesperado en la demanda de sus productos debido a un evento tecnológico internacional. Necesitan contratar personal adicional durante cuatro meses para cubrir este pico de trabajo. ¿Qué tipo de contrato deberían utilizar?",
        image: "imagenes/escenario1.jpg",
        options: [
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: true },
            { text: "Contrato formativo para la obtención de práctica profesional", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal por circunstancias de la producción, adecuado para incrementos ocasionales e imprevisibles de la producción.",
        hint: "Piensa en contratos para necesidades temporales e imprevisibles."
    },
    // Escenario 2
    {
        title: "Escenario 2",
        description: "Una empresa necesita cubrir un puesto debido a una baja por maternidad de una de sus empleadas, por un período de 16 semanas. ¿Qué tipo de contrato es el más adecuado?",
        image: "imagenes/escenario2.jpg",
        options: [
            { text: "Contrato de interinidad (sustitución)", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo en alternancia", correct: false },
            { text: "Contrato temporal por obra o servicio", correct: false }
        ],
        feedback: "La opción correcta es el Contrato de interinidad (sustitución), utilizado para sustituir a trabajadores con derecho a reserva de puesto de trabajo.",
        hint: "Considera contratos diseñados para sustituir a trabajadores ausentes."
    },
    // Escenario 3
    {
        title: "Escenario 3",
        description: "Una compañía quiere contratar a un joven recién graduado sin experiencia laboral para formarlo durante un año mientras trabaja. ¿Qué tipo de contrato deberían ofrecerle?",
        image: "imagenes/escenario3.jpg",
        options: [
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato a tiempo parcial", correct: false }
        ],
        feedback: "La opción correcta es el Contrato formativo en alternancia, que combina formación y trabajo remunerado para adquirir experiencia profesional.",
        hint: "Busca un contrato que combine formación y empleo para jóvenes sin experiencia."
    },
    // Escenario 4
    {
        title: "Escenario 4",
        description: "La empresa 'Verano Sol' opera hoteles que solo abren durante la temporada de verano. Necesitan contratar personal que trabaje cada año durante estos meses. ¿Qué tipo de contrato es el más adecuado?",
        image: "imagenes/escenario4.jpg",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato indefinido ordinario", correct: false },
            { text: "Contrato de obra o servicio", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, ideal para trabajos de naturaleza estacional o actividades que no se repiten en fechas ciertas.",
        hint: "Considera contratos para actividades estacionales que se repiten anualmente."
    },
    // Escenario 5
    {
        title: "Escenario 5",
        description: "Una empresa de construcción contrata a un albañil para un proyecto específico de edificación que durará aproximadamente un año. ¿Qué tipo de contrato deberían utilizar?",
        image: "imagenes/escenario5.jpg",
        options: [
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato por obra o servicio determinado", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal estructural, que tras la reforma laboral, engloba situaciones antes cubiertas por el contrato por obra o servicio.",
        hint: "Busca el contrato temporal que reemplaza al antiguo de obra o servicio."
    },
    // Escenario 6
    {
        title: "Escenario 6",
        description: "Una empresa necesita reducir la jornada laboral de un empleado por mutuo acuerdo. ¿Qué tipo de contrato o modificación contractual deben realizar?",
        image: "imagenes/escenario6.jpg",
        options: [
            { text: "Contrato a tiempo parcial", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es modificar el contrato a un Contrato a tiempo parcial, ajustando la jornada laboral según lo acordado.",
        hint: "Piensa en contratos que permiten trabajar menos horas al día."
    },
    // Escenario 7
    {
        title: "Escenario 7",
        description: "Una empresa contrata a un trabajador para realizar prácticas profesionales relacionadas con sus estudios durante seis meses. ¿Qué tipo de contrato deben utilizar?",
        image: "imagenes/escenario7.jpg",
        options: [
            { text: "Contrato formativo para la obtención de práctica profesional", correct: true },
            { text: "Contrato formativo en alternancia", correct: false },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato formativo para la obtención de práctica profesional, destinado a titulados que buscan adquirir experiencia.",
        hint: "Busca contratos destinados a titulados sin experiencia laboral."
    },
    // Escenario 8
    {
        title: "Escenario 8",
        description: "Una tienda minorista necesita personal adicional durante la campaña de Navidad debido al aumento de ventas. ¿Qué tipo de contrato es más apropiado?",
        image: "imagenes/escenario8.jpg",
        options: [
            { text: "Contrato temporal por circunstancias previsibles de la producción", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal por circunstancias previsibles de la producción, adecuado para incrementos esperados de actividad.",
        hint: "Considera contratos para incrementos previsibles en la demanda."
    },
    // Escenario 9
    {
        title: "Escenario 9",
        description: "Una empresa ha contratado a un trabajador con un contrato temporal que ha superado la duración máxima permitida. ¿Qué ocurre con este contrato?",
        image: "imagenes/escenario9.jpg",
        options: [
            { text: "Se transforma en contrato indefinido automáticamente", correct: true },
            { text: "Debe renovarse el contrato temporal", correct: false },
            { text: "El trabajador debe ser despedido", correct: false },
            { text: "No ocurre nada, puede continuar temporalmente", correct: false }
        ],
        feedback: "La opción correcta es que el contrato se transforma en indefinido automáticamente al superar la duración máxima legal.",
        hint: "Piensa en las consecuencias de exceder la duración máxima de un contrato temporal."
    },
    // Escenario 10
    {
        title: "Escenario 10",
        description: "Una empresa desea contratar a un trabajador extranjero no comunitario que necesita permiso de trabajo. ¿Qué tipo de contrato deben utilizar?",
        image: "imagenes/escenario10.jpg",
        options: [
            { text: "Contrato indefinido ordinario", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato indefinido ordinario, siempre que se cumplan los requisitos legales de extranjería y permiso de trabajo.",
        hint: "Considera el tipo de contrato que ofrece mayor estabilidad y cumple con la normativa de extranjería."
    },
    // Escenario 11
    {
        title: "Escenario 11",
        description: "Un restaurante necesita contratar a camareros adicionales para cubrir los fines de semana debido al aumento de clientes en esos días. ¿Qué tipo de contrato es más adecuado?",
        image: "imagenes/escenario11.jpg",
        options: [
            { text: "Contrato a tiempo parcial", correct: true },
            { text: "Contrato indefinido a jornada completa", correct: false },
            { text: "Contrato temporal por obra o servicio", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato a tiempo parcial, permitiendo ajustar la jornada a los días de mayor actividad.",
        hint: "Piensa en contratos que permiten trabajar solo ciertos días o horas."
    },
    // Escenario 12
    {
        title: "Escenario 12",
        description: "Una empresa de eventos contrata a personal para un festival que se realiza una vez al año en fechas determinadas. ¿Qué tipo de contrato deberían utilizar?",
        image: "imagenes/escenario12.jpg",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, ideal para actividades que se repiten en fechas ciertas cada año.",
        hint: "Considera contratos para trabajos que ocurren anualmente en fechas fijas."
    },
    // Escenario 13
    {
        title: "Escenario 13",
        description: "Una empresa desea fomentar el empleo estable y contrata a un trabajador sin límite de tiempo. ¿Qué tipo de contrato deben utilizar?",
        image: "imagenes/escenario13.jpg",
        options: [
            { text: "Contrato indefinido ordinario", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato indefinido ordinario, que promueve la estabilidad laboral.",
        hint: "Piensa en el contrato que ofrece mayor estabilidad al trabajador."
    },
    // Escenario 14
    {
        title: "Escenario 14",
        description: "Un centro educativo contrata a un profesor para impartir clases durante un curso académico específico. ¿Qué tipo de contrato es más apropiado?",
        image: "imagenes/escenario14.jpg",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por obra o servicio", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, ya que la actividad se repite cíclicamente en periodos determinados.",
        hint: "Considera contratos para actividades que se repiten cada año en periodos fijos."
    },
    // Escenario 15
    {
        title: "Escenario 15",
        description: "Una empresa necesita sustituir a un empleado que ha solicitado excedencia por cuidado de hijos durante un año. ¿Qué tipo de contrato deben realizar?",
        image: "imagenes/escenario15.jpg",
        options: [
            { text: "Contrato de interinidad (sustitución)", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato de interinidad, para sustituir a un trabajador con derecho a reserva de puesto.",
        hint: "Piensa en contratos para sustituir a empleados con excedencia y reserva de puesto."
    },
    // Escenario 16
    {
        title: "Escenario 16",
        description: "Una empresa agrícola requiere trabajadores para la cosecha que se realiza una vez al año sin fecha fija. ¿Qué contrato es más adecuado?",
        image: "imagenes/escenario16.jpg",
        options: [
            { text: "Contrato fijo-discontinuo", correct: true },
            { text: "Contrato temporal por circunstancias de la producción", correct: false },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato fijo-discontinuo, para actividades estacionales que no se repiten en fechas ciertas.",
        hint: "Considera contratos para actividades estacionales con fechas variables."
    },
    // Escenario 17
    {
        title: "Escenario 17",
        description: "Una empresa contrata a un trabajador para desarrollar un proyecto de investigación cuya duración exacta es incierta pero estimada en dos años. ¿Qué tipo de contrato deberían utilizar?",
        image: "imagenes/escenario17.jpg",
        options: [
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "La opción correcta es el Contrato temporal estructural, adecuado para situaciones de duración incierta pero temporal.",
        hint: "Busca contratos temporales para proyectos específicos de duración estimada."
    },
    // Escenario 18
    {
        title: "Escenario 18",
        description: "Una empresa de tecnología quiere contratar a un estudiante para que trabaje medio tiempo mientras termina sus estudios universitarios. ¿Qué tipo de contrato es apropiado?",
        image: "imagenes/escenario18.jpg",
        options: [
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "La opción correcta es el Contrato formativo en alternancia, que combina formación y trabajo para estudiantes.",
        hint: "Considera contratos que permiten combinar estudios y trabajo."
    },
    // Escenario 19
    {
        title: "Escenario 19",
        description: "Una empresa necesita cubrir un puesto vacante definitivamente, pero quiere establecer un periodo de prueba de seis meses. ¿Qué contrato deben utilizar?",
        image: "imagenes/escenario19.jpg",
        options: [
            { text: "Contrato indefinido ordinario con periodo de prueba", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "La opción correcta es el Contrato indefinido ordinario estableciendo un periodo de prueba según lo permitido por la ley.",
        hint: "Piensa en contratos estables que permiten un periodo de prueba."
    },
    // Escenario 20
    {
        title: "Escenario 20",
        description: "Una empresa ha detectado fraude en la contratación temporal, utilizando contratos temporales en puestos que deberían ser indefinidos. ¿Qué consecuencias legales puede enfrentar?",
        image: "imagenes/escenario20.jpg",
        options: [
            { text: "Transformación de los contratos en indefinidos y posibles sanciones", correct: true },
            { text: "Despido de los trabajadores temporales sin consecuencias", correct: false },
            { text: "No ocurre nada mientras los contratos estén vigentes", correct: false },
            { text: "La empresa puede renovar los contratos temporales indefinidamente", correct: false }
        ],
        feedback: "La opción correcta es que los contratos se transforman en indefinidos y la empresa puede enfrentar sanciones por fraude en la contratación.",
        hint: "Considera las consecuencias legales del uso indebido de contratos temporales."
    }
];
  // Escenario 21
    {
        title: "Escenario 21",
        description: "Una empresa de publicidad ha ganado un contrato para una campaña que durará nueve meses. Necesita personal creativo adicional durante este periodo. ¿Qué tipo de contrato es más apropiado?",
        options: [
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato temporal estructural es adecuado para proyectos con duración determinada como una campaña específica.",
        hint: "Busca un contrato temporal para proyectos específicos."
    },
    // Escenario 22
    {
        title: "Escenario 22",
        description: "Una universidad quiere contratar a un investigador postdoctoral por dos años para un proyecto financiado externamente. ¿Qué tipo de contrato deberían utilizar?",
        options: [
            { text: "Contrato temporal por obra o servicio determinado", correct: false },
            { text: "Contrato temporal estructural", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo en alternancia", correct: false }
        ],
        feedback: "El Contrato temporal estructural es adecuado para proyectos de investigación con financiación y duración determinadas.",
        hint: "Considera contratos temporales para proyectos de investigación."
    },
    // Escenario 23
    {
        title: "Escenario 23",
        description: "Una empresa quiere incentivar la contratación de personas con discapacidad. ¿Qué tipo de contrato puede ofrecer para fomentar su inclusión laboral?",
        options: [
            { text: "Contrato indefinido para personas con discapacidad", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato indefinido para personas con discapacidad ofrece beneficios para la empresa y estabilidad para el trabajador.",
        hint: "Busca contratos que promuevan la inclusión de colectivos específicos."
    },
    // Escenario 24
    {
        title: "Escenario 24",
        description: "Un empleado solicita reducir su jornada para cuidar de un familiar enfermo. ¿Qué tipo de modificación contractual se debe realizar?",
        options: [
            { text: "Pacto de reducción de jornada por guarda legal", correct: true },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato de relevo", correct: false }
        ],
        feedback: "La reducción de jornada por guarda legal permite al trabajador ajustar su horario para cuidados familiares.",
        hint: "Piensa en derechos laborales relacionados con la conciliación familiar."
    },
    // Escenario 25
    {
        title: "Escenario 25",
        description: "Una empresa necesita contratar a un trabajador desempleado de larga duración y desea aprovechar incentivos fiscales. ¿Qué contrato debería utilizar?",
        options: [
            { text: "Contrato indefinido de apoyo a los emprendedores", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato a tiempo parcial", correct: false }
        ],
        feedback: "El Contrato indefinido de apoyo a los emprendedores ofrece incentivos para contratar a desempleados de larga duración.",
        hint: "Busca contratos con incentivos para contratar a personas desempleadas."
    },
    // Escenario 26
    {
        title: "Escenario 26",
        description: "Un trabajador se jubila parcialmente y la empresa necesita cubrir el resto de su jornada. ¿Qué tipo de contrato deben realizar?",
        options: [
            { text: "Contrato de relevo", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato de relevo es adecuado para sustituir la jornada dejada vacante por un trabajador en jubilación parcial.",
        hint: "Piensa en contratos diseñados para situaciones de jubilación parcial."
    },
    // Escenario 27
    {
        title: "Escenario 27",
        description: "Una empresa del sector tecnológico quiere contratar a un experto extranjero de alta cualificación. ¿Qué tipo de permiso y contrato necesitan?",
        options: [
            { text: "Permiso de trabajo y Contrato indefinido", correct: true },
            { text: "No necesita permiso y Contrato temporal", correct: false },
            { text: "Permiso de estudiante y Contrato formativo", correct: false },
            { text: "Permiso de turista y Contrato a tiempo parcial", correct: false }
        ],
        feedback: "Se requiere un permiso de trabajo y un Contrato indefinido o de alta dirección para expertos extranjeros.",
        hint: "Considera los requisitos para contratar a profesionales extranjeros cualificados."
    },
    // Escenario 28
    {
        title: "Escenario 28",
        description: "Una empresa quiere formar a un empleado en una nueva tecnología mientras trabaja. ¿Qué contrato es más adecuado?",
        options: [
            { text: "Contrato formativo para la obtención de práctica profesional", correct: false },
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false }
        ],
        feedback: "El Contrato formativo en alternancia permite combinar trabajo remunerado con formación teórica y práctica.",
        hint: "Busca contratos que permitan formación y trabajo simultáneamente."
    },
    // Escenario 29
    {
        title: "Escenario 29",
        description: "Un trabajador ha estado encadenando contratos temporales en la misma empresa por más de 24 meses en un periodo de 30 meses. ¿Qué ocurre legalmente?",
        options: [
            { text: "Su contrato se convierte en indefinido", correct: true },
            { text: "Continúa como temporal", correct: false },
            { text: "Debe ser despedido", correct: false },
            { text: "No ocurre nada mientras firme nuevos contratos", correct: false }
        ],
        feedback: "La ley establece que tras cierto tiempo encadenando contratos temporales, el trabajador adquiere la condición de indefinido.",
        hint: "Considera las limitaciones legales al encadenamiento de contratos temporales."
    },
    // Escenario 30
    {
        title: "Escenario 30",
        description: "Una empresa agrícola necesita trabajadores para una cosecha puntual debido a un pedido excepcional. ¿Qué tipo de contrato debe utilizar?",
        options: [
            { text: "Contrato temporal por circunstancias imprevisibles de la producción", correct: true },
            { text: "Contrato fijo-discontinuo", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato de interinidad", correct: false }
        ],
        feedback: "El Contrato temporal por circunstancias imprevisibles es adecuado para incrementos ocasionales y no previstos de actividad.",
        hint: "Piensa en contratos para necesidades temporales inesperadas."
    },
    // Escenario 31
    {
        title: "Escenario 31",
        description: "Una empresa quiere contratar a un trabajador a distancia de forma permanente. ¿Qué tipo de contrato y qué condiciones deben considerar?",
        options: [
            { text: "Contrato indefinido con acuerdo de trabajo a distancia", correct: true },
            { text: "Contrato temporal por obra o servicio", correct: false },
            { text: "Contrato a tiempo parcial", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "Se debe realizar un Contrato indefinido y establecer un acuerdo de trabajo a distancia según la normativa vigente.",
        hint: "Considera la normativa sobre teletrabajo y contratos permanentes."
    },
    // Escenario 32
    {
        title: "Escenario 32",
        description: "Una empresa contrata a un menor de 18 años que no ha finalizado la educación obligatoria. ¿Qué contrato puede ofrecerle?",
        options: [
            { text: "Contrato formativo en alternancia", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "No puede contratarlo legalmente", correct: false }
        ],
        feedback: "El Contrato formativo en alternancia es adecuado para menores que pueden trabajar mientras completan su formación.",
        hint: "Busca contratos que permitan trabajar y estudiar simultáneamente para menores."
    },
    // Escenario 33
    {
        title: "Escenario 33",
        description: "Una empresa desea contratar a un trabajador para sustituir a otro que va a realizar formación interna durante dos meses. ¿Qué tipo de contrato debe utilizar?",
        options: [
            { text: "Contrato de interinidad por sustitución", correct: true },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato formativo", correct: false },
            { text: "Contrato a tiempo parcial", correct: false }
        ],
        feedback: "El Contrato de interinidad por sustitución es adecuado para cubrir temporalmente el puesto de un trabajador en formación.",
        hint: "Piensa en contratos para sustituir temporalmente a empleados ausentes."
    },
    // Escenario 34
    {
        title: "Escenario 34",
        description: "Una empresa tiene picos de producción previsibles cada fin de mes. ¿Qué contrato es más adecuado para contratar personal en esos periodos?",
        options: [
            { text: "Contrato temporal por circunstancias previsibles de la producción", correct: true },
            { text: "Contrato fijo-discontinuo", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato temporal por circunstancias previsibles es ideal para atender incrementos periódicos y programados de actividad.",
        hint: "Considera contratos para aumentos de trabajo que se pueden anticipar."
    },
    // Escenario 35
    {
        title: "Escenario 35",
        description: "Un trabajador con contrato temporal ha sufrido un accidente laboral y estará de baja por un mes. ¿Qué puede hacer la empresa respecto a su contrato?",
        options: [
            { text: "Mantener el contrato y contratar a otro con contrato de interinidad", correct: true },
            { text: "Rescindir el contrato temporal", correct: false },
            { text: "Convertir su contrato en indefinido", correct: false },
            { text: "No puede hacer nada hasta que regrese", correct: false }
        ],
        feedback: "La empresa puede contratar a un sustituto mediante un Contrato de interinidad mientras el trabajador está de baja.",
        hint: "Piensa en opciones legales para cubrir una baja temporal."
    },
    // Escenario 36
    {
        title: "Escenario 36",
        description: "Una empresa quiere contratar a un estudiante para prácticas no laborales. ¿Qué tipo de convenio o contrato debe establecer?",
        options: [
            { text: "Convenio de prácticas con centro educativo", correct: true },
            { text: "Contrato formativo en alternancia", correct: false },
            { text: "Contrato temporal", correct: false },
            { text: "Contrato a tiempo parcial", correct: false }
        ],
        feedback: "Las prácticas no laborales se regulan mediante convenios entre la empresa y el centro educativo, no mediante contratos laborales.",
        hint: "Considera acuerdos educativos para prácticas no remuneradas."
    },
    // Escenario 37
    {
        title: "Escenario 37",
        description: "Una empresa necesita personal para cubrir un exceso de pedidos debido a una situación excepcional no previsible. ¿Qué contrato debe utilizar?",
        options: [
            { text: "Contrato temporal por circunstancias imprevisibles de la producción", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato fijo-discontinuo", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato temporal por circunstancias imprevisibles es adecuado para atender necesidades temporales excepcionales.",
        hint: "Piensa en contratos para situaciones excepcionales y no previstas."
    },
    // Escenario 38
    {
        title: "Escenario 38",
        description: "Un empleado solicita una excedencia voluntaria por motivos personales durante un año. ¿Qué debe hacer la empresa si quiere cubrir su puesto mientras tanto?",
        options: [
            { text: "Realizar un Contrato de interinidad por sustitución", correct: true },
            { text: "Contratar temporalmente a alguien", correct: false },
            { text: "No puede cubrir el puesto", correct: false },
            { text: "Despedir al empleado en excedencia", correct: false }
        ],
        feedback: "El Contrato de interinidad por sustitución permite cubrir el puesto de un trabajador en excedencia con reserva de puesto.",
        hint: "Considera contratos para sustituir a empleados con derecho a reincorporación."
    },
    // Escenario 39
    {
        title: "Escenario 39",
        description: "Una empresa quiere contratar a un grupo de trabajadores para una campaña específica que dura tres semanas. ¿Qué tipo de contrato debe utilizar?",
        options: [
            { text: "Contrato temporal de muy corta duración", correct: true },
            { text: "Contrato indefinido", correct: false },
            { text: "Contrato de interinidad", correct: false },
            { text: "Contrato formativo", correct: false }
        ],
        feedback: "El Contrato temporal de muy corta duración es adecuado para trabajos esporádicos de menos de cuatro semanas.",
        hint: "Busca contratos diseñados para periodos muy breves de trabajo."
    },
    // Escenario 40
    {
        title: "Escenario 40",
        description: "Una empresa ha decidido externalizar un servicio y contratar a un autónomo para realizarlo. ¿Qué tipo de relación contractual deben establecer?",
        options: [
            { text: "Contrato de arrendamiento de servicios con un autónomo", correct: true },
            { text: "Contrato laboral temporal", correct: false },
            { text: "Contrato indefinido", correct: false },
            { text: "No es necesario ningún contrato", correct: false }
        ],
        feedback: "Al contratar a un autónomo, se establece un contrato mercantil de arrendamiento de servicios, no un contrato laboral.",
        hint: "Considera la diferencia entre contratos laborales y mercantiles."
    }
];

let currentScenario = 0;
let score = 0;
let timer;
let timeLeft = 30;
let mode = 'practica';

function startGame(selectedMode) {
    mode = selectedMode;
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    shuffle(scenarios);
    loadScenario(currentScenario);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

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
    document.getElementById('hint-button').disabled = false;
    document.getElementById('hint-button').style.display = mode === 'practica' ? 'inline-block' : 'none';

    if (mode === 'examen') {
        startTimer();
    } else {
        document.getElementById('timer').style.display = 'none';
    }
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('timer').innerText = 'Tiempo restante: ' + timeLeft + 's';
    document.getElementById('timer').style.display = 'block';
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerText = 'Tiempo restante: ' + timeLeft + 's';
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').innerText = 'Tiempo agotado.';
            document.getElementById('next-button').style.display = 'block';
            disableOptions();
        }
    }, 1000);
}

function selectOption(isCorrect, feedback) {
    if (mode === 'examen') {
        clearInterval(timer);
    }

    if (isCorrect) {
        score++;
        document.getElementById('feedback').innerText = '¡Correcto! ' + feedback;
        document.getElementById('feedback').classList.add('correct-answer');
        document.getElementById('correct-sound').play();
    } else {
        document.getElementById('feedback').innerText = 'Incorrecto. ' + feedback;
        document.getElementById('feedback').classList.add('incorrect-answer');
        document.getElementById('incorrect-sound').play();
    }
    document.getElementById('score').innerText = 'Puntuación: ' + score;
    document.getElementById('next-button').style.display = 'block';

    disableOptions();
}

function disableOptions() {
    const buttons = document.querySelectorAll('#options-list button');
    buttons.forEach(button => button.disabled = true);
}

function nextScenario() {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        document.getElementById('feedback').classList.remove('correct-answer', 'incorrect-answer');
        loadScenario(currentScenario);
    } else {
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('end-game').style.display = 'block';
        document.getElementById('final-score').innerText = score + '/' + scenarios.length;
        showLeaderboard();
    }
}

function saveScore() {
    const name = document.getElementById('player-name').value;
    if (name) {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        leaderboard.push({ name: name, score: score });
        leaderboard.sort((a, b) => b.score - a.score);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        showLeaderboard();
        document.getElementById('player-name').value = '';
    }
}

function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';
    leaderboard.forEach(entry => {
        const li = document.createElement('li');
        li.innerText = `${entry.name}: ${entry.score}`;
        leaderboardElement.appendChild(li);
    });
}

function showHint() {
    const scenario = scenarios[currentScenario];
    if (scenario.hint) {
        document.getElementById('feedback').innerText = 'Pista: ' + scenario.hint;
        document.getElementById('hint-button').disabled = true;
    }
}

// Iniciar el juego al seleccionar el modo
// window.onload = () => {
//     startGame('practica');
// };
// Variables globales
let currentScenario = 0;
let score = 0;
let timer;
let timeLeft = 30;
let mode = 'practica';

function startGame(selectedMode) {
    mode = selectedMode;
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    shuffle(scenarios);
    loadScenario(currentScenario);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadScenario(index) {
    const scenario = scenarios[index];
    document.getElementById('scenario-title').innerText = scenario.title;
    document.getElementById('scenario-description').innerText = scenario.description;

    if (scenario.image) {
        document.getElementById('scenario-image').src = scenario.image;
        document.getElementById('scenario-image').style.display = 'block';
    } else {
        document.getElementById('scenario-image').style.display = 'none';
    }

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
    document.getElementById('hint-button').disabled = false;
    document.getElementById('hint-button').style.display = mode === 'practica' ? 'inline-block' : 'none';

    if (mode === 'examen') {
        startTimer();
    } else {
        document.getElementById('timer').style.display = 'none';
    }
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('timer').innerText = 'Tiempo restante: ' + timeLeft + 's';
    document.getElementById('timer').style.display = 'block';
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').innerText = 'Tiempo restante: ' + timeLeft + 's';
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('feedback').innerText = 'Tiempo agotado.';
            document.getElementById('next-button').style.display = 'block';
            disableOptions();
        }
    }, 1000);
}

function selectOption(isCorrect, feedback) {
    if (mode === 'examen') {
        clearInterval(timer);
    }

    if (isCorrect) {
        score++;
        document.getElementById('feedback').innerText = '¡Correcto! ' + feedback;
        document.getElementById('feedback').classList.add('correct-answer');
        document.getElementById('correct-sound').play();
    } else {
        document.getElementById('feedback').innerText = 'Incorrecto. ' + feedback;
        document.getElementById('feedback').classList.add('incorrect-answer');
        document.getElementById('incorrect-sound').play();
    }
    document.getElementById('score').innerText = 'Puntuación: ' + score;
    document.getElementById('next-button').style.display = 'block';

    disableOptions();
}

function disableOptions() {
    const buttons = document.querySelectorAll('#options-list button');
    buttons.forEach(button => button.disabled = true);
}

function nextScenario() {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        document.getElementById('feedback').classList.remove('correct-answer', 'incorrect-answer');
        loadScenario(currentScenario);
    } else {
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('end-game').style.display = 'block';
        document.getElementById('final-score').innerText = score + '/' + scenarios.length;
        showLeaderboard();
    }
}

function saveScore() {
    const name = document.getElementById('player-name').value;
    if (name) {
        const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        leaderboard.push({ name: name, score: score });
        leaderboard.sort((a, b) => b.score - a.score);
        localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
        showLeaderboard();
        document.getElementById('player-name').value = '';
    }
}

function showLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardElement = document.getElementById('leaderboard');
    leaderboardElement.innerHTML = '';
    leaderboard.forEach(entry => {
        const li = document.createElement('li');
        li.innerText = `${entry.name}: ${entry.score}`;
        leaderboardElement.appendChild(li);
    });
}

function showHint() {
    const scenario = scenarios[currentScenario];
    if (scenario.hint) {
        document.getElementById('feedback').innerText = 'Pista: ' + scenario.hint;
        document.getElementById('hint-button').disabled = true;
    }
}

// Iniciar el juego al seleccionar el modo
// window.onload = () => {
//     startGame('practica');
// };
