import './Navbar.css'
import { Button } from './Button'
import { useRef } from 'react';

export function Navbar({ seteaPagina , reseteaPersonajes }) {

	const buscador = useRef(null);

	const buscarPersonajes = (event) => {;
		if (event.key !== 'Enter') return;
		seteaPagina(1);
		reseteaPersonajes(buscador.current.value);
		buscador.current.value = "";
	};

	const resetearPersonajes = () => {
		seteaPagina(1);
		reseteaPersonajes('');
	};

	return (
		<div className='container-navbar'>
			<header className="header-navbar"> Rick and Morty</header>
			<nav className='nav-navbar'>
				{<input className="input-navbar" ref={buscador} onKeyDown={buscarPersonajes}  type="text" placeholder='Busca un personaje' />
				}
				<Button resetear={resetearPersonajes}/>
			</nav>
		</div>
	);
};