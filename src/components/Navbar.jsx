import './Navbar.css'
import { Button } from './Button'

export function Navbar({ reference, changeInput, sendText, buttonRest}) {


	return (
		<div className='container-navbar'>
			<header className="header-navbar"> Rick and Morty</header>
			<nav className='nav-navbar'>
				{<input className="input-navbar" ref={reference} onKeyDown={sendText} onChange={changeInput} type="text" placeholder=' Busca un personaje' />
				}
				<Button reset={buttonRest}/>
			</nav>
		</div>
	)
}