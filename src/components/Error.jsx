import './Error.css'

export function Error() {
    return(
        <div className='container-error'>
            Hubo un error en la busqueda, a continuacion se mencionan los posibles errores:
           <ol className='error-items'>
            <li>El personaje ingresado no existe.</li>
            <li>El personaje no fue buscado en idioma ingles.</li>
            <li>Error en la carga de la API, intente actualizar el navegador.</li>
           </ol>
           <br />
           Puede recargar los personajes nuevamente tocando el boton gris. 
        </div>
    );
};