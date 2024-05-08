import MuestraPaginas from "./MuestraPaginas";
import React, { useEffect, useState } from 'react'
import Pregunta from './Pregunta'

import { postRespuestas } from '../../../services/services.examenes'
import { useOutletContext } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

export default function ExamenPaginado() {

    const navigate = useNavigate();

    const [usuario] = useOutletContext();
    const [, , examen] = useOutletContext();

    const [respuestas, setRespuestas] = useState([])

    const [validar, setValidar] = useState(false)

    useEffect(() => {
        if (respuestas.length !== examen.preguntas.length || respuestas.some(respuesta => respuesta === undefined)) {
            setValidar(false)
        } else {
            setValidar(true)
        }
    }, [respuestas]);

    useEffect(() => {
        console.log(validar)
    }, [validar])

    const enviarRespuestas = async (e) => {
        e.preventDefault()
         
        try {
            const result = await postRespuestas(respuestas, examen.id, usuario)
            navigate("/examenes");
        }catch(error){
            console.log(error)
            navigate("/examenes");
        } 
    }
    
    const [paginaActual, setPaginaActual] = useState(1)

    return (
        <div className="secion-pregunta">
            <MuestraPaginas paginaActual={paginaActual} setPaginaActual={setPaginaActual}/>
            <Pregunta pregunta={examen[paginaActual]} respuestas={respuestas} setRespuestas={setRespuestas} numeroPregunta={numeroPregunta} />
        
            {examen != undefined ?
                (!validar) ?
                    <button style={{ backgroundColor: 'gray' }} disabled={true}>Enviar Respuestas</button>
                    :
                    <button onClick={(e) => enviarRespuestas(e)} style={{ backgroundColor: 'blue' }}>Enviar Respuestas</button>
                : ''
            }
        </div>
    )

}