import './Pagination.css'

export function Pagination({ numeroPagina , seteaPagina, personajes }){

    const cambiarValor = (numero) => {
		if (!personajes.info.prev && numeroPagina + numero <= 0) return;
		if (!personajes.info.next && numeroPagina + numero >= personajes.info.pages) return;

		seteaPagina(numeroPagina + numero);
	};

    return(
        <div className='container-pagination'>
            <button onClick={() => cambiarValor(-1)}>Previous</button>
                <div className='number-page'> | {numeroPagina} | </div>
            <button  onClick={() => cambiarValor(1)}>Next</button>
        </div>
    );
};