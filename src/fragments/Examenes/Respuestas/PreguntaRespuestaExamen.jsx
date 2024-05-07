import { useEffect, useState } from "react";
import "../../../style/Respuestas.css"

export default function PreguntaRespuestaExamen({ pregunta, respuesta }) {

    return (
        <div className="secion-pregunta">
            <h2 className="Pregunta">{pregunta.texto}</h2>
            {console.log(respuesta)}
            <ul>



                {respuesta.opciones.map((opcion, index) => (
                    (respuesta.correcta == index) ?
                        (respuesta.respuesta == respuesta.correcta) ?
                            <button style={{ backgroundColor: 'green' }} key={index}>{opcion}</button>
                            :
                            <button style={{ backgroundColor: 'blue' }} key={index}>{opcion}</button>
                        :
                        (respuesta.respuesta == index) ?
                            <button key={index} style={{ backgroundColor: 'red' }}>{opcion}</button>
                            :
                            <button key={index} style={{ backgroundColor: 'gray' }}>{opcion}</button>
                ))}
                <h3>Explicación: {pregunta.explicacion}</h3>
            </ul>

        </div>
    )


}