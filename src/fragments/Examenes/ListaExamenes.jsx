import { useOutletContext } from "react-router-dom";
import { getExamenes } from '../../services/services.examenes'
import ExamenBoton from "./ExamenBoton"
import { useEffect, useState } from "react";
export default function ListaExamenes() {

    const [usuario, setUsuario] = useOutletContext();
    const [, , , recarga] = useOutletContext();


    const [examenes, setExamenes] = useState([])

    useEffect(() => {
        if (usuario) {
            recogeExamenes(usuario)
        }
    }, [usuario, recarga])

    const recogeExamenes = async () => {
        const result = await getExamenes(usuario)
        setExamenes(result)
    }


    return (
        <>
            {examenes.map((examenDibujar, index) => (
                <ExamenBoton key={index} examenDibujar={examenDibujar} usuario={usuario} />
            ))}
        </>
    )

}
