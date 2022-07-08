import './Navbar.css'
import { Button } from './Button'

export function Navbar({ referencia, cambioInput, envioTexto, buttonRest}) {


	return (
		<div className='container-navbar'>
			<header className="header-navbar"> Rick and Morty</header>
			<nav className='nav-navbar'>
				{<input className="input-navbar" ref={referencia} onKeyDown={envioTexto} onChange={cambioInput} type="text" placeholder=' Busca un personaje' />
				}
				<Button reset={buttonRest}/>
			</nav>
		</div>
	)
}