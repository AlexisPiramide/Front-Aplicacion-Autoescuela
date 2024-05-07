import { useEffect, useState } from "react";
import "../../../style/Pregunta.css"
import BotonPregunta from './BotonPregunta'
export default function preguntas({ pregunta, respuestas, setRespuestas, numeroPregunta}) {

    const [selecionada, setSelecionada] = useState(null);

    const [resultado, setResultado] = useState(false);

    return (
        <div className="secion-pregunta">
            <h2 className="Pregunta">{pregunta.texto}</h2>
            <ul>
                {pregunta.opciones.map((opcion, index) => (
                <BotonPregunta numeroPregunta={numeroPregunta} key={index} index={index} opcion={opcion} selecionada={selecionada} setSelecionada={setSelecionada} setRespuestas={setRespuestas}/>
            ))}
            </ul>
        </div>
    )


}