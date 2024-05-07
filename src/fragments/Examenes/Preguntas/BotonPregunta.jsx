import React, { useEffect, useState } from 'react';

export default function BotonPregunta({ index, opcion, numeroPregunta, setRespuestas, selecionada, setSelecionada}) {

    const escribirRespuesta = (e, index) => {
        setRespuestas((prevRespuestas) => {
            const updatedRespuestas = [...prevRespuestas];
            updatedRespuestas[numeroPregunta] = Number(index + 1);
            return updatedRespuestas;
        });
        setSelecionada(Number(index + 1));
    };



    return (
        <li key={index + 1}>

            <button
                id={index + 1}
                onClick={(e) => escribirRespuesta(e, index)}
                style={{
                    backgroundColor: selecionada === Number(index + 1) ? 'green' : '',
                }}>
                {opcion}
            </button>
        </li >
        );

}