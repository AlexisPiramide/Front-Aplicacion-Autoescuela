import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import PreguntaRespuestaExamen from "./PreguntaRespuestaExamen";

export default function RespuestasExamen() {

    const [, , , , examen] = useOutletContext();
    
    const Examen = examen.examen;
    const Respuestas = examen.respuestas.respuestas;

    return (
        <>
            {examen.examen != undefined ? Examen.map((pregunta, index) => (
                <PreguntaRespuestaExamen pregunta={pregunta} respuesta={Respuestas[index]} key={index} />
            )) : ''}
        </>
    )
}