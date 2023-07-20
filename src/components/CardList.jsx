import { useEffect, useState } from 'react'
import { Card } from './Card'
import { Error } from './Error';
import { Pagination } from './Pagination';
import { Navbar } from './Navbar';
import * as API from '../services/API'
import './CardList.css'

export function CardList() {

	const [personajes, setPersonajes] = useState({});
	const [pagina, setPagina] = useState(1);
	const [textoBuscado, seteaTextoBuscado] = useState("");

	useEffect(() => {
		API.getCharacters(pagina, textoBuscado)
			.then(datos => setPersonajes(datos));
	}, [pagina, textoBuscado]);

	return (
		<>
			<div className='navbar'>
				<Navbar
					seteaPagina={setPagina}
					reseteaPersonajes={seteaTextoBuscado}
				/>
			</div>
			<div className='cards'>
				{
					personajes.error ?
						<Error />
						:
						<div className='container-list'>
							{
								personajes.results?.map(personaje => (
									<Card key={personaje.id} caracter={personaje} />
								))
							}
						</div>
				}
			</div>
			<div className='pagination'>
				<Pagination
					numeroPagina={pagina}
					seteaPagina={setPagina}
					personajes={personajes}
				/>
			</div>
		</>
	);
};