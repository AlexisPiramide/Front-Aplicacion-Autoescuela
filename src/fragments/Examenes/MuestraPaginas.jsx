export default function MuestraPaginas ({paginas, paginaActual, setPaginaActual}) {
    

    
    
    return (
        <div className="paginas">
            {paginas.map((pagina, index) => (
                <button key={index+1} onClick={() => setPaginaActual(index+1)}></button>
            ))}
        </div>
    )
}