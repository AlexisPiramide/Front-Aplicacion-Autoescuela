export default function ListaBotonesPreguntas({preguntas}) {
    
    return (
        <div>
            {preguntas.forEach(pregunta => {
                <button id={pregunta.id}>{pregunta.id}</button>
            })}    
        </div>
    )
}