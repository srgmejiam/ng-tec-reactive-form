interface Pregunta {
    descripcion: string;
    opciones: Array<string>
}

export interface Encuesta {
    nombre: string;
    preguntas: Array<Pregunta>
}
